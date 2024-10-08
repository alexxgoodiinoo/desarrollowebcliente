let arrayColores = ["azul", "rojo", "verde", "amarillo"];
let arrayColoresSeguir = [];
let arrayColoresUsuario = [];
let historialPartidas = [];
let numeroRondas = 0;
let numeroAleatorio;
let finalizado = false;
let modoJuego = "SUPERVIVENCIA";
let partidasJugadas = 0;

// Función principal que muestra el menú de opciones
function mostrarMenu() {
  let opcion;
  do {
    opcion = parseInt(
      prompt(`
- 1. INICIAR JUEGO
- 2. CAMBIAR MODO
- 3. CAMBIAR COLORES
- 4. VER HISTORIAL DE PARTIDAS
- 5. SALIR
        `)
    );

    switch (opcion) {
      case 1:
        iniciarJuego();
        break;
      case 2:
        cambiarModo();
        break;
      case 3:
        cambiarColores();
        break;
      case 4:
        verHistorial();
        break;
      case 5:
        alert("Saliendo del programa.");
        break;
      default:
        alert("Opción inválida. Intente de nuevo.");
    }
  } while (opcion !== 5);
}

// Función para iniciar el juego según el modo seleccionado
function iniciarJuego() {
  if (modoJuego === "SUPERVIVENCIA") {
    jugarSupervivencia();
  } else {
    jugarClasico();
  }
}

// Función para cambiar el modo de juego
function cambiarModo() {
  let opcion = parseInt(
    prompt(
      "Elige el modo de juego:\n1. SUPERVIVENCIA (juega hasta fallar)\n2. CLÁSICO (elige el número de rondas)"
    )
  );
  modoJuego = opcion === 1 ? "SUPERVIVENCIA" : "CLÁSICO";
  alert(`Modo de juego cambiado a: ${modoJuego}`);
}

// Función para cambiar los colores y la cantidad de colores
function cambiarColores() {
  let cantidadColores = parseInt(
    prompt("Elige la cantidad de colores (mínimo 4):")
  );
  if (cantidadColores < 4) {
    alert("Debe haber al menos 4 colores.");
    return;
  }

  arrayColores = [];
  for (let i = 0; i < cantidadColores; i++) {
    let color = prompt(`Introduce el color número ${i + 1}:`);
    arrayColores.push(color);
  }

  alert("Los colores han sido cambiados a: " + arrayColores.join(", "));
}

// Función para mostrar el historial de partidas
function verHistorial() {
  if (historialPartidas.length === 0) {
    alert("Aún no hay partidas jugadas.");
    return;
  }

  let historial = "Historial de partidas:\n";
  historialPartidas.forEach((partida, index) => {
    historial += `[${index + 1}] ${partida}\n`;
  });

  alert(historial);
}

// Función para el modo de juego "SUPERVIVENCIA"
function jugarSupervivencia() {
  finalizado = false;
  arrayColoresSeguir = [];
  let rondasGanadas = 0;

  do {
    numeroAleatorio = Math.floor(Math.random() * arrayColores.length);
    arrayColoresSeguir.push(arrayColores[numeroAleatorio]);
    mostrarSecuencia();
    let respuestaUsuario = obtenerRespuestaUsuario();

    if (!verificarSecuencia(respuestaUsuario)) {
      alert("Has fallado.");
      finalizado = true;
    } else {
      rondasGanadas++;
    }
  } while (!finalizado);

  partidasJugadas++;
  historialPartidas.push(
    `${modoJuego}: ${arrayColores.length} colores. ${rondasGanadas} rondas ganadas.`
  );
  alert(`Partida finalizada. Has ganado ${rondasGanadas} rondas.`);
}

// Función para el modo de juego "CLÁSICO"
function jugarClasico() {
  finalizado = false;
  arrayColoresSeguir = [];
  numeroRondas = parseInt(
    prompt("Elige el número de rondas que quieras jugar")
  );
  let rondasGanadas = 0;

  alert("Vas a jugar un total de " + numeroRondas + " rondas");

  while (numeroRondas > 0 && !finalizado) {
    numeroAleatorio = Math.floor(Math.random() * arrayColores.length);
    arrayColoresSeguir.push(arrayColores[numeroAleatorio]);
    mostrarSecuencia();
    let respuestaUsuario = obtenerRespuestaUsuario();

    if (!verificarSecuencia(respuestaUsuario)) {
      alert("Has fallado.");
      numeroRondas = -1;
    } else {
      rondasGanadas++;
      numeroRondas--;
      if (numeroRondas > 0) {
        alert("Te quedan " + numeroRondas + " rondas.");
      }
    }
  }

  if (numeroRondas === 0) {
    alert("¡Enhorabuena, has ganado!");
  }

  partidasJugadas++;
  historialPartidas.push(
    `${modoJuego}: ${numeroRondas} rondas. ${arrayColores.length} colores. ${
      numeroRondas === 0
        ? "Partida ganada."
        : `Derrota en ronda ${rondasGanadas}.`
    }`
  );
}

// Función para mostrar la secuencia de colores
function mostrarSecuencia() {
  let mostrarColores = arrayColoresSeguir.join("\n");
  alert("Recuerda esta secuencia de colores\n" + mostrarColores);
}

// Función para obtener la respuesta del usuario
function obtenerRespuestaUsuario() {
  let respuestaUsuario = prompt("Introduce la secuencia separada por espacios");
  return respuestaUsuario.split(" ");
}

// Función para verificar si la secuencia introducida es correcta
function verificarSecuencia(respuestaUsuario) {
  for (let i = 0; i < arrayColoresSeguir.length; i++) {
    if (respuestaUsuario[i] !== arrayColoresSeguir[i]) {
      return false;
    }
  }
  return true;
}

// Iniciar el programa mostrando el menú principal
mostrarMenu();
