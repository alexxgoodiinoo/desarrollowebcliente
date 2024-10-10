let mapCoche = new Map();

mapCoche.set("marca", "audi");
mapCoche.set("modelo", "r8");
mapCoche.set("año", 2008);

if(mapCoche.has("modelo")) console.log("Si esta en el map");
else console.log("No esta en el map");