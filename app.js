
 let carrito = [];
 let listaProducto = [];
 //let productos;
 
listaProducto.push(new producto("Vino Malbec", "Emilia", 1700));
listaProducto.push(new producto("Vino Cabernet", "Portillo", 1500));
listaProducto.push(new producto("Vino Sira", "EstibaI", 1300));
listaProducto.push(new producto ("Cerveza IPA","Andes", 1200));
listaProducto.push(new producto ("Cerveza ROJA","Imperial", 1100));
listaProducto.push(new producto ("Cerveza RUBIA","Andes", 1000));
listaProducto.push(new producto ("Fernet 750ml","Branca", 3750));
listaProducto.push(new producto ("Fernet 750ml","1882", 2550));
listaProducto.push(new producto ("Vodka","Smirnof", 2850));
listaProducto.push(new producto ("Vodka","SKY", 3950));
listaProducto.push(new producto ("Whisky","Johnnie Walker, Red Label", 11500));
listaProducto.push(new producto ("Whisky","Johnnie Walker, Black Label", 19500));

localStorage.setItem('productos', JSON.stringify(productos));


const selecProducto = document.querySelector('#productos');
const botonAgregar = document.querySelector('#agregar');


function traerItemsStorage() {

  productos = JSON.parse(localStorage.getItem('productos')) || [];
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];
} 

function popularDropdown() {

  listaProducto.forEach(({nombre,marca,precio},index) => {

    const option = document.createElement('option');
    option.textContent = `${nombre} - ${marca} - $${precio}`;
    option.value = index;
    selecProducto.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  traerItemsStorage();
  popularDropdown();
  dibujarTabla();
  
 
 botonAgregar.addEventListener('submit', (e) =>{
    e.preventDefault();
    const productoSeleccionado = listaProducto.find((item,index) => index === +selecProducto.value)
         
    if(productoSeleccionado === undefined) {
      Swal.fire(
        'Debe seleccionar un producto',
        'Depliegle la lista de productos',
        'error'
      )
      return;
    }
   
    const indiceCarrito = carrito.findIndex((item) => item.nombre === productoSeleccionado);
    if(indiceCarrito !== -1){
    carrito[indiceCarrito].marca++;
    }else {    
     const items = new producto(productoSeleccionado,1);
     carrito.push(items);
    } 
    
    Toastify({
      text: 'Producto Agregado',
      duration: 3000,
      gravity: 'bottom',
      position: 'right'
      }).showToast();

    localStorage.setItem('carrito',JSON.stringify(carrito));
    dibujarTabla();
  
   })
   });

  
 function dibujarTabla() {
  const total = document.querySelector('#total');
  const bodyTabla = document.getElementById('items');
  bodyTabla.innerHTML = '';

  carrito.forEach((item,index) => {
    const tr = document.createElement('tr');
    tr.classList.add
    tr.innerHTML += `
      <tr>
        <th scope="row">${index + 1}</th>
        <th>${item.nombre.nombre}</th>
        <th>${item.nombre.marca}</th>
        <th>${item.nombre.precio}</th>
        <th>${item.marca}</th>
        <th>${item.marca*item.nombre.precio}</th>
        <th id="item-${index}">
         <button id="item-${index}" class="btn btn-danger">ELIMINAR</button>
        </th>
      </tr>
    `;

    bodyTabla.appendChild(tr);

        document.querySelector(`#item-${index}`).addEventListener('click', () => {
         carrito.splice(index,1);
         dibujarTabla();
         localStorage.setItem('carrito', JSON.stringify(carrito));
        });

  });

  total.textContent = carrito.reduce((acc,item) => acc + item.nombre.precio*item.marca , 0);
}

function datosBancarios () {
  Swal.fire({
    title: 'Ingrese su nombre de usuario',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
      })
    }
  })
}

const boton = document.querySelector('#botonComprar');
boton.addEventListener("click", datosBancarios);