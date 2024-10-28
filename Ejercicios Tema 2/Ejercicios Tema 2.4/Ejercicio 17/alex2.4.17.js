function facturacion(precioProducto, medioPago){
    let total = 0;
    let descuento = 0;
    medioPago = medioPago.toUpperCase();
    if(precioProducto<200) return precioProducto;
    if(precioProducto>200 && precioProducto<400 && medioPago=='E')descuento = (precioProducto*30)/100;
    else if(precioProducto>200 && precioProducto<400 && medioPago=='D')descuento = (precioProducto*20)/100;
    else if(precioProducto>200 && precioProducto<400 && medioPago=='C') descuento = (precioProducto*10)/100;
    else if(precioProducto>400) descuento = (precioProducto*40)/100;
    else alert("Introduzca un método de pago correcto");
    total = precioProducto - descuento;
    return total;
}

let total = facturacion(500, 'd');
if(total!=0) alert(total);