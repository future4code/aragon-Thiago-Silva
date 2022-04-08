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

// Exercício 1 - Interpretação de código
// a) O código verifica se o número escolhido no prompt é número par " numero % 2 === 0" ou senão, ímpar 
//    e imprime uma frase para cada condição.
// b) Números pares.
// c) Números ímpares.

// Exercício 2 - Interpretação de código
// a) O código serve para imprimir uma frase com o preço atribuído à fruta escolhida.
// b) O preço da fruta  Maçã  é  R$  2.25
// c) Sem o break no case "Pêra", o preço atribuído a fruta é o mesmo do default ou seja
// o código imprimiria "O preço da fruta  Pêra  é  R$  5".

// Exercício 3 - Interpretação de texto
// a) A primeira linha está criando uma variável, atribuindo o tipo Number para a resposta inserida pelo
//    usuário através do prompt.
// b) Para o número 10  >>> Esse número passou no teste
//    Para o número -10 >>> ReferenceError: mensagem is not defined
// c) Haverá um erro no console, pois a variável mensagem está no escopo local e não pode ser utilizada fora deste
//    deste escopo.

// Exercício 1 - Escrita de código
// a) e b)
const idadeUsuario = Number(prompt("Informe a sua idade:"))

// c)
    if (idadeUsuario >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }

// // Exercício 2 - Escrita de código

const perguntaTurno = prompt("Digite o turno do dia (V/M/N): M para Matutino, V para Vespertino e N para noite")

function verificaTurno(turno){
    if (perguntaTurno == "V") {
        return "Bom dia!"
    } else if (perguntaTurno == "M") {
        return "Boa tarde!"
    } else if (perguntaTurno == "N") {
        return ("Boa noite!")
    } else {
        return "Digite uma opção válida!"
    } 
}

console.log(verificaTurno())

// Exercício 3 - Escrita de código

const perguntaTurno2 = prompt("Digite o turno do dia (V/M/N): M para Matutino, V para Vespertino e N para noite")

    function verificaTurno(turno){
    switch (perguntaTurno2){
        case "V":
            return "Bom dia!"
            break
        case "M":
            return "Boa tarde!"
            break
        case "N":
            return "Boa noite!"
            break
        default:
            return "Digite uma opção válida!"
    } 
}

console.log(verificaTurno())

// Exercício 4 - Escrita de código

const generoFilme = prompt("Qual o gênero de filme que vocês desejam assistir?")
const precoFilme = Number(prompt("Qual o preço do filme? Digite 10 para R$ 10,00 e 10.40 para R$10,40"))

function analisaCondicoesParaVerFilme(generoFilme,precoFilme){
    if (generoFilme === "fantasia" && precoFilme < 15){
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme")
    }
}

analisaCondicoesParaVerFilme()

// Desafio 1 

const generoFilme1 = prompt("Qual o gênero de filme que vocês desejam assistir?")
const precoFilme1 = Number(prompt("Qual o preço do filme? Digite 10 para R$ 10,00 e 10.40 para R$10,40"))
const pergunta = prompt("Qual snack quer comprar?")

function analisaCondicoesParaVerFilme(generoFilme1,precoFilme1){
    if (generoFilme1 === "fantasia" && precoFilme1 < 15){
        console.log("Bom filme! E aproveite seu/sua:", resposta)
    } else {
        console.log("Escolha outro filme")
    }
}

analisaCondicoesParaVerFilme()

// Desafio 2 

const nomeCompleto = prompt("Digite seu nome completo.")
const tipoDeJogo = prompt("Escolha o tipo de jogo (IN/DO): IN (para Internacional) ou DO (para Doméstico.")
const etapaDoJogo = prompt("Escolha a etapa do jogo (SF/DT/FI): SF (para Semifinais), ou DT (para Decisão do 3° lugar ou FI para Final.")
const categoria = prompt("Escolha a categoria: Digite 1, 2, 3 ou 4.")
const cambioDolar = 4.10


const TipoDeJogoDomestico = {

}

function compraIngresso(tipoDeJogo,etapaDoJogo,categoria){
