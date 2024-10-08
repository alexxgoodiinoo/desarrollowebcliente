const producto = {
    nombre: "Portatil HP",
    precio: 950,
    cantidad: 1
}

let producto2 = Object.assign({},producto);
producto2.cantidad = 3;

for (let datos in producto) {
    console.log(producto[datos]);
}

for (let datos in producto2) {
    console.log(producto2[datos]);
}