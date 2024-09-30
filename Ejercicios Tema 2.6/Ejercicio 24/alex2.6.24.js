let array = [];
let opcion;
let tareaNueva, tareaModificada, opcionEliminar, opcionModificar;

do{
    opcion = parseInt(prompt("1. Agregar tarea\n2. Modificar tarea\n3. Eliminar tarea\n4. Ver tareas\n5. Salir\nSeleccione una opción:"));

    switch(opcion){
        case 1:
            tareaNueva = prompt("Introduzca la nueva tarea");
            array.push(tareaNueva);
            break;
        case 2:
            opcionModificar = parseInt(prompt("Introduzca el número de la tarea que quieres modificar"));
            for (let i = 0; i < array.length; i++) {
                if(opcionModificar-1 == i){
                    tareaModificada = prompt("Introduzca la tarea modificada");
                    array[i] = tareaModificada;
                }
            }
            break;
        case 3:
            opcionEliminar = parseInt(prompt("Introduzca el número de la tarea que quieres eliminar"));
            for (let i = 0; i < array.length; i++) {
                if(opcionEliminar-1 == i){
                    array.splice(i, 1);
                    alert("La tarea ha sido eliminada conrrectamente");
                }
            }
            break;
        case 4:
            for (let i = 0; i < array.length; i++) {
                const element = array [i];
                console.log((i+1) + ". " + element);
            }
            break;
        case 5: alert("Continue para salir");
        default: console.log("Incorrecto. Por favor, seleccione una opción del menú");
    }
}while(opcion != 5);