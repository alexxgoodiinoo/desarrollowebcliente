let coche = {
    marca: "Audi",
    modelo: "R8",
    año: 2008
}

for (let datos in coche) {
    console.log(coche[datos]);
}

coche.año = 2012;
coche.color = "blanco";

for (let datos in coche) {
    console.log(coche[datos]);
}