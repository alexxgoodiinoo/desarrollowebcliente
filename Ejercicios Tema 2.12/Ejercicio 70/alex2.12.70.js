class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar() {
        console.log(this.nombre + " está trabajando");
    }
}

class Gerente extends Empleado {
    constructor(nombre, salario) {
        super(nombre, salario);
    }

    dirigir() {
        console.log(this.nombre + " está dirigiendo");
    }
}

let empleado1 = new Empleado("Alex", 1500);
let gerente1 = new Gerente("Adrian", 1500);

empleado1.trabajar();
gerente1.dirigir();