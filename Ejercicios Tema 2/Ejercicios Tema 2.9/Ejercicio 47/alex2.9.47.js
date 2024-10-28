let setNumeros1 = new Set([1,2,3]);
let setNumeros2 = new Set([2,3,4]);
let combinacionRepetidos = new Set();
setNumeros1.forEach((a) => { //Primero recorremos uno de los dos set
    if(setNumeros2.has(a) && setNumeros1.has(a)){ //Hacemos la comprobacion si el número está en ambos sets
        combinacionRepetidos.add(a);//Si esta en los dos sets, lo añadimos en el set nuevo
    }
});
console.log(combinacionRepetidos);