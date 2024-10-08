let estudiante = {
    nombre: "Alex",
    edad: 20,
    curso: "2DAW"
}

delete(estudiante.edad);

for (let datos in estudiante) {
    console.log(estudiante[datos]);
}