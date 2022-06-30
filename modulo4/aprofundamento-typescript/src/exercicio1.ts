// ## Exercício 1

// Crie uma variável chamada ano, do tipo string, e atribua um valor a ela. 
// Em seguida, tente reatribuir um número a esta variável. 
// O que acontece? Como fazer para que esta variável também aceite number?

// Quando criamos uma variável ano do tipo string e atribuímos um valor string é aceito, 
// porém, quando reatribuímos um novo valor como number, o código dá erro.
// Para que a variável aceite os dois tipos, criamos um type = string | number.

type Ano = string | number

const ano:Ano = 2022

console.log(ano)