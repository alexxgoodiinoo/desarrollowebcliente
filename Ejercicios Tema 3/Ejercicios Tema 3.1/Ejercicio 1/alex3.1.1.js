fetch('alex3.1.1.json')
    .then((response) => response.json())
    .then((data) => {
        let personas = data;
        console.log(personas.nombre);
        console.log(personas.edad);
        console.log(personas.ciudad);
    })
    .catch((error) => {
        console.error(error)
    });