class Descarga {
    constructor(nombre, tiempoDescarga){
        this.nombre = nombre;
        this.tiempoDescarga = tiempoDescarga;
        this.progreso = "0%";
        this.pausada = false;
        this.cancelada = false;
    }

    aumentarProgreso(progreso){
        this.progreso = progreso;
    }

    pausarDescarga(){
        this.pausada = true;
    }

    continuarDescarga(){
        this.pausada = false;
    }

    cancelarDescarga(){
        this.cancelada = true;
    }
}

const descargas = [
    new Descarga("The Legend Of Zelda", Math.floor(Math.random() * 10) + 1),
    new Descarga("League Of Legends", Math.floor(Math.random() * 10) + 1),
    new Descarga("Dark Souls", Math.floor(Math.random() * 10) + 1),
    new Descarga("Castlevania", Math.floor(Math.random() * 10) + 1)
];

function comienzaDescarga(descargas) {
   
    for (let i = 2; i < descargas.length; i++) { 
        descargas[i].pausarDescarga();
    }

   
    function descargarJuego(descarga) {
        return new Promise((resolve) => {
            
            setTimeout(() => {
                descarga.aumentarProgreso("100%"); 
                console.log(`${descarga.nombre} descargado al 100%`);
                resolve(descarga); 
            }, descarga.tiempoDescarga * 1000); 
        });
    }

   
    Promise.all([descargarJuego(descargas[0]), descargarJuego(descargas[1])]) 
        .then(() => {
            
            console.log("Las dos primeras descargas se completaron. Continuamos con las siguientes.");
            for (let i = 2; i < descargas.length; i++) {
                descargas[i].continuarDescarga();
                
                descargarJuego(descargas[i]).then(() => {
                    console.log(`${descargas[i].nombre} descargado al 100%`);
                });
            }
        });


    setInterval(() => {
        descargas.forEach(descarga => {
            console.log(`Nombre: ${descarga.nombre}, Progreso: ${descarga.progreso}, Pausada: ${descarga.pausada}`);
        });
    }, 1000);
}


comienzaDescarga(descargas);