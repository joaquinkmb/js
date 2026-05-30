//PRIMER EJERCICIO
//Parte 1

const titulo = document.getElementById('titulo');
const botonCambiar = document.getElementById('cambiar');
const botonResetear = document.getElementById('resetear');
const botonVerificar = document.getElementById('verificar');


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

     
//Parte 4

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

const campo = document.getElementById('campo');
const resultado = document.getElementById('resultado');

botonVerificar.addEventListener("click", () => {
    if (campo.value === "") {
        resultado.textContent = "El campo no puede estar vacío";
        resultado.style.color = "red";

    } else if (campo.value.length < 3) {
        resultado.textContent = "Debe tener al menos 3 caracteres";
        resultado.style.color = "orange"; 

    } else {
        resultado.textContent = "Válido";
        resultado.style.color = "green";      
    }
});

//Parte 2

const botonMostrar = document.getElementById('mostrar');
const productos = document.getElementById('lista');

const lista = [
    "Notebook",
    "Teclado",
    "Mouse",
    "Auriculares",
    "Monitor",
];

botonMostrar.addEventListener("click", () => {
    productos.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        productos.innerHTML += "<li>" + lista[i] + "</li>";
    }
});

const botonMostrarTres = document.getElementById('mostrarTres');
const productosTres = document.getElementById('listaTres');

botonMostrarTres.addEventListener("click", () => {
    productosTres.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        productosTres.innerHTML += "<li>" + lista[i] + "</li>";
    }
});

//Parte 3

const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const generarSuma = document.getElementById('sumarNumeros');
const resultadoSuma = document.getElementById('resultadoSuma');

function suma(num1, num2) {
    return num1 + num2;
}

function numeroValido(validacion){
    return !isNaN(validacion) && validacion > 0;
}

generarSuma.addEventListener("click", () => {
    const valor1 = Number(numero1.value);
    const valor2 = Number(numero2.value);

    if(!numeroValido(valor1) || !numeroValido(valor2)){
        resultadoSuma.textContent = "Los valores ingresados deben de ser mayor a 0";
        return;
    }
    const resultado = suma(valor1, valor2);
    resultadoSuma.textContent = "Resultado: " + resultado;
});

//Extra
const contar = document.getElementById('botonContar');
const cuenta = document.getElementById('cuenta');


contar.addEventListener("click", () => {
   let numCuenta = 1;
   cuenta.textContent = "";

   while(numCuenta <=10){
    cuenta.textContent += numCuenta + " ";
    numCuenta ++;
   }
});