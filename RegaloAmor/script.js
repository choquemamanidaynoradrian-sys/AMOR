const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas:document.getElementById("bg")
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

camera.position.z = 80;

const geometry = new THREE.BufferGeometry();

const puntos=[];

for(let t=0;t<Math.PI*2;t+=0.02){

let x=
16*Math.pow(Math.sin(t),3);

let y=
13*Math.cos(t)
-5*Math.cos(2*t)
-2*Math.cos(3*t)
-Math.cos(4*t);

puntos.push(x*2);
puntos.push(y*2);
puntos.push(0);

}

geometry.setAttribute(
'position',
new THREE.Float32BufferAttribute(
puntos,
3
)
);

const material =
new THREE.PointsMaterial({
color:0xff1493,
size:2
});

const corazon =
new THREE.Points(
geometry,
material
);

scene.add(corazon);
const estrellasGeo =
new THREE.BufferGeometry();

const estrellas=[];

for(let i=0;i<5000;i++){

estrellas.push(
(Math.random()-0.5)*1000,
(Math.random()-0.5)*1000,
(Math.random()-0.5)*1000
);

}

estrellasGeo.setAttribute(
'position',
new THREE.Float32BufferAttribute(
estrellas,
3
)
);

const estrellasMat =
new THREE.PointsMaterial({
color:0xffffff,
size:1
});

const galaxia =
new THREE.Points(
estrellasGeo,
estrellasMat
);

scene.add(galaxia);

const fotos =
document.querySelectorAll(".foto");

function animar(){

requestAnimationFrame(animar);

corazon.rotation.y += 0.01;

galaxia.rotation.y += 0.0005;

let tiempo =
Date.now()*0.0003;

fotos.forEach((foto,i)=>{

let radio=350;

let angulo=
tiempo+
i*Math.PI*2/fotos.length;

let x=
window.innerWidth/2+
Math.cos(angulo)*radio;

let y=
window.innerHeight/2+
Math.sin(angulo)*radio;

foto.style.left=
(x-65)+"px";

foto.style.top=
(y-65)+"px";

});

renderer.render(
scene,
camera
);

}

animar();
function crearCorazon(){

const corazon =
document.createElement("div");

corazon.className="corazon";

corazon.innerHTML="💖";

corazon.style.left=
Math.random()*window.innerWidth+"px";

corazon.style.top=
window.innerHeight+"px";

document.body.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},6000);

}

setInterval(crearCorazon,300);
document
.getElementById("abrirCarta")
.onclick=function(){

document
.getElementById("carta")
.style.display="block";

};

function cerrarCarta(){

document
.getElementById("carta")
.style.display="none";

}
document.addEventListener("click", function() {
    const musica = document.getElementById("musica");
    musica.play();
}, { once: true });