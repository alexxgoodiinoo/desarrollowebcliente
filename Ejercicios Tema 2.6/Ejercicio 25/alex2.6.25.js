let vidaJugador = 45, vidaMonstruo = 35, cantidadPociones = 2, ataqueMaxJugador = 12, ataqueMaxMonstruo = 15, curaMaxPosicion = 10;

let opcion, numeroRandomAtaque, numeroRandomPocion, numeroRandomBuscarPocion;

do{
    opcion = parseInt(prompt("1. Atacar\n2. Tomar pocion\n3. Buscar pocion\n4. Salir"));
    switch(opcion){
        case 1: 
            numeroRandomAtaque = Math.floor(Math.random() * ataqueMaxJugador) + 1;
            vidaMonstruo -= numeroRandomAtaque;
            alert("Se ha atacado al enemigo con un ataque de " + numeroRandomAtaque + " de daño. Al enemigo le quedan " + vidaMonstruo + " puntos de vida.");
            if(vidaMonstruo<=0) break;
            alert("A continuación, el enemigo te atacará.");
            numeroRandomAtaque = Math.floor(Math.random() * ataqueMaxMonstruo) + 1;
            vidaJugador -= numeroRandomAtaque;
            alert("El enemigo te ha atacado, haciendote una cantidad total de " + numeroRandomAtaque + " puntos de daño. Te quedan " + vidaJugador + " puntos de vida");
            break;
        case 2: 
            if(cantidadPociones>0){
                numeroRandomPocion = Math.floor(Math.random() * curaMaxPosicion) + 1;
                cantidadPociones -= 1;
                vidaJugador += numeroRandomPocion;
                alert("Has regenerado " + numeroRandomPocion + " puntos de vida. Te quedan " + cantidadPociones + " pociones");
            }
            else alert("No te quedan más pociones, has perdido el turno");
            numeroRandomAtaque = Math.floor(Math.random() * ataqueMaxMonstruo) + 1;
            vidaJugador -= numeroRandomAtaque;
            alert("El enemigo te ha atacado, haciendote una cantidad total de " + numeroRandomAtaque + " puntos de daño. Te quedan " + vidaJugador + " puntos de vida");
            break;
        case 3: 
            numeroRandomBuscarPocion = Math.floor(Math.random() * 4) + 1;
            if(numeroRandomBuscarPocion==1) {
                cantidadPociones+=1;
                alert("Enhorabuena, has obtenido una poción");
            }
            else alert("No has encontrado ninguna poción");
            numeroRandomAtaque = Math.floor(Math.random() * ataqueMaxMonstruo) + 1;
            vidaJugador -= numeroRandomAtaque;
            alert("El enemigo te ha atacado, haciendote una cantidad total de " + numeroRandomAtaque + " puntos de daño. Te quedan " + vidaJugador + " puntos de vida");
    }
}while(opcion!=4 && vidaJugador>0 && vidaMonstruo>0);
if(vidaJugador<=0) alert("Vaya, parecer que no tienes suficiente nivel");
if(vidaMonstruo<=0) alert("Enhorabuena, has conseguido derrotar al monstruo");
else alert("Empate técnico");