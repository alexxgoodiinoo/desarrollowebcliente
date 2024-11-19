//crear un WeakSet para el seguimiento de páginas visitadas
const paginasVisitadas = new WeakSet();

//función para registrar una página visitada
function registrarPagina(pagina) {
    paginasVisitadas.add(pagina);
}

//función para comprobar si una página ha sido visitada
function haSidoVisitada(pagina) {
    return paginasVisitadas.has(pagina);
}

let pagina1 = { url: "https://www.youtube.com" };
let pagina2 = { url: "https://classroom.google.com/u/2/h?pli=1" };

registrarPagina(pagina1);
registrarPagina(pagina2);
console.log(haSidoVisitada(pagina1));
console.log(haSidoVisitada(pagina2));

//eliminar referencias a las páginas
pagina1 = null;
pagina2 = null;