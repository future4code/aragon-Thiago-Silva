/*Exercício 1 - Interpretação de código
a) 10
   50

b) 50 - o console imprimiria apenas a última função invocada

Exercício 2 - Interpretação de código
a) Esta função altera o formato do parâmetro inserido para letras minúsculas (toLowerCase) e
   verifica se existe um determinado elemento dentro da string inserida no prompt (includes())

b)
i. true
ii. true
iii. true
*/

// Exercício 1.a - escrita de código

const frase = "Eu sou Thiago, tenho 37 anos, moro em Poá-SP e sou estudante."
function imprimirMensagem(){
return frase
}

imprimirMensagem(frase)

// Exercício 1.b - escrita de código

function imprimirFrase(nome, idade, cidade, profissão){
    const frase2 = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`
    return frase2
}

imprimirFrase("Thiago", 37, "Poá", "desenvolvedor")

// Exercício 2.a - escrita de código

function somarNum(num1,num2){
    const resultado = num1 + num2
    return resultado
}

somaNum(5,10)

// Exercício 2.b - escrita de código

function compararNumeros(a,b) {
    const comparacao = a >= b
    return comparacao
}

compararNumeros(10,5)

// Exercício 2.c - escrita de código

function verificarNumPar(i) {
    const calculoDiv = i % 2
    return calculoDiv == 0
}

verificarNumPar(5)

// Exercício 2.d - escrita de código

function alterarMensagem(mensagem){
    return mensagem.toUpperCase()
}

alterarMensagem("Meu nome é Thiago")

// Exercício 3

const primeiroNum = Number(prompt("Digite um número"))
const segundoNum = Number(prompt("Digite outro número"))

function somar(primeiroNum,segundoNum){
    const calculoSoma = primeiroNum + segundoNum
    return console.log(calculoSoma)
}

function subtrair(primeiroNum,segundoNum){
    const calculoSubtracao = primeiroNum - segundoNum
        return console.log(calculoSubtracao)
}

function multiplicar(primeiroNum,segundoNum){
    const calculoMultiplicacao = primeiroNum * segundoNum
    return console.log(calculoMultiplicacao)
}

function dividir(primeiroNum,segundoNum){
    const calculoDivisao = primeiroNum / segundoNum
    return console.log(calculoDivisao)
}

somar(primeiroNum,segundoNum)

subtrair(primeiroNum, segundoNum)

multiplicar(primeiroNum, segundoNum)

dividir(primeiroNum, segundoNum)

// Desafio 1.a

const imprimeNum = (num) =>{
    return console.log(num)
}

imprimeNum(50)

// Desafio 1.b


const somarDoisNum = (valorUm,valorDois) =>{
    const calcSomarDoisNum = (valorUm + valorDois)
    return console.log(imprimeNum(calcSomarDoisNum))
}

somarDoisNum(10,5)

// Desafio 2

function pitagoras(c1,c2){
    const hip = (c1 * c1) + (c2 * c2); 
        return Math.sqrt(hip)
    }
    
console.log(pitagoras(15,20))