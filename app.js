



let carrito = [];
let listaProducto = []

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


localStorage.setItem("productos", JSON.stringify(productos));

const selecProducto = document.querySelector('#productos');
const botonAgregar = document.querySelector('#agregar');

function traerItemsStorage() {

  producto = JSON.parse(localStorage.getItem('productos')) || [];
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];
} 

function popularDropdown() {

  listaProducto.forEach(({nombre,marca,precio},index) => {

    const option = document.createElement('option');
    option.textContent = `${nombre} - ${marca} - ${precio}`;
    option.value = index;
    selecProducto.appendChild(option);
  });
}

function dibujarTabla() {

  const bodyTabla = document.getElementById('items');
  bodyTabla.innerHTML = ``;
  // tengo un error en esta funcion, que no me muestra los objetos de mi carrito y no me doy cuenta como resolverlo
  carrito.forEach((item,index) => {
     
    const {nombre,precio,marca}  = item;
    
 
      bodyTabla.innerHTML = bodyTabla.innerHTML + `
      <tr>
        <th scope="row">${index+1}</th>
        <th>${carrito.nombre || ''}</th>
        <th>${carrito.precio || ''}</th>
        <th>${carrito.marca }</th>
        
        
      </tr>
    `;
  })
}


document.addEventListener('DOMContentLoaded', () => {
  traerItemsStorage();
  popularDropdown();
  dibujarTabla();
  
 
  botonAgregar.addEventListener("submit", (e) =>{
    e.preventDefault();
    const productoSeleccionado = listaProducto.find((item,index) => index === +selecProducto.value)
    if( productoSeleccionado === undefined) {
      alert("seleccione un producto");
      return;
    }
    
  const indiceCarrito = carrito.findIndex((Item) => Item.producto === productoSeleccionado);
  if(indiceCarrito !== -1){
    carrito[indiceCarrito].cantidad++;
  }else {
    const Item = new item(productoSeleccionado,1);
    carrito.push(Item);
  }  
    localStorage.setItem('carrito',JSON.stringify(carrito));
    dibujarTabla();
  
   });
  });

    
    
function datosBancarios () {
  alert("Ingrese los datos de su tarjeta de credito o debito")
}


const boton = document.querySelector('#botonComprar');
boton.addEventListener("click", datosBancarios);






