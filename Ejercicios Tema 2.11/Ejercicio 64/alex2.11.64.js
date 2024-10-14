function parImpar(num){
    try {
        if(num%2==0){
            console.log("Es par");
        }else if(num%2==1){
            console.log("Es impar")
        }else{
            throw new Error("No has introducido un número");
        }
    } catch (error) {
        console.error(error.message);
    }finally{
        console.log("Comprobación finalizada");
    }
}
parImpar(3);