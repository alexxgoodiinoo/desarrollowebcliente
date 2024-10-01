let cancionesNombre = [];
let cancionesArtista = [];
let canciones = [];
let opcion;
let cancionNueva, nombreArtista, contadorCanciones = 0;

do{
    opcion = parseInt(prompt("1. Agregar cancion\n2. Buscar canciones\n3. Listar artistas\n4. Salir\nSeleccione una opción:"));

    switch(opcion){
        case 1:
            cancionNueva = prompt("Introduzca una nueva canción, escribiendo su nombre y su artista respectivamente, separados por ,");
            canciones = cancionNueva.split(',');
            cancionesNombre.push(canciones[0]);
            cancionesArtista.push(canciones[1]);
            break;
        case 2:
            nombreArtista = prompt("Introduzca el nombre del artista");
            for (let i = 0; i < cancionesArtista.length; i++) {
                if(nombreArtista == cancionesArtista[i]){
                    console.log(cancionesNombre[i]);
                    contadorCanciones++;
                }
            }
            if(contadorCanciones==0) console.log("No hay ninguna canción de ese artista");
            break;
        case 3:
            for (let i = 0; i < cancionesArtista.length; i++) {
                console.log(cancionesArtista[i]);
            }
            break;
        case 4: alert("Continue para salir");
    }
}while(opcion != 4);