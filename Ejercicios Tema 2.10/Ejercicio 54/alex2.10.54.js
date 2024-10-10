let mapPersonas = new Map();

mapPersonas.set("nombre", "Alex");
mapPersonas.set("edad", 20);
mapPersonas.set("ciudad", "Torredonjimeno");

mapPersonas.delete("edad");

console.log(mapPersonas);