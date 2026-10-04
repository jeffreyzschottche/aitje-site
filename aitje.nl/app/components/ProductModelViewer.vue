<script setup lang="ts">
import type { Group, Scene, PerspectiveCamera, WebGLRenderer, Mesh, Material } from "three";
import type { OrbitControls } from "three/addons/controls/OrbitControls.js";
const props = defineProps<{ src: string; name: string; poster: string }>();
const host = ref<HTMLElement>();
const loading = ref(true);
const failed = ref(false);
const rotating = ref(false);
let renderer: WebGLRenderer | undefined;
let scene: Scene | undefined;
let camera: PerspectiveCamera | undefined;
let controls: OrbitControls | undefined;
let model: Group | undefined;
let intersection: IntersectionObserver | undefined;
let resize: ResizeObserver | undefined;
let frame = 0;
let visible = false;
let destroyed = false;
let initialized = false;
let generation = 0;
let loadModel: (() => Promise<void>) | undefined;
let killIntro: (() => void) | undefined;
function dispose(group: Group) {
  group.traverse(object => {
    const mesh = object as Mesh;
    if (!mesh.isMesh) return;
    mesh.geometry.dispose();
    const materials: Material[] = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    materials.forEach(material => material.dispose());
  });
}
function reset() { camera?.position.set(4.7, 5.6, 6.2); controls?.target.set(0, 0, 0); controls?.update(); }
watch(rotating, value => { if (controls) controls.autoRotate = value; });
watch(() => props.src, () => { loading.value = true; failed.value = false; if (loadModel) void loadModel(); });
onMounted(() => {
  const element = host.value!;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const draw = () => {
    frame = 0;
    if (destroyed || !visible || document.hidden || !renderer || !scene || !camera) return;
    controls?.update(); renderer.render(scene, camera); frame = requestAnimationFrame(draw);
  };
  const resume = () => { if (!frame) draw(); };
  document.addEventListener("visibilitychange", resume);
  const init = async () => {
    if (initialized || destroyed) return;
    initialized = true;
    try {
      const [THREE, { GLTFLoader }, { OrbitControls: Controls }, { RoomEnvironment }, { gsap }] = await Promise.all([
        import("three"), import("three/addons/loaders/GLTFLoader.js"), import("three/addons/controls/OrbitControls.js"), import("three/addons/environments/RoomEnvironment.js"), import("gsap"),
      ]);
      if (destroyed) return;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(35, 1, .1, 100);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1;
      const environment = new RoomEnvironment();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const target = pmrem.fromScene(environment, .04);
      onCleanupEnvironment = () => target.dispose();
      scene.environment = target.texture;
      environment.dispose(); pmrem.dispose();
      renderer.domElement.setAttribute("aria-label", "Draaibaar 3D-productmodel; sleep om te draaien en scroll om te zoomen");
      renderer.domElement.tabIndex = 0;
      element.appendChild(renderer.domElement);
      controls = new Controls(camera, renderer.domElement);
      controls.enableDamping = true; controls.enablePan = false; controls.minDistance = 4; controls.maxDistance = 13; controls.autoRotateSpeed = .6;
      controls.listenToKeyEvents(renderer.domElement);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x879485, 1));
      const key = new THREE.DirectionalLight(0xffffff, 2); key.position.set(3, 5, 4); scene.add(key);
      reset();
      const loader = new GLTFLoader();
      loadModel = async () => {
        const current = ++generation;
        loading.value = true; failed.value = false;
        try {
          const gltf = await loader.loadAsync(props.src);
          if (destroyed || current !== generation) { dispose(gltf.scene); return; }
          killIntro?.();
          if (model) { scene!.remove(model); dispose(model); }
          model = gltf.scene;
          const bounds = new THREE.Box3().setFromObject(model);
          const center = bounds.getCenter(new THREE.Vector3());
          const size = bounds.getSize(new THREE.Vector3());
          const scale = 4 / Math.max(size.x, size.y, size.z);
          model.position.copy(center).multiplyScalar(-scale); model.scale.setScalar(scale);
          scene!.add(model); reset(); controls!.autoRotate = rotating.value;
          if (!reducedMotion) { const tween = gsap.from(model.rotation, { y: -.18, duration: 1.2, ease: "power2.out" }); killIntro = () => { tween.kill(); }; }
          loading.value = false; resume();
        } catch { if (!destroyed && current === generation) { failed.value = true; loading.value = false; } }
      };
      resize = new ResizeObserver(() => {
        if (!renderer || !camera) return;
        const width = element.clientWidth; const height = element.clientHeight;
        if (!width || !height) return;
        renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix(); resume();
      });
      resize.observe(element);
      await loadModel();
    } catch { failed.value = true; loading.value = false; }
  };
  intersection = new IntersectionObserver(entries => {
    visible = Boolean(entries[0]?.isIntersecting);
    if (visible) { void init(); resume(); }
    else if (frame) { cancelAnimationFrame(frame); frame = 0; }
  }, { rootMargin: "120px" });
  intersection.observe(element);
  removeVisibilityListener = () => document.removeEventListener("visibilitychange", resume);
});
let removeVisibilityListener: (() => void) | undefined;
let onCleanupEnvironment: (() => void) | undefined;
onBeforeUnmount(() => {
  destroyed = true; generation++; cancelAnimationFrame(frame); intersection?.disconnect(); resize?.disconnect(); removeVisibilityListener?.(); killIntro?.();
  if (model) dispose(model);
  controls?.dispose(); onCleanupEnvironment?.(); renderer?.dispose(); renderer?.forceContextLoss();
});
</script>

