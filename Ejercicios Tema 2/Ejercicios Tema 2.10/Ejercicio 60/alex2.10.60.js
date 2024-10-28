let array = [
    {id:1, nombre:"Alex"},
    {id:2, nombre:"Adrian"},
    {id:3, nombre:"Gabi"}
];

let map = new Map(array.map(elemento => [elemento.id, elemento.nombre]));

console.log(map);