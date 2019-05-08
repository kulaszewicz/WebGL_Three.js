const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);



const controls = new THREE.OrbitControls(camera);

camera.position.z = 3;
controls.update();

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setClearColor("#555");

renderer.setSize(window.innerWidth, window.innerHeight);


document.getElementById("cube").appendChild(renderer.domElement);


window.addEventListener('resize', () => {
   renderer.setSize(window.innerWidth, window.innerHeight);
   camera.aspect = window.innerWidth / window.innerHeight;

   camera.updateProjectionMatrix();
});

//controls = new THREE.OrbitControls(camera, renderer.domElement);

const geometry = new THREE.CubeGeometry(1, 1, 1);
const cubeMaterials =
    [
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('resources/textures/1.png'), side: THREE.DoubleSide} ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('resources/textures/6.png'), side: THREE.DoubleSide} ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('resources/textures/3.png'), side: THREE.DoubleSide} ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('resources/textures/4.png'), side: THREE.DoubleSide} ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('resources/textures/5.png'), side: THREE.DoubleSide} ),
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('resources/textures/2.png'), side: THREE.DoubleSide} ),
    ];

const material = new THREE.MeshFaceMaterial( cubeMaterials);

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

const light = new THREE.PointLight(0xff0000, 1, 100);
light.position.set(10,0,25);

scene.add(light);


const render = () => {
  requestAnimationFrame(render);

  controls.update();
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

render();