<template>
  <div class="product-model-viewer" :data-model-ready="!loading && !failed" :data-model-src="src">
    <div ref="host" class="model-canvas-host">
      <img v-if="loading || failed" class="model-poster" :src="poster" :alt="name" width="1600" height="1200" />
      <span v-if="loading" class="model-status" role="status">3D-model laden…</span>
      <span v-if="failed" class="model-status" role="status">3D-weergave niet beschikbaar · productafbeelding</span>
    </div>
    <div class="model-viewer-bar"><span>Sleep om te draaien · scroll om te zoomen</span><div><button type="button" :disabled="loading || failed" :aria-pressed="rotating" @click="rotating = !rotating">{{ rotating ? 'Stop draaien' : 'Automatisch draaien' }}</button><button type="button" :disabled="loading || failed" @click="reset">Reset</button></div></div>
  </div>
</template>

<style scoped>
.product-model-viewer{border:1px solid #d3d9cc;border-radius:22px;overflow:hidden;background:radial-gradient(ellipse at 50% 35%,#fff 0%,#edf1e6 75%)}.model-canvas-host{position:relative;width:100%;height:clamp(320px,40vw,550px);touch-action:pan-y}.model-canvas-host :deep(canvas){position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none}.model-poster{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;z-index:1}.model-status{position:absolute;bottom:1rem;left:1rem;right:1rem;text-align:center;font-size:.75rem;z-index:2}.model-viewer-bar{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:1rem 1.25rem;border-top:1px solid #d3d9cc;background:#f7f8f1}.model-viewer-bar>span{font-size:.7rem;color:var(--color-muted)}.model-viewer-bar>div{display:flex;gap:.5rem;flex:none}.model-viewer-bar button{padding:.5rem .75rem;border-radius:50px;border:1px solid #cbd2bd;font-size:.7rem;cursor:pointer}.model-viewer-bar button[aria-pressed=true]{background:var(--color-brand);border-color:var(--color-brand)}.model-viewer-bar button:disabled{opacity:.5;cursor:default}.model-viewer-bar button:focus-visible{outline:2px solid #a38700;outline-offset:3px}@media(max-width:640px){.model-viewer-bar{flex-wrap:wrap}.model-canvas-host{height:340px}}
</style>
