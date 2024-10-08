let palabras = ["adcarry", "midlaner", "jungla", "toplaner", "support"];
let acertado = false;
let intentos = 6;
let palabraAdivinar = palabras[Math.floor(Math.random()*palabras.length)];
let letra = "";
let palabraAdivinarCensurada = "*".repeat(palabraAdivinar.length);
let arrayPalabraCensurada = [...palabraAdivinarCensurada];
let index = 0;

do{
    letra = prompt("La palabra es " + palabraAdivinarCensurada + ". Te quedan " + intentos + " intentos. Ingrese una letra o intente adivinar la palabra");
    letra = letra.toLowerCase(); //Pasamos la letra o la palabra a minuscula por si nos inserta una letra en mayuscula poder seguir haciendo la comprobacion.
    if(letra.length>1){ //Averiguamos si nos esta introduciendo una letra o una palabra
        if(letra === palabraAdivinar){ //Al tener más de 1 de longitud, es una palabra, por lo que la comparamos directamente con la palabra.
            acertado = true;
            alert("¡Felicidades! Has adivinado la palabra: " + palabraAdivinar);
        }else {
            intentos=0;
            alert("Ups, esa no era la palabra, la palabra era: " + palabraAdivinar);
        }
    }
    if(palabraAdivinar.includes(letra)){ //Comprobamos si la palabra incluye la letra.
        for (let i = 0; i < palabraAdivinar.length; i++) {
            if(palabraAdivinar[i]===letra) arrayPalabraCensurada[i] = letra; //Si la incluye, sustituimos en el array el * correspondiente por la letra.
        }
        palabraAdivinarCensurada = arrayPalabraCensurada.join(""); //Realizamos esto para actualizar la palabra censurada, para cuando se muestre no solo sean *, si no que si ha acertado alguna letra, tambien aparezca esa letra.
    }else {
        intentos--;
    }
    if (palabraAdivinarCensurada === palabraAdivinar) { //Si la palabra que estaba censurada la hemos desvelado por completo, significa que ya hemos acertado la palabra.
        acertado = true;
        alert("¡Felicidades! Has adivinado la palabra: " + palabraAdivinar);
    }
}while(!acertado && intentos>0); 