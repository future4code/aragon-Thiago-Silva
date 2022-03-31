// Exercício 1

let condicao = true
let soma = 0

while(condicao){
    const numeroUsuario = Number(prompt('Digite um número de 0 a 10.'))

    if(!numeroUsuario){
        condicao = false
        console.log('falso')
    } else {
    console.log('true')
}

soma = soma + numeroUsuario
console.log(soma)

}

// Exemplo de for

const numeros = [14,67,89,15,23]

for(let i = 0; i < 5; i++){
    const elemento = numeros[i]
    console.log(elemento)
}

// Exercício 2

const numero = [11,15,18,14,12,13]

function devolveMaiorNumero(array){
    let maiorNumero = 0

    for(let i = 0; i < array.length; i++){
        let posicaoAtualArray = array[i]

        if(posicaoAtualArray >= maiorNumero){
            maiorNumero = posicaoAtualArray
        }
    }
    console.log(`O maior número da array é: ${maiorNumero}.`)
}

devolveMaiorNumero(numero)

// Exercício 3

const palavras = ["Oi","sumido","tudo","bem?"]

let frase = ""

for(let palavra of palavras){
    frase = frase + `${palavra} `
   
}
console.log(frase)