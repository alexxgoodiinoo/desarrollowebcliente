let map1 = new Map();
let map2 = new Map();

map1.set("nombre", "Alex");
map1.set("edad", 20);
map2.set("ciudad", "Torredonjimeno");
map2.set("pais", "España");

let combinacion = new Map([...map1,...map2]);

console.log(combinacion);