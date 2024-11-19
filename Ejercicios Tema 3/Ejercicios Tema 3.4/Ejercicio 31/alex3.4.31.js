const cache = new WeakMap();

function agregarACache(objeto, valor) {
    cache.set(objeto, valor);
}

function obtenerDeCache(objeto) {
    return cache.get(objeto);
}

let objeto1 = { nombre: "Objeto 1" };
let objeto2 = { nombre: "Objeto 2" };

//agregar objetos a la caché
agregarACache(objeto1, "Datos de Objeto 1");
agregarACache(objeto2, "Datos de Objeto 2");

//obtener datos de la caché
console.log(obtenerDeCache(objeto1));
console.log(obtenerDeCache(objeto2));

//eliminar referencias a los objetos
objeto1 = null;
objeto2 = null;