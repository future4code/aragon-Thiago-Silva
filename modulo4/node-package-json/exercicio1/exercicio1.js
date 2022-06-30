// a) Podemos acessar os parâmetros passados na linha de comando para o Node utilizando
// o array process.argv["posição do argumento"], onde os dois primeiros argumentos são
// fixos, sendo posição [0] o próprio node e a posição [1] o nome do arquivo que será executado.

const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = Number(idade + 7)
const resultado = `Olá, ${nome}. Você tem ${idade} anos! Em sete anos você terá ${novaIdade}.`

console.log(resultado)