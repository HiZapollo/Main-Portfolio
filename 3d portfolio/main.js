import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// INITIALIZATION

const scene = new THREE.Scene();
const skyTexture = new THREE.TextureLoader().load('./assets/nighty.jpg')
scene.background = skyTexture

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(-20);
camera.position.setY(5);

// GEOMETRY

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus = new THREE.Mesh( geometry, material );

scene.add( torus );

// LIGHTING

const pointLight = new THREE.PointLight(0xffffff, 40)
pointLight.position.set(0, 20, 0)

const directionalLight = new THREE.DirectionalLight()
directionalLight.position.set(0,0,-40)

const plightHelper = new THREE.PointLightHelper( pointLight );
const dlightHelper = new THREE.DirectionalLightHelper(directionalLight);
const gridHelper = new THREE.GridHelper(200, 50)

// const ambientLight = new THREE.AmbientLight()

scene.add( pointLight, plightHelper, gridHelper );

// CONTROLS

const controls = new OrbitControls(camera, renderer.domElement)

function moveCamera() {

  const t = document.body.getBoundingClientRect().top;
  
  camera.position.z = (t * -0.01) + 20;
  camera.position.y = (t * 0.002) + 5

}

document.body.onscroll = moveCamera

// ANIMATION

function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render( scene, camera );
}

animate();
