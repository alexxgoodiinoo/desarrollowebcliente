function peticionAPI(exito){
    return new Promise((resolve,reject)=>{
        if(exito){
            resolve("Datos recibidos correctamente");
        }else{
            reject("Error en la petición a la API");
        }
    });
}

function ejecutarPeticion(){
    try {
        let respuesta = peticionAPI(true);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }finally{
        console.log("Petición finalizada");
    }
}

ejecutarPeticion();