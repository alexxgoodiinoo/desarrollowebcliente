let rectangulo = {
    ancho: 5,
    alto: 8,
    getArea: function getArea(){
        return this.ancho * this.alto;
    }
}

console.log(rectangulo.getArea());