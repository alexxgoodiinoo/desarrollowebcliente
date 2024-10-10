let setNumeros1 = new Set([1,5]);
let setNumeros2 = new Set([1,2,3,4]);
let esSubconjunto = [...setNumeros1].every(elemento => setNumeros2.has(elemento));  //Comrpobamos que para cada elemento que tiene el primer set lo incluya el set2, si incluye cada elemento, devuelve true, si no, devuelve false
if(esSubconjunto) alert("El primer conjunto es un subconjunto del segundo");
else alert("El primer conjunto no es un subconjunto del segundo");