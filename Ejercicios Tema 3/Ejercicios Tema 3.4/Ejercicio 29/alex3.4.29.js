const numerosPares = {
    [Symbol.iterator]() {
        let numero = 0;
        return {
            next() {
                numero += 2;
                return {
                    value: numero,
                    done: false
                };
            }
        };
    }
};

for (const num of numerosPares) {
    if (num > 20) break;
    console.log(num);
}