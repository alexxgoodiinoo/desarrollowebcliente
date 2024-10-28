fetch('alex3.1.4.json')
    .then(response => response.json())
    .then(data => {
        let productos = data;
        productos.forEach(producto => {
            if(producto.precio > 100){
                console.log(producto);
            }
        });
    })
    .catch(error => {
        console.error(error);
    })