let arrayDeObjetos = [
    { id: 1, nombre: 'Alex' },
    { id: 2, nombre: 'Gabi' },
    { id: 3, nombre: 'Adrian' },
    { id: 1, nombre: 'Jesus' }, 
    { id: 2, nombre: 'Alejandro' }
];

// Función para eliminar duplicados usando Map
function eliminarDuplicados(array) {
    let map = new Map();

    array.forEach(objeto => {  // Agregar cada objeto al Map, el id será la clave
        map.set(objeto.id, objeto);
    });

    return [...map.values()];// Convertir el Map de nuevo a un array de objetos únicos
}

let arraySinDuplicados = eliminarDuplicados(arrayDeObjetos);
console.log(arraySinDuplicados);
