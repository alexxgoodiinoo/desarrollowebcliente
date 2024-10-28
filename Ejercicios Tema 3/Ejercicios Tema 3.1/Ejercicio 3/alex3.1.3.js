fetch('alex3.1.3.json')
    .then(response => response.json())
    .then(data => {
        let personas = data;
        personas.forEach(persona => {
            console.log(persona.nombre);
            console.log(persona.edad);
        });
    })
    .catch(error => {
        console.error(error);
    });