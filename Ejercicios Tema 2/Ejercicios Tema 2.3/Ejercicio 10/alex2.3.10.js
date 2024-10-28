let peliculaElegida = prompt("1. Contratiempo\n2. Interestelar\n3. Shrek\n Ingresa tu película favorita");
switch(peliculaElegida){
    case "1":{
        document.write("<h1>Su ticket ha sido emitido</h1>");
        document.write("<img src = 'contratiempo.jpg'>");
        break;
    }
    case "2":{
        document.write("<h1>Su ticket ha sido emitido</h1>");
        document.write("<img src = 'interestelar.jpg'>");
        break;
    }
    case "3":{
        document.write("<h1>Su ticket ha sido emitido</h1>");
        document.write("<img src = 'shrek.jpg'>");
        break;
    }
}