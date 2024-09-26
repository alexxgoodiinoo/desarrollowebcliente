let contraseniaAdivinar = "holawenas";
let contraseniaIntroducida = prompt("Intenta adivinar la contraseña oculta");
let numeroIntentos = 3;
do{
    if(contraseniaAdivinar!=contraseniaIntroducida){
        alert("Has fallado, te quedan " + numeroIntentos + " intentos.")
        contraseniaIntroducida = prompt("Intentelo de nuevo");
        numeroIntentos--;
    }
}while(contraseniaAdivinar!=contraseniaIntroducida && numeroIntentos>0);
if(numeroIntentos==0) alert("Te has quedado sin intentos, no has acertado la contraseña oculta");
if(contraseniaAdivinar==contraseniaIntroducida) alert("Enhorabuena, has acertado la contraseña oculta");