// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// Desafio do Exercício 02

// let array = [1, 2, 3, 4, 5]
// let tamanhoArray = array.length
// let first = null
// let last = null
// for (first = 0, last = tamanhoArray - 1; first < last; first += 1, last -= 1) {
//   let arrayInvertida = array[first]
//   array[first] = array[last]
//   array[last] = arrayInvertida
// }
// console.log(array)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a,b)=> a - b);
    return array
}

retornaArrayOrdenado()

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = []
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i])
        }
    }
    return numerosPares
}

// filter
// let numerosPares = array.filter((numero)=>{
// return numero % 2 === 0
// })
// retornaNumerosPares()

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = array.filter((numero)=> {
        return numero % 2 === 0
         })
        const numerosParesElevadosAoQuadrado = numerosPares.map((numero)=>{
            return numero * numero
        })
        return numerosParesElevadosAoQuadrado
    }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
        let maiorNumero = -Infinity
        
        for(let i = 0; i < array.length; i++){
            if(array[i] > maiorNumero){
                maiorNumero = array[i]
            }
        }
    
        return maiorNumero
    }

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numbers = {}

    if (num1 > num2){
        numbers = {
            maiorNumero: num1,
            maiorDivisivelPorMenos: num1 % num2 === 0,
            diferenca: num1 - num2
        }
    }else if(num2 > num1){
        numbers = {
            maiorNumero: num2,
            maiorDivisivelPorMenos: num2 % num1 === 0,
            diferenca: num2 - num1
        }
    }else if(num1 === num2){
        numbers = {
            maiorNumero: num1,
            maiorDivisivelPorMenos: num1 % num2 === 0,
            diferenca: num1 - num2
        }
    }return numbers
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i)
        }
    } return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
        if (ladoA ===ladoB && ladoA === ladoC && ladoA === ladoC){
            return "Equilátero"
        } else if (ladoA === ladoB || ladoA=== ladoC || ladoC=== ladoB){
            return "Isósceles"
        }else if(ladoA !== ladoB || ladoA !== ladoC || ladoB !== ladoC){
            return "Escaleno"
        }
    }

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let nome1 = {
        ...pessoa,
        nome:"ANÔNIMO",
       
    }
    return nome1
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}