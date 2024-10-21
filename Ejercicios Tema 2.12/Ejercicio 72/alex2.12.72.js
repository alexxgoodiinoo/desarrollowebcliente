class Configuracion {
    static #instancia = null;

    constructor(configuracionInicial) {
        if (Configuracion.#instancia) {
            return Configuracion.#instancia; // Si ya existe una instancia, retornarla
        }
        this.configuracion = configuracionInicial;
        Configuracion.#instancia = this;
    }

    getConfiguracion() {
        return this.configuracion;
    }

    // Método para cambiar la configuración
    setConfiguracion(nuevaConfiguracion) {
        this.configuracion = nuevaConfiguracion;
    }

    // Método estático para obtener la instancia de la clase
    static getInstancia(configuracionInicial = {}) {
        if (!Configuracion.#instancia) {
            Configuracion.#instancia = new Configuracion(configuracionInicial);
        }
        return Configuracion.#instancia;
    }
}

const config1 = Configuracion.getInstancia({ tema: "oscuro", idioma: "español" });
console.log(config1.getConfiguracion());

const config2 = Configuracion.getInstancia();
console.log(config2.getConfiguracion());

console.log(config1 === config2);

config2.setConfiguracion({ tema: "claro", idioma: "inglés" });
console.log(config1.getConfiguracion());
