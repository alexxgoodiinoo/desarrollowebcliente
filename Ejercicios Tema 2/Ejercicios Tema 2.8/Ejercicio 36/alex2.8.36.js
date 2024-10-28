let alumnos = [{nombre: "Alex", edad: 20, nota: 7.5},{nombre: "Adrian", edad: 21, nota: 8.5}];

for (let alumno of alumnos) {
    if(alumno.nota > 8) console.log(alumno.nombre);
}