let setNumeros1 = new Set([1,2,3]);
let setNumeros2 = new Set([3,4,5]);
let combinacion = new Set([...setNumeros1,...setNumeros2]);
console.log(combinacion);