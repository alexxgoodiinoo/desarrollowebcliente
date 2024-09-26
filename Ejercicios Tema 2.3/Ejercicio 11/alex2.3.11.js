let numeroSecreto = 2;
let numeroIntroducido = parseFloat(prompt("Intente adivinar el número entero secreto"));
if(numeroIntroducido===numeroSecreto) alert("Enhorabuena, has acertado el número");
else {
    alert("Has fallado, intentelo de nuevo");
    if(numeroIntroducido>numeroSecreto) alert("El número a adivinar es más bajo");
    else alert("El número a adivinar es más alto");
}

