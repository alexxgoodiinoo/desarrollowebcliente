let arrayDeObjetos = [
    {id:1, nombre:"Prueba1"},
    {id:2, nombre:"Prueba2"},
    {id:2, nombre:"Prueba3"}
];



let idsUnicos = new Set(); //Nos creamos un nuevo set para ir metiendo los id que no existen

let arraySinDuplicados = arrayDeObjetos.filter(objeto => { //Aplicamos un filtro para comprobar si, en el nuevo set, hemos introducido ya el id
    if (idsUnicos.has(objeto.id)) { //Si ya esta dentro del set, no queremos que lo añada porque eso significa que está repetido
        return false;
    } else {
        idsUnicos.add(objeto.id); // Sin embargo, si devuelve false, es porque no está dentro del nuevo set, por tanto no está repetido
        return true;
    }
});

console.log(arraySinDuplicados);