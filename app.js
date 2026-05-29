//PRIMER EJERCICIO

// Parte 1

const titulo = document.getElementById('titulo');
const botonCambiar = document.getElementById('cambiar');
const botonResetear = document.getElementById('resetear');
const botonVerificar = document.getElementById('verificar')

botonCambiar.addEventListener("click", () => {
    titulo.textContent = "Texto cambiado";
    titulo.style.color = "blue";
});

botonResetear.addEventListener("click", () => {
    titulo.textContent = "Hola";
    titulo.style.color = "black";
});

//Parte 2

const caja = document.getElementById('caja');
const botonActivar = document.getElementById('activar');

let activo = false;

botonActivar.addEventListener("click", () => {

    activo = !activo;


    if (activo) {
        caja.style.backgroundColor = "lightgreen";
        botonActivar.textContent = "Desactivar";
    } else {
        caja.style.backgroundColor = "white";
        botonActivar.textContent = "Activar";
    }
});

//Parte 3
const input = document.querySelector("#nombre");
const saludo = document.querySelector("#saludo");

input.addEventListener("input", () => {
    if(input.value === ""){
        saludo.textContent = "";
    } else{
        saludo.textContent = 'Hola, ' + input.value;
    }
});

     

// Parte 4

let contador = 0;

const numero = document.getElementById('contador');
const botonSumar = document.getElementById('sumar');
const botonRestar = document.getElementById('restar');

botonSumar.addEventListener("click", () => {
    contador++;
    numero.textContent = contador;
});

botonRestar.addEventListener("click", () => {

    if (contador > 0) {
        contador--;
        numero.textContent = contador;
    }

});


//SEGUNDO EJERCICIO

//Parte 1

botonVerificar.addEventListener("click", () =>{
    if ()
    
})
