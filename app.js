
 let carrito = [];
 let listaProducto = [];

const selecProducto = document.querySelector('#productos');
const botonAgregar = document.querySelector('#agregar');


function traerItemsStorage() {
  productos = JSON.parse(localStorage.getItem('productos')) || [];
  carritoCompras = JSON.parse(localStorage.getItem('carrito')) || [];
}

document.addEventListener('DOMContentLoaded', () => {
  traerProductos();
  cargarEventListeners();
  dibujarProductos();
  traerItemsStorage();
  dibujarTabla();
  
});

 function dibujarTabla() {
  console.log("function dibujarTabla()");
  const total = document.querySelector('#total');
  const bodyTabla = document.getElementById('items');
  bodyTabla.innerHTML = '';

  carritoCompras.forEach((item,index) => {
    
    if(item.nombre != undefined)
    {
      console.log("Ingresó al IFFFFFF");
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
       </tr>`;
       bodyTabla.appendChild(tr);
       document.querySelector(`#item-${index}`).addEventListener('click', () => {
        carritoCompras.splice(index,1);
        dibujarTabla();
        agregarItem();
        localStorage.setItem('carrito', JSON.stringify(carritoCompras));
       });
      }
      total.textContent = carritoCompras.reduce(function (acc, item, indice, vector) {
        if(item.nombre != undefined)        
          acc = acc + item.nombre.precio*item.marca;
        
        return acc;
        }, 0);
  });
}

function datosBancarios () {
  Swal.fire({
    title: 'Efectuar Pago',
    inputLabel: 'Ingrese los 16 numeros de su tarjeta',
    input: 'number',
    confirmButtonText: 'Pagar',
    confirmButtonColor: '#52a102',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#FF0000'
}).then((result) => {
    if (result.isConfirmed) {

        Swal.fire({
            title: 'Registro de Usuario',
            inputLabel: 'Ingrese el codigo de seguridad de su tarjeta',
            input: 'number',
            inputPlaceholder: '123',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#FF0000'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `Pago Realizado`,
                    icon: 'success',
                    text: `Gracias Por Su Compra`
                });
            }
        })
    }
})
}

const boton = document.querySelector('#botonComprar');
boton.addEventListener("click", datosBancarios);
const btnLogin = document.querySelector('#login');
const usuario = {
    mailUsuario: '',
    password: ''
}

btnLogin.addEventListener('click', () => {
  Swal.fire({
      title: 'Registro de Usuario',
      inputLabel: 'Ingrese mail',
      input: 'email',
      confirmButtonText: 'Enviar',
      confirmButtonColor: '#52a102',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#FF0000'
  }).then((result) => {
      if (result.isConfirmed) {
          usuario.mailUsuario = result.value;
          Swal.fire({
              title: 'Registro de Usuario',
              inputLabel: 'Ingrese su password',
              input: 'password',
              inputPlaceholder: '1234',
              showCancelButton: true,
              cancelButtonText: 'Cancelar',
              cancelButtonColor: '#FF0000'
          }).then((result) => {
              if (result.isConfirmed) {
                  usuario.password = result.value;
                  Swal.fire({
                      title: `Bienvenido ${usuario.mailUsuario}!`,
                      icon: 'success',
                      text: `Disfrute de nuestra variedad de bebidas`
                  });
              }
          })
      }
  })
});

const listaItems = document.querySelector('#lista-items');
let carritoCompras = [];
let productosBebidas = [];

function cargarEventListeners() {
  
  listaItems.addEventListener('click', agregarProducto);  
  document.addEventListener('DOMContentLoaded', async () => {
      
      traerProductos();
      dibujarProductos();
      carritoCompras = JSON.parse(localStorage.getItem('carrito')) || [];
  });
}

async function traerProductos() {
  fetch ('./productos.json')
  .then((response) => {
   if (response.ok) {
     return response.json();
   }
  })
  .then((listaProducto) => {
   productosBebidas = listaProducto;
   console.log(productosBebidas)

  dibujarProductos();
  agregarProducto();
  traerItemsStorage();
  })

 const response = await fetch('productos.json');
 if (response.ok) {
   productosBebidas = await response.json();
   console.log(productosBebidas);
 } else {
      Toastify({
          text: 'Hubo un problema en el servidor, intente nuevamente',
          className: "Error"
      }).showToast();
 }
}

function dibujarProductos() {
  let row = document.createElement('div');
  row.classList.add('row');
  row.innerHTML = ``;
  let counter = 1;

 productosBebidas.forEach ((item) => {
      row.innerHTML += `
          <div class="col-sm-3 mb-3">
              <div class="card"  style="width: 18rem; gap: 15px;">
                  <img src="${item.imagen}" class="card-img-top">
                  <div class="card-body">
                      <h4 class="card-title">${item.nombre}</h4>
                      <p class="card-title">${item.marca}</p>
                      <p class="precio">$${item.precio}</p>
                      <a href="#" class="btn btn-primary button input agregar-carrito"  data-id="${item.id}">Agregar Al Carrito</a>

                  </div>
              </div> <!--.card-->
          </div>
      `;

  });
 listaItems.appendChild(row);

}

function agregarProducto(e) {
  console.log("agregarProducto(e)");
  e.preventDefault();
  const id = e.target.dataset.id;
  console.log(id);

  const productoSeleccionado = productosBebidas.find((item) => item.id === +id);
  console.log(productoSeleccionado);

  const indiceCarrito = carritoCompras.findIndex((item) => item.nombre === productoSeleccionado);
  if(indiceCarrito !== -1){
  carritoCompras[indiceCarrito].marca++;
  }else {
   const items = new producto(productoSeleccionado,1);
   carritoCompras.push(items);
  }
  Toastify({
    text: 'Producto Agregado',
    duration: 3000,
    gravity: 'bottom',
    position: 'right'
    }).showToast();
  localStorage.setItem('carrito',JSON.stringify(carritoCompras));
  dibujarTabla();
}
