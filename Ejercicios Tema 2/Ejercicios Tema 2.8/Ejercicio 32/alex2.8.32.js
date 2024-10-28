let libro = {
    titulo: "El arbol de la ciencia",
    autor: "Pio Baroja",
    año: 1911
}

for (let datos in libro) {
    console.log(datos + ": " + libro[datos]);
}