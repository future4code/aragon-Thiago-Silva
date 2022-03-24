/* Exercício 1 - interpretação 
a)  undefined
b)  null
c)  11
d)  3
e)  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f)  9

Exercício 2 - interpretação

SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

// Exercício 1 de escrita de código


let nome = prompt("Qual é o seu nome?")
let eMail = prompt ('Qual é o seu e-mail?')
const frase1 = "O e-mail " + eMail + " foi cadastrado com sucesso. Seja bem-vindo(a), " + nome + "."
console.log(frase1)
const frase2 = `O e-mail ${eMail} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome}.`
console.log(frase2)

// Exercício 2.a de escrita de código

let pratosPreferidos = [ "pizza", "lasanha", "feijoada", "yakisoba", "salada" ]

//2.b
console.log(`${pratosPreferidos[0],"\n","quebrou a linha?"} 
${pratosPreferidos[1]}
${pratosPreferidos[2]}
${pratosPreferidos[3]}
${pratosPreferidos[4]}`)

//2.c
pratosPreferidos[1] = prompt("Qual é seu prato favorito?")
console.log(pratosPreferidos)

// Exercício 3.a

let listaDeTarefas = []

// Exercício 3.b

listaDeTarefas[0] = prompt("Digite a primeira tarefa doméstica para realizar hoje")
listaDeTarefas[1] = prompt("Digite a segunda tarefa doméstica para realizar hoje")
listaDeTarefas[2] = prompt("Digite a terceira tarefa doméstica para realizar hoje")

// Exercício 3.c

console.log(listaDeTarefas)

// Exercício 3.d

tarefaRealizada = Number(prompt("Digite o índice da tarefa que já realizou hoje: 0, 1 ou 2?"))
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)

// Desafio 1

let arraysPergunta = prompt("Insira uma frase")
resultado = arraysPergunta.split(" ")

console.log(resultado); // ["O", "Palmeiras", "não", "tem", "mundial"]

// Desafio 2

let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let pesquisaFruta = arrayFrutas.indexOf("Abacaxi")
console.log(pesquisaFruta)
console.log(arrayFrutas.length)
