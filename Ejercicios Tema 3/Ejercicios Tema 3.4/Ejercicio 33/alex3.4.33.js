const cache = new WeakMap();

function generadorPotencias(base) {
    let exponente = 0;

    while (true) {
        if (!cache.has(base)) {
            cache.set(base, new Map());
        }

        const baseCache = cache.get(base);

        if (!baseCache.has(exponente)) {
            const resultado = Math.pow(base, exponente);
            baseCache.set(exponente, resultado);
        }

        yield baseCache.get(exponente);
        exponente++;
    }
}

const base = { valor: 2 };
const potencias = generadorPotencias(base);

for (let i = 0; i < 10; i++) {
    console.log(potencias.next().value);
}
