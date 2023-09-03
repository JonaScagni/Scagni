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



const VALOR_VINO = 1500;
const VALOR_CERVEZA = 1000;
const VALOR_LICOR = 3000;
const SI= "si";
const NO= "no";
let cantidadVino;
let cantidadCerveza;
let cantidadLicor;
let totalVino;
let totalCerveza;
let totalLicor;
let total = 0;
let ticket = "NOMBRE    PRECIO   CANTIDAD     SUBTOTAL  \n"
let subTotal;
let modificar;
// funcion

function cargaCantidad (){
    cantidadVino = +prompt ("Ingrese la cantidad de vinos que desea comprar")
    cantidadCerveza = +prompt ("Ingrese la cantidad de cervezas que desea comprar")
    cantidadLicor = +prompt ("Ingrese la cantidad de licores q desea comprar")  
}
//Ciclo
do {
    cargaCantidad ();
    totalVino = VALOR_VINO * cantidadVino   
    totalCerveza = VALOR_CERVEZA * cantidadCerveza   
    totalLicor = VALOR_LICOR * cantidadLicor
    modificar = prompt ("Desea modificar su compra: si o no")
    while (modificar !== SI && modificar !== NO) {
    modificar = prompt ("Su respuesta es incorrecta: responda si o no")
    }
    if (modificar == SI) {
        cargaCantidad ();
    }

    subTotal = ` Vino             ${VALOR_VINO}          ${cantidadVino}              ${totalVino} \n
    Cerveza           ${VALOR_CERVEZA}          ${cantidadCerveza}              ${totalCerveza} \n
    Licor             ${VALOR_LICOR}            ${cantidadLicor}                 ${totalLicor}`
    
    total = total + totalVino + totalCerveza + totalLicor

    alert (ticket + subTotal + "\n" 
           + "total:" + total )

}while (total <= 0)



