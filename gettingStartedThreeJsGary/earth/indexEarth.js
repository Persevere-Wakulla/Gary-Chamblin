import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import getStarfield from "./getStarfield.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const earthGroup = new THREE.Group();
earthGroup.rotation.z = -23.4 * Math.PI / 180;
scene.add(earthGroup);   
new OrbitControls(camera, renderer.domElement);
const detail = 12;
const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, detail);
const material = new THREE.MeshStandardMaterial({
    map: loader.load('assets/earthmap1k.jpg')
});

const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

const lightsMat = new THREE.MeshBasicMaterial({
    map: loader.load('assets/earthlights1k.jpg'),
    blending: THREE.AdditiveBlending,
});

const lightsMesh = new THREE.Mesh(geometry, lightsMat);
earthGroup.add(lightsMesh);

const cloudsMat = new THREE.MeshStandardMaterial({
    map: loader.load('assets/05_earthcloudmaptrans.jpg'),
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,

});

const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
cloudsMesh.scale.setScalar(.999)
earthGroup.add(cloudsMesh)

const stars = getStarfield({numOfStars: 2000});
scene.add(stars); 

const sunlight = new THREE.DirectionalLight(0xffffff);
sunlight.position.set(-2, 0.5, 1.5)
scene.add(sunlight) 

function animate() {
    requestAnimationFrame(animate);
    earthMesh.rotation.y += 0.002; 
    lightsMesh.rotation.y += 0.002; 
    cloudsMesh.rotation.y += 0.002
    renderer.render(scene, camera)
}

animate();

function handleWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', handleWindowResize, false);