//EJERCICIO 17
function cambiarTexto() {
  let ejercicio17 = document.getElementById("text1");
  ejercicio17.textContent = "Texto modificado mediante JavaScript!";
  console.log(ejercicio17.textContent);
}

//EJERCICIO 18
function cambiarEstilo() {
  let ejercicio18 = document.getElementById("text2");
  ejercicio18.style.color = "red";
  ejercicio18.style.fontSize = "20px";
  ejercicio18.style.fontWeight = "bold";
}

//EJERCICIO 19
function toggleVisibilidad() {
  let ejercicio19 = document.getElementById("text3");
  ejercicio19.classList.toggle("hidden");
}

//EJERCICIO 20
let contador = 0;
function agregarElemento() {
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = "Elemento " + ++contador;
  document.getElementById("lista").appendChild(nuevoElemento);
}

//EJERCICIO 21
let mouseArea = document.getElementById("mouseArea");
let coordenadas = document.getElementById("coordenadas");
mouseArea.addEventListener("mousemove", function (event) {
  let x = event.clientX - mouseArea.offsetLeft;
  let y = event.clientY - mouseArea.offsetTop;
  coordenadas.textContent = `X: ${x}, Y: ${y}`;
});
