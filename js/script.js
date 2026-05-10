const carrusel = document.querySelector(".galeria");
const imagenes = document.querySelectorAll(".galeria img");
const btnSig = document.getElementById("btn_sig");
const btnAnt = document.getElementById("btn_ant");

let indice = 0;
const paso = 620; // Los 600px de ancho + 20px de gap
const visibles = 3; // Cuántas fotos se ven a la vez

//Clonamos las primeras imágenes y las añadimos al final
for (let i = 0; i < visibles; i++) {
    let clon = imagenes[i].cloneNode(true);
    carrusel.appendChild(clon);
}

function moverCarrusel() {
    carrusel.style.transition = "transform 0.5s ease-in-out";
    carrusel.style.transform = `translateX(-${indice * paso}px)`;
}

btnSig.addEventListener("click", () => {
    indice++;
    moverCarrusel();

    // Si llegamos al clon, esperamos a que termine la animación y saltamos al inicio
    if (indice === imagenes.length) {
        setTimeout(() => {
            carrusel.style.transition = "none"; // Quitamos la animación para el salto
            indice = 0;
            carrusel.style.transform = `translateX(0px)`;
        }, 500);
    }
});

btnAnt.addEventListener("click", () => {
    if (indice <= 0) {
        // Salto instantáneo al clon del final antes de retroceder
        carrusel.style.transition = "none";
        indice = imagenes.length;
        carrusel.style.transform = `translateX(-${indice * paso}px) `;
        
        setTimeout(() => {
            indice--;
            moverCarrusel();
        }, 10);
    } else {
        indice--;
        moverCarrusel();
    }
});