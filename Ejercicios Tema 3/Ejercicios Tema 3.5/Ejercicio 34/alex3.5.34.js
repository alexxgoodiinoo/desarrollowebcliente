function temporizador(){
    console.log("Inicio del programa");
    setTimeout(()=>{
        console.log("Han pasado 2 segundos");
    }, 2000);
    console.log("Fin del programa");
}

//En este caso aparecería en primer lugar el inicio del programa, a continuación el fin del programa
//y por último se mostraría que han pasado 2 segundos

temporizador();

function temporizador2(){
    for (let i = 1; i <= 5; i++) {
        setTimeout(()=>{
            console.log(i);
        },i*1000); //Se multiplica por i para establecer en cada vuelta el tiempo, es decir, cuando llegue a 2 serian 2000 (2 segundos)
    }
}

temporizador2();