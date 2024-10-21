class Banco {
    #balance;

    constructor(balanceInicial = 0) {
        this.#balance = balanceInicial;
    }
    
    getBalance() {
        return this.#balance;
    }

    // Método para depositar dinero
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#balance += cantidad;
            console.log("Has depositado " + cantidad + "€. Balance actual: " + this.#balance + "€");
        } else {
            console.log("No se puede depositar una cantidad negativa o cero.");
        }
    }

    // Método para retirar dinero
    retirar(cantidad) {
        if (cantidad > this.#balance) {
            console.log("Fondos insuficientes para retirar esa cantidad.");
        } else if (cantidad <= 0) {
            console.log("La cantidad a retirar debe ser mayor que cero.");
        } else {
            this.#balance -= cantidad;
            console.log("Has retirado " + cantidad + "€. Balance actual: " + this.#balance + "€");
        }
    }
}

const miBanco = new Banco(500);

// Uso de los métodos
console.log("Balance inicial: " + miBanco.getBalance() + "€");

miBanco.depositar(200);
miBanco.retirar(100);  
miBanco.retirar(700);
console.log("Balance final: " + miBanco.getBalance() + "€");
