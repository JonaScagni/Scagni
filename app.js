const MAYOR_EDAD = 18
let edad = +prompt ("Ingrese su edad:");

//Condicional

if (edad >= MAYOR_EDAD) {
    alert ("Lista de bebidas" + "\n"
           + "Vino 1500$" + "\n"
           + "Cerveza 1000$" + "\n"
           + "Licor 3000$" );
} else {
    alert ("Eres menor de edad, no puedes comprar bebidas alcohólicas.");
}

//Ciclo

const VALOR_VINO = 1500;
const VALOR_CERVEZA = 1000;
const VALOR_LICOR = 3000;
let cantidadVino;
let cantidadCerveza;
let cantidadLicor;
let totalVino;
let totalCerveza;
let totalLicor;
let total = 0;

do {
    cantidadVino = +prompt ("Ingrese la cantidad de vinos que desea comprar")
    totalVino = VALOR_VINO * cantidadVino
    cantidadCerveza = +prompt ("Ingrese la cantidad de cervezas que desea comprar")
    totalCerveza = VALOR_CERVEZA * cantidadCerveza
    cantidadLicor = +prompt ("Ingrese la cantidad de licores q desea comprar")
    totalLicor = VALOR_LICOR * cantidadLicor
    total = alert ("El precio total es:" + "$" + (totalVino + totalCerveza + totalLicor))
}while (total >= 0)
