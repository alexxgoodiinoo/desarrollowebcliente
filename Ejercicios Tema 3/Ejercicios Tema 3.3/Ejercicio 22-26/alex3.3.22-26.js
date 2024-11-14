//EJERCICIO 22
contador = 0;
seleccionados = [];
function agregarNodoArbol() {
  let nuevoElemento = document.createElement("button");
  nuevoElemento.textContent = "Elemento " + ++contador;
  document.getElementById("treeRoot").appendChild(nuevoElemento);
  nuevoElemento.onclick = () => marcarElemento(nuevoElemento);
}

function marcarElemento(elemento) {
  elemento.style.backgroundColor = "lightcoral";
  seleccionados.push(elemento);
}

function eliminarNodoSeleccionado() {
  seleccionados.forEach((elemento) => {
    elemento.remove();
  });
}

//EJERCICIO 23
let cuadro = document.getElementById("draggable");
let area = document.getElementById("dropzone");
let isDragging = false; // Indica si el elemento está siendo arrastrado

// Al presionar el botón del ratón
cuadro.addEventListener("mousedown", function (event) {
  isDragging = true;
});

// Al mover el ratón dentro del área de soltar
area.addEventListener("mousemove", function (event) {
  if (isDragging) {
    // Calcula la nueva posición del elemento
    let x = event.clientX - cuadro.offsetWidth / 2;
    let y = event.clientY - cuadro.offsetHeight / 2;
    // Actualiza la posición del elemento
    cuadro.style.left = `${x}px`;
    cuadro.style.top = `${y}px`;
  }
});

// Al soltar el botón del ratón
document.addEventListener("mouseup", function () {
  isDragging = false;
});

//EJERCICIO 24
let nombre = document.getElementById("nombre");
let nombreError = document.getElementById("nombreError");
let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
let telefono = document.getElementById("telefono");
let telefonoError = document.getElementById("telefonoError");
nombreError.textContent = "Error, el nombre debe de ser mayor de 3 caracteres";
emailError.textContent = "Error, el email debe de tener formato email";
telefonoError.textContent = "Error, el telefono debe de tener formato telefono";

//Añadimos un evento que escuche, con el metodo input, que nos permite hacer las comprobaciones
//en tiempo real
nombre.addEventListener("input", function () {
  if (nombre.value.length < 3) {
    nombreError.textContent =
      "Error, el nombre debe de ser mayor de 3 caracteres";
  } else {
    nombreError.textContent = "";
  }
});

email.addEventListener("input", function () {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    emailError.textContent = "Error, el email debe de tener formato email";
  } else {
    emailError.textContent = "";
  }
});

telefono.addEventListener("input", function () {
  if (telefono.value.length !== 9) {
    telefonoError.textContent =
      "Error, el telefono debe de tener formato telefono";
  } else {
    telefonoError.textContent = "";
  }
});

//EJERCICIO 26
const contenedorBotones = document.getElementById("buttonContainer");
let contadorBotones = 0;

// Función para agregar un nuevo botón dinámicamente
function agregarBotonDinamico() {
  const nuevoBoton = document.createElement("button");
  nuevoBoton.id = 'Boton ' + ++contadorBotones;
  nuevoBoton.textContent = nuevoBoton.id;
  contenedorBotones.appendChild(nuevoBoton);
};