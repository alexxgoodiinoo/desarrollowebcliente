let puntuacion = 0;
function ruleta(){
    const segundosAleatorios = Math.floor(Math.random()*3)+1;
    const promesa = new Promise((resolve, reject) => {
        console.log("La ruleta esta girando");
        setTimeout(()=>{
            const numeroAleatorio = Math.floor(Math.random()*11);
            if(numeroAleatorio===0) reject("La ruleta se ha atascado");
            else resolve("¡Tenemos un ganador! - "+numeroAleatorio);
        }, 1000*segundosAleatorios);
    });

    promesa.then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.error(error);
    });
}

ruleta();