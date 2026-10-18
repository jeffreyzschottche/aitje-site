import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

// A complete procedural product scene. Every visible part is real geometry.
const stage = document.querySelector("#stage");
const scene = new THREE.Scene();
scene.background = new THREE.Color("#e8e9df");
const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 60);
camera.position.set(4.3, 2.9, 5.8);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.35;
renderer.domElement.setAttribute(
  "aria-label",
  "Draaibaar kinetisch object met drie metalen ringen",
);
renderer.domElement.dataset.ready = "true";
renderer.domElement.tabIndex = 0;
stage.append(renderer.domElement);

const pmrem = new THREE.PMREMGenerator(renderer);
const environment = new RoomEnvironment();
const environmentMap = pmrem.fromScene(environment, 0.04);
scene.environment = environmentMap.texture;
environment.dispose();
pmrem.dispose();

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1.65, 0);
controls.enablePan = false;
controls.enableZoom = false;
controls.enableDamping = true;
controls.minPolarAngle = Math.PI * 0.14;
controls.maxPolarAngle = Math.PI * 0.59;

const gold = new THREE.MeshPhysicalMaterial({
  color: "#b99043",
  metalness: 1,
  roughness: 0.24,
  clearcoat: 0.4,
});
const graphite = new THREE.MeshPhysicalMaterial({
  color: "#242d28",
  metalness: 0.72,
  roughness: 0.31,
  clearcoat: 0.35,
});
const glass = new THREE.MeshPhysicalMaterial({
  color: "#b4d1c2",
  metalness: 0.05,
  roughness: 0.04,
  transmission: 0.97,
  thickness: 0.5,
  ior: 1.45,
});
const warm = new THREE.MeshStandardMaterial({
  color: "#e2ad47",
  emissive: "#d89b25",
  emissiveIntensity: 0.2,
  metalness: 0.6,
  roughness: 0.25,
});
const model = new THREE.Group();
scene.add(model);
renderer.domElement.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key))
    return;
  event.preventDefault();
  if (event.key === "ArrowLeft") model.rotation.y -= 0.15;
  if (event.key === "ArrowRight") model.rotation.y += 0.15;
  if (event.key === "ArrowUp")
    camera.position.y = Math.min(camera.position.y + 0.2, 5);
  if (event.key === "ArrowDown")
    camera.position.y = Math.max(camera.position.y - 0.2, 1.5);
});
function part(geometry, material, parent = model) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

// Stepped pedestal, accent bands and a slender central support.
part(new THREE.CylinderGeometry(0.82, 0.9, 0.17, 96), graphite).position.y =
  0.1;
part(new THREE.CylinderGeometry(0.815, 0.815, 0.018, 96), gold).position.y =
  0.195;
part(new THREE.CylinderGeometry(0.69, 0.78, 0.11, 96), graphite).position.y =
  0.25;
part(new THREE.CylinderGeometry(0.105, 0.19, 0.48, 48), gold).position.y = 0.52;
const assembly = new THREE.Group();
assembly.position.y = 1.86;
model.add(assembly);

const rings = [];
for (let index = 0; index < 3; index++) {
  const pivot = new THREE.Group();
  assembly.add(pivot);
  const radius = 1.19 - index * 0.22;
  const ring = part(
    new THREE.TorusGeometry(radius, 0.045, 16, 144),
    gold,
    pivot,
  );
  ring.rotation.x = index === 1 ? Math.PI / 2 : 0;
  // Visible precision marks around the outer gimbal.
  for (let mark = 0; mark < 48; mark++) {
    const angle = (mark / 48) * Math.PI * 2;
    const tick = part(
      new THREE.BoxGeometry(0.009, mark % 4 === 0 ? 0.048 : 0.022, 0.007),
      graphite,
      ring,
    );
    tick.position.set(
      Math.sin(angle) * radius,
      Math.cos(angle) * radius,
      0.045,
    );
    tick.rotation.z = -angle;
  }
  for (const direction of [-1, 1]) {
    const pin = part(
      new THREE.CylinderGeometry(0.078, 0.078, 0.105, 32),
      graphite,
      pivot,
    );
    pin.rotation.z = Math.PI / 2;
    pin.position.x = radius * direction;
    part(new THREE.SphereGeometry(0.046, 20, 16), gold, pivot).position.x =
      (radius + 0.065) * direction;
  }
  rings.push(pivot);
}

