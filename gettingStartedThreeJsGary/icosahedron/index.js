import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import getStarfield from "./getStarfield1.js";

const w = window.innerWidth;
const h = window.innerHeight;
 const renderer = new THREE.WebGLRenderer({ antialias: true });
 renderer.setSize(w, h);
 document.body.appendChild(renderer.domElement);
 const fov = 100;
 const aspect = w / h;
 const near = 1;
 const far = 1000;
 const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
 camera.position.z = 2;
 const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;
const stars = getStarfield({numOfStars: 2000});
scene.add(stars) 

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});

const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);


const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa00);
scene.add(hemiLight);
 
 function animate(t = 0) {
    requestAnimationFrame(animate);
    // mesh.scale.setScalar(Math.cos(t * 0.001) + 0);
    mesh.rotation.y = t * 0.0001
    renderer.render(scene, camera);
    controls.update();
 }
 animate();




