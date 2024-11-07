function duplicarTexto(){
    let input = document.getElementById("inputText");
    let caja = document.getElementById("textDisplay");
    let texto = input.value;
    caja.innerHTML = texto + "<br>" + texto;
}