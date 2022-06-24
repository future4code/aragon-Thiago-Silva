function listaNumerosEntreInputs (num1, num2) {
    
    let resultado = []

    for(i = num1 ; i <= num2; i++) {
        

        resultado.push(i)

       
    }
    return resultado
}

console.log(listaNumerosEntreInputs(1,10))