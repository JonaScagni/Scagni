class item {
    nombre;
    precio;
    cantidad;
    subtotal;
    id;
    imagen;

    constructor(nombre,precio,cantidad,id,imagen){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.subtotal = this.precio*this.cantidad;
    this.id = id;
    this.imagen = imagen;
    }
}