import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const host = document.querySelector("#rubik-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
camera.position.set(5.5, 4.3, 7.2);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  preserveDrawingBuffer: true,
});
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.3;
host.appendChild(renderer.domElement);
scene.add(new THREE.HemisphereLight(0xffffff, 0x202b3b, 3));
const key = new THREE.DirectionalLight(0xffffff, 4);
key.position.set(4, 7, 5);
scene.add(key);
const rim = new THREE.DirectionalLight(0x9bcfff, 2);
rim.position.set(-5, 1, -4);
scene.add(rim);
const cube = new THREE.Group();
scene.add(cube);
const bodyGeometry = new RoundedBoxGeometry(0.96, 0.96, 0.96, 3, 0.065);
const tileGeometry = new RoundedBoxGeometry(0.81, 0.81, 0.045, 3, 0.055);
const bodyMaterial = new THREE.MeshStandardMaterial({
  color: 0x0c1014,
  roughness: 0.38,
  metalness: 0.15,
});
const faces = [
  { axis: 0, sign: 1, color: 0xf03238, rot: [0, Math.PI / 2, 0] },
  { axis: 0, sign: -1, color: 0xff8b16, rot: [0, -Math.PI / 2, 0] },
  { axis: 1, sign: 1, color: 0xf6f4e9, rot: [-Math.PI / 2, 0, 0] },
  { axis: 1, sign: -1, color: 0xffd52b, rot: [Math.PI / 2, 0, 0] },
  { axis: 2, sign: 1, color: 0x1688ef, rot: [0, 0, 0] },
  { axis: 2, sign: -1, color: 0x25b85a, rot: [0, Math.PI, 0] },
];
let tiles = 0;
for (let x = -1; x <= 1; x++)
  for (let y = -1; y <= 1; y++)
    for (let z = -1; z <= 1; z++) {
      const coords = [x, y, z];
      const piece = new THREE.Group();
      piece.position.set(x, y, z);
      piece.add(new THREE.Mesh(bodyGeometry, bodyMaterial));
      for (const face of faces)
        if (coords[face.axis] === face.sign) {
          const tile = new THREE.Mesh(
            tileGeometry,
            new THREE.MeshStandardMaterial({
              color: face.color,
              roughness: 0.26,
              metalness: 0.04,
            }),
          );
          const position = [0, 0, 0];
          position[face.axis] = face.sign * 0.493;
          tile.position.set(...position);
          tile.rotation.set(...face.rot);
          piece.add(tile);
          tiles++;
        }
      cube.add(piece);
    }
renderer.domElement.dataset.tiles = String(tiles);
renderer.domElement.dataset.cubies = String(cube.children.length);
let automatic = true;
const slider = document.querySelector("#rotation");
slider.addEventListener("input", () => {
  automatic = false;
  cube.rotation.y = (Number(slider.value) * Math.PI) / 180;
  document.querySelector("#angle").textContent = slider.value + "°";
});
document.querySelector("#rotate").addEventListener("click", () => {
  automatic = !automatic;
});
function resize() {
  const rect = host.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height);
  camera.aspect = rect.width / rect.height;
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(host);
resize();
const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const t = clock.getElapsedTime();
  if (automatic) cube.rotation.y = t * 0.32;
  cube.rotation.x = Math.sin(t * 0.35) * 0.09;
  renderer.render(scene, camera);
});
