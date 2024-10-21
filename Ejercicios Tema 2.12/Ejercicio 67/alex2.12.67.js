class Coche{
    #marca;
    #modelo;
    #anio;

    constructor(marca, modelo, anio){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#anio = anio;
    }

    descripcion(){
        return "Marca: " + this.#marca + "\nModelo: " + this.#modelo + "\nAño: " + this.#anio;
    }
}

let coche1 = new Coche("Audi", "R8", 2008);
let coche2 = new Coche("Ferrari", "Huracan", 2018);
let coche3 = new Coche("Peugeot", "508 SW", 2012);
console.log(coche1.descripcion());
console.log(coche2.descripcion());
console.log(coche3.descripcion());