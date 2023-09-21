
const listaProducto = []

listaProducto.push(new Producto("Vino Malbec", "Emilia", 1700));
listaProducto.push(new Producto("Vino Cabernet", "Portillo", 1500));
listaProducto.push(new Producto("Vino Sira", "EstibaI", 1300));
listaProducto.push(new Producto ("Cerveza IPA","Andes", 1200));
listaProducto.push(new Producto ("Cerveza ROJA","Imperial", 1100));
listaProducto.push(new Producto ("Cerveza RUBIA","Andes", 1000));
listaProducto.push(new Producto ("Fernet 750ml","Branca", 3750));
listaProducto.push(new Producto ("Fernet 750ml","1882", 2550));
listaProducto.push(new Producto ("Vodka","Smirnof", 2850));
listaProducto.push(new Producto ("Vodka","SKY", 3950));
listaProducto.push(new Producto ("Whisky","Johnnie Walker, Red Label", 11500));
listaProducto.push(new Producto ("Whisky","Johnnie Walker, Black Label", 19500));



const detalleFactura = []

let salir;
let cantidad;
let opcion;
let total = 0;

// Menu de compras
function menu () {

do {
    const listaStringProductos = listaProducto.map((listaProducto,index) => 

    `${index + 1}  - ${listaProducto.nombre}  ${listaProducto.marca}   ${listaProducto.precio}`);

     opcion = +prompt("Que producto desea elegir?" + "\n" + listaStringProductos.join("\n"))

     while(opcion <= 0 || opcion > listaProducto.length || isNaN(opcion) || opcion == undefined) {
     opcion = +prompt("Que producto desea elegir?" + "\n" + listaStringProductos.join("\n"))
     }

      cantidad = +prompt("Ingrese la cantidad que desea comprar:");

     while(cantidad < 0 || isNaN(cantidad) || cantidad == undefined) {
      cantidad = +prompt("Ingrese la cantidad que desea comprar:");
     
     }

    detalleFactura.push(new itemFactura(listaProducto[opcion-1].nombre,listaProducto[opcion-1].precio,cantidad));

    salir = prompt("Desea agregar otro producto? si/no");
    

}while(salir != "no") 

}

alert("Bienvenido a nuestra tienda de bebeidas digital, presione aceptar para comenzar") 

menu ();

// ticket

total = detalleFactura.reduce((acumulador,item) => acumulador + item.subtotal,0);

const Ticket = detalleFactura.map((itemFactura,index,) => 

`${index + 1}   ${itemFactura.nombre}    ${itemFactura.cantidad}      ${itemFactura.precio}        ${itemFactura.subtotal}`);

alert( "PRODUCTO   CANTIDAD     PRECIO    SUBTOTAL" + "\n"
     + Ticket.join("\n") + ` \n
     El total de la compra es:  ${total}`);








