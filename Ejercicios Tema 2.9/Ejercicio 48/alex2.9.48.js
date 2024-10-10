let setNumeros1 = new Set([1,2,3]);
let setNumeros2 = new Set([2,3,4]);
let combinacionRepetidos = new Set();
setNumeros1.forEach((a) => { //Primero recorremos uno de los dos set
    if(setNumeros1.has(a) && !setNumeros2.has(a)){ //Hacemos la comprobacion si el número está en un set pero no en el otro
        combinacionRepetidos.add(a);//Si esta en uno y no en el otro, lo añadimos en el set nuevo
    }
});
console.log(combinacionRepetidos);