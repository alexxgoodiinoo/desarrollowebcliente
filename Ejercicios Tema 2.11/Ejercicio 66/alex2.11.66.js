function peticionAPI(exito){
    return new Promise((resolve,reject)=>{
        if(exito){
            resolve("Lectura recibida correctamente");
        }else{
            reject("Error en la lectura");
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