part(new THREE.IcosahedronGeometry(0.43, 4), glass, assembly);
part(new THREE.IcosahedronGeometry(0.21, 1), warm, assembly);
const meridian = part(
  new THREE.TorusGeometry(0.46, 0.012, 12, 96),
  gold,
  assembly,
);
meridian.rotation.x = Math.PI / 2;

// A restrained floor and real soft contact shadows anchor the object.
const ground = part(
  new THREE.PlaneGeometry(200, 200),
  new THREE.ShadowMaterial({ color: "#526047", opacity: 0.17 }),
  scene,
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.005;
ground.castShadow = false;
scene.add(new THREE.HemisphereLight("#ffffff", "#777f66", 2.4));
const key = new THREE.DirectionalLight("#fff5dd", 4.5);
key.position.set(-3, 7, 5);
key.castShadow = true;
key.shadow.mapSize.set(1536, 1536);
key.shadow.camera.left = -4;
key.shadow.camera.right = 4;
key.shadow.camera.top = 5;
key.shadow.camera.bottom = -3;
key.shadow.normalBias = 0.025;
key.shadow.blurSamples = 12;
scene.add(key);
const rim = new THREE.DirectionalLight("#e4edf6", 2.5);
rim.position.set(4, 3, -4);
scene.add(rim);

const motion = matchMedia("(prefers-reduced-motion: reduce)");
let playing = !motion.matches;
let exploded = 0;
let visible = true;
let lastTime = 0;
let elapsed = 0;
const toggle = document.querySelector("#motion");
function updateToggle() {
  toggle.textContent = playing ? "Pauzeren" : "Draaien";
  toggle.setAttribute("aria-pressed", String(playing));
}
toggle.addEventListener("click", () => {
  playing = !playing;
  updateToggle();
});
motion.addEventListener("change", () => {
  playing = !motion.matches;
  updateToggle();
});
updateToggle();
document.querySelector("#explode").addEventListener("input", (event) => {
  exploded = Number(event.target.value) / 100;
  document.querySelector("#explode-value").textContent =
    `${event.target.value}%`;
});
for (const button of document.querySelectorAll("[data-finish]")) {
  button.addEventListener("click", () => {
    gold.color.set(button.dataset.finish);
    document
      .querySelectorAll("[data-finish]")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
  });
}
document.querySelector("#reset").addEventListener("click", () => {
  model.rotation.y = 0;
  camera.position.set(4.3, 2.9, 5.8);
  controls.target.set(0, 1.65, 0);
});
const resize = new ResizeObserver(() => {
  const { width, height } = stage.getBoundingClientRect();
  if (!width || !height) return;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
resize.observe(stage);
new IntersectionObserver(([entry]) => {
  visible = entry.isIntersecting;
}).observe(stage);
document.addEventListener("visibilitychange", () => {
  lastTime = 0;
});
function frame(time) {
  const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
  lastTime = time;
  if (visible && !document.hidden) {
    if (playing) elapsed += delta;
    rings.forEach((ring, index) => {
      ring.rotation.set(
        0.22 + Math.sin(elapsed * 0.32 + index * 1.4) * 0.52,
        elapsed * (0.1 + index * 0.075) + index * 0.65,
        index * 0.18,
      );
      ring.position.x = exploded * (index - 1) * 0.7;
      ring.position.y = exploded * index * 0.12;
    });
    controls.update();
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
