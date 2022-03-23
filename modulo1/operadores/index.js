/* Exercício 1
a) false
b) false
c) true
d) boolean

Exercício 2
Serão impressos os dois números escolhidos concatenados como se fossem texto, pois são duas
variáveis do tipo string. Se digitarmos 5 e 5 será impresso 55.

Exercício 3
O correto seria converter as variáveis primeiroNumero e segundoNumero em Number, conforme abaixo:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/

// Exercício 1 - Escrita de código

let suaIdade = Number(prompt("Qual é sua idade?"))
let idadeMelhorAmigo = Number(prompt("Qual é a idade do(a) seu(sua) melhor amigo(a)"))
console.log("Sua idade é maior do que a do(a) seu(sua) amigo(a)?", suaIdade>idadeMelhorAmigo)

// Exercício 2 - Escrita de código

let num1 = Number(prompt("Digite um número par"))
resultado = num1 % 2
console.log(resultado)

// testando código com números pares, percebi o padrão de resultado = 0 (zero), ou sem resto de divisão.
// testando código com números ímpares, percebi o padrão de resultado = 1 (um).

// Exercícios 3 - Escrita de código

let idade = Number(prompt("Qual é a sua idade?"))
const idadeMeses = idade*12
const idadeDias = idade*12*30
const idadeHoras = idade*12*30*24
console.log("Você tem ", idadeMeses, "meses de vida.")
console.log("Você tem ", idadeDias, "dias de vida.")
console.log("Você tem ", idadeHoras, "horas de vida.")

// Exercício 4 - Escrita de código

let primeiroNumero = Number(prompt("Digite um número"))
let segundoNumero = Number(prompt("Digite outro número"))
console.log(primeiroNumero)
console.log(segundoNumero)
const primeiroDivisorSegundo = primeiroNumero % segundoNumero
const segundoDivisorPrimeiro = segundoNumero % primeiroNumero
console.log("O primeiro número é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo?", primeiroNumero == segundoNumero)
console.log("O primeiro número é divisível pelo segundo?", primeiroDivisorSegundo == 0)
console.log("O segundo número é divisível pelo primeiro?", segundoDivisorPrimeiro == 0)

/* Desafio 1.a

let farenheit = 77
let kelvinF = (farenheit - 32) * (5/9) + 273.15
console.log("77° Farenheit é igual a ", kelvin, "K.")
*/

// Desafio 1.b
/*
let celsius = 80
let farenheit = (celsius) * (9/5) + 32
console.log("A temperatura em ", celsius, "°C é igual a ", farenheit, "°F.")
*/

// Desafio 1.c

let celsius = 30
let farenheit = (celsius * (9/5)) + 32
let kelvin = celsius + 273.15
console.log("A temperatura de 30°C é igual a ", farenheit, "°F, e ", kelvin, "K.")

// Desafio 1.d

let celsius = Number(prompt("Digite a temperatura em °C para converter em F° e K"))
let farenheit = (celsius * (9/5)) + 32
let kelvin = celsius + 273.15
console.log("A temperatura de 30°C é igual a ", farenheit, "°F, e ", kelvin, "K.")

// Desafio 2.a

let consumoEnergiaKwh = 280
let valorPorKwh = 0.05
let valorContaLuz = consumoEnergiaKwh * valorPorKwh
console.log("Sua conta de luz é de ", valorContaLuz, "reais.")

// Desafio 2.b

let consumoEnergiaKwh = 280
let valorPorKwh = 0.05
let valorContaLuz = consumoEnergiaKwh * valorPorKwh
let descontoContaLuz = 0.15
let valorContaLuzFinal = valorContaLuz - (valorContaLuz * descontoContaLuz)
console.log("Sua conta de luz é de ", valorContaLuzFinal, "reais.")

// Desafio 3.a

//let libra = 20
//let kilo = libra / 2.205
//console.log("20lb equivalem a ", kilo, "kg.")

// Desafio 3.b

//let onça = 10.5
//let kilo = onça / 35.274
//console.log("10.5oz é igual a", kilo, "kg.")

// Desafio 3.c

//let milha = 100
//let metro = milha * 1609.34
//console.log("100mi em metros é igual ", metro, "m.")

// Desafio 3.d

let pe = 50
let metro = pe / 3.281
console.log("50ft em metros é igual a ", metro, "m.")

// Desafio 3.e

let galao = 103.56
let litro = galao * 4.54609
console.log("103.56gl é igual a ", litro, "l.") //não usamos o galão americano rs

// Desafio 3.f

let xicara = 450
let litro = xicara * 0.24
console.log("450xc é igual a ", litro, "l.")

// Desafio 3.g

let xicara = Number(prompt("Digite uma quantidade em xícaras para converter em litros"))
let litro = xicara * 0.24
console.log("450xc é igual a ", litro, "l.")