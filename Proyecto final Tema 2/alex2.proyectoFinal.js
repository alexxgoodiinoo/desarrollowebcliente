class Producto {
  static id = 0;
  id;
  nombre;
  precio;
  stock;

  //Funcion para obtener el id
  getId() {
    return this.id;
  }

  //Funcion para obtener el stock
  getStock() {
    return this.stock;
  }

  constructor(nombre, precio, stock = 0) {
    this.id = ++Producto.id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  mostrarInfo() {
    return (
      this.nombre +
      " (" +
      this.id +
      "). " +
      this.precio +
      "€ - " +
      this.stock +
      " unidades en stock"
    );
  }
}

class Venta{
    nombreCliente;
    idProducto;
    cantidadComprada;
    totalCompra;

    constructor(nombreCliente, idProducto, cantidadComprada, totalCompra) {
        this.nombreCliente = nombreCliente;
        this.idProducto = idProducto;
        this.cantidadComprada = cantidadComprada;
        this.totalCompra = totalCompra;
    }
}

class Tienda {
  productos;
  clientes;
  ventas;

  constructor() {
    this.productos = new Map();
    this.clientes = new Set();
    this.ventas = [];
  }
  //Funcion para agragar producto
  agregarProducto(producto) {
    this.productos.set(producto.getId(), producto); //Añadimos el producto con el id como key y el propio producto como value
  }
  //Actualizar el stock
  actualizarStock(idProducto, cantidad) {
    let producto = this.productos.get(idProducto); //Cogemos el producto con el id en especifico
    //Verifica si el producto que hemos cogido existe o no, si existe actualiza el stock, si no te muestra un mensaje
    if(producto) producto.stock = cantidad; 
    else console.log("Producto no encontrado");
  }

  //Mostrar el inventario
  mostrarInventario() {
    this.productos.forEach((producto) => {
      console.log(producto.mostrarInfo());
    });
  }

  //Registramos un cliente
  registrarCliente(nombreCliente) {
    //Si el set de clientes ya tiene ese nombreCliente, significa que ya está dentro ese cliente, por tanto, no lo añadiremos, sin embargo, si no lo encuentra es por que no esta, en este caso si lo añadiremos.
    if (!this.clientes.has(nombreCliente)) {
      this.clientes.add(nombreCliente);
    }
  }

  //Realizar una venta
  realizarVenta(nombreCliente, idProducto, cantidad) {
    this.registrarCliente(nombreCliente); //Comprobamos que el cliente existe, si no lo añadimos
    let producto = this.productos.get(idProducto); //Obtenemos el producto con el id en especifico

    //Si existe el producto y su stock es mayor a la cantidad a comprar, se realizan las siguientes operaciones.
    if (producto && producto.getStock() >= cantidad) { 
      producto.stock -= cantidad; //Se disminuye el stock
      let totalCompra = producto.precio * cantidad; //Obtener el precio desde el producto
      let venta = new Venta(nombreCliente, idProducto, cantidad, totalCompra); //Creamos una nueva venta 
      this.ventas.push(venta); //Añadimos esa nueva venta creada al array de ventas
      console.log("Venta realizada: "+ cantidad + " unidades de " + producto.nombre + " a " + nombreCliente);
    } else {
      console.log("Venta no realizada: stock insuficiente o producto no encontrado.");
    }
  }

  //Mostrar las ventas
  mostrarVentas() {
    this.ventas.forEach((venta) => {
      console.log("El producto " + venta.idProducto + " ha sido vendido a " + venta.nombreCliente + " con una cantidad de " + venta.cantidadComprada + " unidades. Total: " + venta.totalCompra + "€");
    });
  }

  productosSinStock() {
    return [...this.productos.values()].filter(producto => producto.getStock() === 0);
  }

  ventasPorCliente(nombreCliente) {
    let ventasCliente = this.ventas.filter(venta => venta.nombreCliente === nombreCliente);
    if (ventasCliente.length > 0) {
      ventasCliente.forEach(venta => {
        console.log("Cliente: " + venta.nombreCliente + "\nProducto ID: " + venta.idProducto + "\nCantidad: " + venta.cantidadComprada + "\nTotal: " + venta.totalCompra + "€");
      });
    } else {
      console.log("No se encontraron ventas para el cliente: " + nombreCliente);
    }
  }

  calcularTotalIngresos() {
    let totalIngresos = this.ventas.reduce((total, venta) => total + venta.totalCompra, 0);
    console.log("El total de ingresos es: " + totalIngresos + "€");
    return totalIngresos;
  }

}

let tienda = new Tienda();

let producto1 = new Producto("Manzana", 1.2, 0);
let producto2 = new Producto("Pera", 1.5, 0);
let producto3 = new Producto("Plátano", 0.9, 30);

tienda.agregarProducto(producto1);
tienda.agregarProducto(producto2);
tienda.agregarProducto(producto3);

console.log("Inventario inicial:");
tienda.mostrarInventario();

console.log("\nActualizando stock del producto con ID 1");
tienda.actualizarStock(1, 25);

console.log("\nInventario después de actualizar el stock:");
tienda.mostrarInventario();

console.log("\nRealizando una venta:");
tienda.realizarVenta("Juan", 1, 5); 

console.log("\nInventario después de la venta:");
tienda.mostrarInventario();

console.log("\nVentas realizadas:");
tienda.mostrarVentas();

console.log("\nIntentando realizar una venta con stock insuficiente:");
tienda.realizarVenta("María", 2, 50);

console.log("\nRealizando otra venta:");
tienda.realizarVenta("Luis", 3, 10); 

console.log("\nVentas acumuladas:");
tienda.mostrarVentas();

console.log("\nProductos sin stock:");
let productosSinStock = tienda.productosSinStock();
productosSinStock.forEach(producto => console.log(producto.mostrarInfo()));

console.log("\nVentas de Juan:");
tienda.ventasPorCliente("Juan");

console.log("\nTotal de ingresos:");
tienda.calcularTotalIngresos();