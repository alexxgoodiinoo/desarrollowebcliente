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

// Función para mostrar el tablero
function mostrarTablero() {
  console.table(tablero);
}

// Función para obtener la dirección del jugador
function obtenerDireccion() {
  return prompt("En que dirección te quieres mover (ARRIBA, DERECHA, ABAJO, IZQUIERDA):").toUpperCase();
}

// Función para calcular las nuevas coordenadas de la víbora
function calcularNuevaPosicion(vibora, direccion) {
  let nuevaX = vibora.x;
  let nuevaY = vibora.y;

  if (direccion === 'ARRIBA') nuevaY--;
  if (direccion === 'ABAJO') nuevaY++;
  if (direccion === 'DERECHA') nuevaX++;
  if (direccion === 'IZQUIERDA') nuevaX--;

  // Aseguramos que las coordenadas se mantengan dentro del tablero
  nuevaX = (nuevaX + tablero[0].length) % tablero[0].length;
  nuevaY = (nuevaY + tablero.length) % tablero.length;

  return { nuevaX, nuevaY };
}

// Función para verificar si hay un ladrillo en la nueva posición
function esLadrillo(x, y) {
  return tablero[y][x] === '🧱';
}

// Función para verificar si hay una manzana en la nueva posición
function esManzana(x, y) {
  return tablero[y][x] === '🍎';
}

// Función para mover la víbora en el tablero
function moverVibora(vibora, nuevaX, nuevaY) {
  tablero[vibora.y][vibora.x] = '🌱'; // Borrar la víbora de la posición anterior
  vibora.x = nuevaX;
  vibora.y = nuevaY;
  tablero[vibora.y][vibora.x] = '🐍'; // Colocar la víbora en la nueva posición
}

// Función para verificar si el juego ha terminado
function verificarFinJuego() {
  if (manzanasRestantes === 0) {
      console.log("¡Felicidades, te comiste todas las manzanas! 🎉");
      return true;
  }
  return false;
}

// Bucle principal del juego
while (!finJuego) {
  mostrarTablero();
  
  let direccion = obtenerDireccion();
  let { nuevaX, nuevaY } = calcularNuevaPosicion(vibora, direccion);

  if (esLadrillo(nuevaX, nuevaY)) {
      console.log("No puedes pasar, hay un ladrillo");
      continue;
  }

  if (esManzana(nuevaX, nuevaY)) {
      console.log("Te has comido una manzana");
      manzanasRestantes--;
  }

  moverVibora(vibora, nuevaX, nuevaY);

  finJuego = verificarFinJuego();
}