/* Análise do exercício 1

let a = 10
let b = 10

console.log(b)  = 10

b = 5
console.log(a, b) => imprime >>>  10  5
*/

/* Análise do exercício 2

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) => imprime >>>>  10 10 10
*/

/*
let cargaHorariaDia = prompt("Quantas horas você trabalha por dia?")
let salarioDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioDia/cargaHorariaDia} reais por hora`)
*/

// 1° Exercício de escrita de código

/*let nome = null
let idade = null
console.log("tipo var nome: ",typeof nome, ", tipo var idade:",typeof idade)
imprime tipo var nome:object ou null, tipo var idade: objecto ou null, pois a variável não 
contém o próprio valor de dados, e sim um ponteiro para o valor. Ele sempre usa quatro bytes 
na memória do computador, mas isso não inclui o armazenamento para os dados que representam
o valor da variável.
*/

let nome = prompt ("Qual é o seu nome?")
let idade = prompt ("Qual é a sua idade?")
console.log("tipo var nome: ",typeof nome, ", tipo var idade:",typeof idade)
/*agora imprime >> tipo var nome: string , tipo var idade: string, pois foram atribuídos os valores
através do prompt, e todo valor atribuído é do tipo string, ainda que seja número. Porém, de acordo com
a necessidade, podemos converter o tipo de string para Number ou de Number para toString(), conforme
explicado em aula
*/
console.log("Olá, ", nome, ", você tem ", idade, "anos.")


// 2° Exercício de escrita de código 

let clima = prompt("O dia está frio?")
console.log("O dia está frio? - ", clima)

let desempenho = prompt("Você está indo bem no curso da Labenu?")
console.log("Você está indo bem no curso da Labenu? - ", desempenho)

let lookDia = prompt ("Você está usando roupa social hoje?")
console.log("Você está usando roupa social hoje? - ", lookDia)

// 3° Exercício de escrita de código
let a = 10
let b = 25
let c = a
a = b
b = c
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


// Desafio
var num1 = prompt("Digite um número");
var num2 = prompt("Digite outro número para somar e multiplicar");
    
resultado1 = Number(num1)+Number(num2);
console.log("X = ", resultado1);
    
resultado2 = num1*num2;
console.log("Y = ", resultado2);