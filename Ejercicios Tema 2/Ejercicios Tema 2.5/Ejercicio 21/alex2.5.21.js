const tablero = [
    ['💣','📦','📦'],
    ['💣','📦','📦'],
    ['💣','📦','📦']
]
const tableroMostrar = [
    ['📦','📦','📦'],
    ['📦','📦','📦'],
    ['📦','📦','📦']
]
let finalizado = false;
let cantidadCajas = 6;
do{
    console.table(tableroMostrar);
    let coords1 = "";
    let coords2 = "";
    let coordenadas = prompt("Introduzca las coordenadas separadas por una ,");
    let arrayCoordenadas = coordenadas.split(',');
    coords1 = arrayCoordenadas[0];
    coords2 = arrayCoordenadas[1];
    if(tablero[coords1][coords2] == '💣') {
        tablero[coords1][coords2]='💥';
        console.log("Has perdido");
        finalizado = true;
    }
    if(tablero[coords1][coords2] == '📦'){
        tableroMostrar[coords1][coords2]='💨';
        tablero[coords1][coords2]='💨';
        cantidadCajas--
    }
}while(!finalizado && cantidadCajas > 0);
if(cantidadCajas==0) console.log("Has ganado");
console.table(tablero);