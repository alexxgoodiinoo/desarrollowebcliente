let arrayColores = ['azul', 'rojo', 'verde', 'amarillo'];
let arrayColoresSeguir = [];
let arrayColoresUsuario = [];
let numeroRondas = 0;
let numeroAleatorio;
let finalizado = false;

let opcion = parseInt(prompt("Elige el modo de juego que quieras jugar:\n1. Juego ilimitado (juega hasta fallar)\n2. Juego limitado (elige el número de rondas que quieres jugar"));

switch(opcion){
    case 1:
        do{
            numeroAleatorio = Math.floor(Math.random() * arrayColores.length);
            arrayColoresSeguir.push(arrayColores[numeroAleatorio]);
            let mostrarColores = "";
            for (let i = 0; i < arrayColoresSeguir.length; i++) {
                mostrarColores += arrayColoresSeguir[i] + "\n";
            }
            alert("Recuerda esta secuencia de colores\n" + mostrarColores);
            let respuestaUsuario = prompt("Introduzca la secuencia separada por espacios");
            arrayColoresUsuario = respuestaUsuario.split(" ");
            for (let i = 0; i < arrayColoresSeguir.length; i++) {
                if (arrayColoresUsuario[i] !== arrayColoresSeguir[i]) {
                    alert("Lo siento, has fallado.");
                    finalizado = true;
                    break;
                }
            }
        }while(!finalizado);
        break;
    case 2:
        numeroRondas = parseInt(prompt("Elige el número de rondas que quieras jugar"));
        alert("Vas a jugar un total de " + numeroRondas + " rondas");
        do{
            numeroAleatorio = Math.floor(Math.random() * arrayColores.length);
            arrayColoresSeguir.push(arrayColores[numeroAleatorio]);
            let mostrarColores = "";
            for (let i = 0; i < arrayColoresSeguir.length; i++) {
                mostrarColores += arrayColoresSeguir[i] + "\n";
            }
            alert("Recuerda esta secuencia de colores\n" + mostrarColores);
            let respuestaUsuario = prompt("Introduzca la secuencia separada por espacios");
            arrayColoresUsuario = respuestaUsuario.split(" ");
            for (let i = 0; i < arrayColoresSeguir.length; i++) {
                if (arrayColoresUsuario[i] !== arrayColoresSeguir[i]) {
                    alert("Lo siento, has fallado.");
                    numeroRondas = -1;
                    break;
                }
                
            }
            if(numeroRondas > 0){
                numeroRondas--;
                alert("Has acertado, sigue asi. Te quedan " + numeroRondas + " rondas");
            }
            if(numeroRondas == 0) alert("Enhorabuena, has ganado");
        }while(numeroRondas>0);
        break;
}