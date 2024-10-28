class Persona{
    #nombre;
    #edad;
    #trabajo;

    constructor(nombre, edad, trabajo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#trabajo = trabajo;
    }

    cambiarTrabajo(trabajo){
        this.#trabajo = trabajo;
    }
}

let persona1 = new Persona("Alex", 20, "DAW");
let persona2 = new Persona("Adrian", 21, "ASIR");
let persona3 = new Persona("Gabi", 21, "DAW");
console.log(persona1);
console.log(persona2);
console.log(persona3);
persona1.cambiarTrabajo("No tiene");
console.log(persona1);
console.log(persona2);
console.log(persona3);