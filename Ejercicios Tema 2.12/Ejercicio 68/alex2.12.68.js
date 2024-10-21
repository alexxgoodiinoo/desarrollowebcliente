class Rectangulo{
    #ancho;
    #alto;

    constructor(ancho, alto){
        this.#ancho = ancho;
        this.#alto = alto;
    }

    calcularArea(){
        return this.#ancho * this.#alto;
    }
}

let rectangulo1 = new Rectangulo(12,4);
let rectangulo2 = new Rectangulo(2,4);
let rectangulo3 = new Rectangulo(11,18);
console.log(rectangulo1.calcularArea());
console.log(rectangulo2.calcularArea());
console.log(rectangulo3.calcularArea());