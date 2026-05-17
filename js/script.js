const carrusel = document.querySelector(".galeria");
const imagenes = document.querySelectorAll(".galeria img");
const btnSig = document.getElementById("btn_sig");
const btnAnt = document.getElementById("btn_ant");

let indice = 0;
const visibles = 3; // Cuántas fotos se ven a la vez
let enTransicion = false;

//Clonamos las primeras imágenes y las añadimos al final
for (let i = 0; i < visibles; i++) {
    let clon = imagenes[i].cloneNode(true);
    carrusel.appendChild(clon);
}

function obtenerPaso(){
    const anchoImagen = imagenes[0].getBoundingClientRect().width;
    const gap = 20;
    return anchoImagen + gap;
}

function moverCarrusel() {
    enTransicion = true;
    const pasoActual = obtenerPaso();
    carrusel.style.transition = "transform 0.5s ease-in-out";
    carrusel.style.transform = `translateX(-${indice * pasoActual}px)`;
}

btnSig.addEventListener("click", () => {
    if (enTransicion) return;
    indice++;
    moverCarrusel(); 
});

btnAnt.addEventListener("click", () => {
    if (enTransicion) return;
    if (indice <= 0) {
        const pasoActual = obtenerPaso();
        carrusel.style.transition = "none";
        indice = imagenes.length;
        carrusel.style.transform = `translateX(-${indice * pasoActual}px) `;
        
        setTimeout(() => {
            indice--;
            moverCarrusel();
        }, 20);
    } else {
        indice--;
        moverCarrusel();
    }
});

carrusel.addEventListener("transitionend", ()=>{
    enTransicion = false;

    if (indice === imagenes.length) {
        carrusel.style.transition = "none";
        indice = 0;
        carrusel.style.transform = `translateX(0px)`;
    } 
});

const video = document.getElementById("video1");

video.volume = 0.25;

const btnMenu = document.getElementById('btn_menu');
const menu = document.getElementById('menu');
const enlacesMenu = document.querySelectorAll('.nav a');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('activo');
    btnMenu.classList.toggle('abierto');
});

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menu.classList.remove('activo');
        btnMenu.classList.remove('abierto');
    });
});