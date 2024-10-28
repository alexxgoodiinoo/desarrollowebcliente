let persona = {
    nombre: "Alex",
    correo: "alex.godino.0403@fernando3martos.com",
    edad: 20
}

fetch('https://api.ejemplo.com/enviar', {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(persona)
})
    .then(response => response.json())
    .then(data => console.log("Exito: ", data))
    .catch(error => console.error("Error: ", error));