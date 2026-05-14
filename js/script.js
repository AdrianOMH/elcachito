const carrusel = document.querySelector(".galeria");
const imagenes = document.querySelectorAll(".galeria img");
const btnSig = document.getElementById("btn_sig");
const btnAnt = document.getElementById("btn_ant");

let indice = 0;
const paso = 620; // Los 600px de ancho + 20px de gap
const visibles = 3; // Cuántas fotos se ven a la vez
let enTransicion = false;

//Clonamos las primeras imágenes y las añadimos al final
for (let i = 0; i < visibles; i++) {
    let clon = imagenes[i].cloneNode(true);
    carrusel.appendChild(clon);
}

function moverCarrusel() {
    enTransicion = true;
    carrusel.style.transition = "transform 0.5s ease-in-out";
    carrusel.style.transform = `translateX(-${indice * paso}px)`;
}

btnSig.addEventListener("click", () => {
    if (enTransicion) return;
    indice++;
    moverCarrusel(); 
});

btnAnt.addEventListener("click", () => {
    if (enTransicion) return;
    if (indice <= 0) {
        // Salto instantáneo al clon del final antes de retroceder
        carrusel.style.transition = "none";
        indice = imagenes.length;
        carrusel.style.transform = `translateX(-${indice * paso}px) `;
        
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

    // Si llegamos al clon, esperamos a que termine la animación y saltamos al inicio
    if (indice === imagenes.length) {
        carrusel.style.transition = "none"; // Quitamos la animación para el salto
        indice = 0;
        carrusel.style.transform = `translateX(0px)`;
    } 
});

const video = document.getElementById("video1");

video.volume = 0.25;