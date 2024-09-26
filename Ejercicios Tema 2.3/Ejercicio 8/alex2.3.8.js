let nombre = prompt("Introduzca su nombre");
if (nombre==''){
    nombre = prompt("No ha introducido ningún nombre, intentelo de nuevo");
}
alert("Bienvenido " + nombre);