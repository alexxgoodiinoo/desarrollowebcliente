function iniciarCarrera(){
    console.log("Los coches están en su posicion");
    console.log("Se ha iniciado la carrera");
    const coches = ['🚗','🏎️','🚙','🚓'];
    const promesas = coches.map((coche) => simularCarreraPorCoche(coche));
    Promise.race(promesas).then((resp) => console.log(resp + " ha ganado la carrera"));
    Promise.all(promesas).then(resultado => {
        for (let i = 0; i < resultado.length; i++) {
            console.log(i + " - " + resultado[i]);
        }
    })
}

function simularCarreraPorCoche(coche){
    return new Promise((resolve) => {
        let tiempoCoche = Math.floor(Math.random()*10)*1000;
        const pistas = ["lluvia", "avería", "nada"];
        let pistaAleatoria = Math.floor(Math.random()*pistas.length);
        if(pistaAleatoria===0){
            tiempoCoche += 3000;
        }else if(pistaAleatoria===1){
            tiempoCoche += 5000;
        }
        setTimeout(() => {
            resolve(coche);
        }, tiempoCoche);
    });
}

iniciarCarrera();