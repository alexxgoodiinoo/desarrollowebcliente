let toDoList = [
  "Hacer ejercicio",
  "Hacer ejercicios de javascript",
  "Jugar al lol",
  "Jugar al valorant",
  "Ver anime",
];
console.log("El índice de la tarea es el:");
let tareaABuscar = "Jugar al valorant";
console.log(toDoList.indexOf(tareaABuscar));
let numero = parseInt(toDoList.indexOf(tareaABuscar));
toDoList.splice(numero, 1);
console.log(toDoList);