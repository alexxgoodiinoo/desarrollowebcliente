const tablero = [
    ['🌱', '🌱', '🍎', '🌱', '🌱'],
    ['🍎', '🧱', '🌱', '🧱', '🍎'],
    ['🌱', '🧱', '🐍', '🌱', '🌱'],
    ['🌱', '🍎', '🌱', '🧱', '🌱'],
    ['🍎', '🌱', '🌱', '🍎', '🧱'],
    ['🌱', '🌱', '🌱', '🌱', '🍎'],
];

let vibora = { x: 2, y: 2 };
let manzanasRestantes = 7;
let finJuego = false;

while (!finJuego) {
    console.table(tablero);

    let direccion = prompt("Ingrese una dirección (ARRIBA, DERECHA, ABAJO, IZQUIERDA):").toUpperCase();

    let nuevaX = vibora.x;
    let nuevaY = vibora.y;

    if (direccion === 'ARRIBA') nuevaY--;
    if (direccion === 'ABAJO') nuevaY++;
    if (direccion === 'DERECHA') nuevaX++;
    if (direccion === 'IZQUIERDA') nuevaX--;

    nuevaX = (nuevaX + tablero[0].length) % tablero[0].length;
    nuevaY = (nuevaY + tablero.length) % tablero.length;

    if (tablero[nuevaY][nuevaX] === '🧱') {
        console.log("¡Hay un ladrillo, no puedes avanzar!");
        continue; 
    }

    if (tablero[nuevaY][nuevaX] === '🍎') {
        console.log("¡Te comiste una manzana!");
        manzanasRestantes--;
    }

    tablero[vibora.y][vibora.x] = '🌱';

    vibora.x = nuevaX;
    vibora.y = nuevaY;

    tablero[vibora.y][vibora.x] = '🐍';

    if (manzanasRestantes === 0) {
        console.log("¡Felicidades, te comiste todas las manzanas! 🎉");
        finJuego = true;
    }
}
