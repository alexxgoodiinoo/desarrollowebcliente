function division(num1, num2){
    try {
        if(num2===0){
            throw new Error("No se puede dividir entre 0");
        }
        return num1/num2;
    } catch (error) {
        console.error(error.message);
    }finally{
        console.log("Operacion finalizada");
    }
}

console.log(division(4,2));