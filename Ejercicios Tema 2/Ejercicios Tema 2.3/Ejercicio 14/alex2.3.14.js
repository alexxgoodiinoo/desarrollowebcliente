let numero = parseInt(prompt("Introduzca un número para mostrar su tabla de multiplicar"));
for(let i=1; i<=10; i++){
    document.write(numero + " * " + i + " = " + (numero*i) + "<br>");
}