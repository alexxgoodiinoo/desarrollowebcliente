fetch('alex3.1.6.json')
    .then(response => response.json())
    .then(data => {
        let personas = data;
        personas.forEach(persona => {
            persona.nota + 1;
            console.log(persona.nombre);
            console.log(persona.nota);
        });
    })
    .catch(error => {
        console.error(error);
    })