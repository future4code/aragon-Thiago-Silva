function listaNumerosParesEntreInputs (num1, num2) {
    
    let resultado = []

    for(i = num1 + 1 ; i < num2; i++) {
        
        if(i % 2 === 0) {
            resultado.push(i)
        }     
    }
    return resultado
}

console.log(listaNumerosParesEntreInputs(1,10))