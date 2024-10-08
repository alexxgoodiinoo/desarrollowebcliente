let animal = {
    hablar: function(){
        console.log("El animal habla");
    }
};

let perro = Object.create(animal);

perro.hablar = function(){
    console.log("Guau");
};

animal.hablar();
perro.hablar();