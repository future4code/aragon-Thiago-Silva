// Exercício 1 - Interpretação de código
// a) Matheus Nachtergaele
//    Virginia Cavendish
//    {canal: 'Globo', horario: '14h'}

// Exercício 2 - Interpretação de código
// a) {nome: 'Juca', idade: 3, raca: 'SRD'}
//    {nome: 'Juba', idade: 3, raca: 'SRD'}
//    {nome: 'Jubo', idade: 3, raca: 'SRD'}

// b) Através desta sintaxe chamada espalhamento (ou spread) conseguimos realizar a cópia de um objeto (ou
//    array) inteiro. Feita essa cópia, podemos manipulá-la da maneira que quisermos. Ex: mudar ou 
//    adicionar propriedades.

// Exercício 3 - Interpretação de código
// a) false
//    undefined

// b) O primeiro console.log: console.log(minhaFuncao(pessoa, "backender")) imprime o retorno "false" que é o valor
// da propriedade "backender" do objeto "pessoa".
// Já o segundo console.log: console.log(minhaFuncao(pessoa, "altura")) imprime "undefined" porque a propriedade
//  'altura' não foi definida no objeto "pessoa".

// Exercício 1.a - Escrita de código

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }

function imprimeFrase(objetoPessoa){
const frase = `Eu sou ${objetoPessoa.nome}, mas pode me chamar de: ${objetoPessoa.apelidos[0]}, ${objetoPessoa.apelidos[1]} ou ${objetoPessoa.apelidos[2]}.`
    console.log(frase)
}
imprimeFrase (pessoa)

// Exercício 1.b - Escrita de código 

const novosApelidos = {
    ...pessoa,
    apelidos: ["Mandona", "Mandz", "Baixinha"]
}

imprimeFrase(novosApelidos)

// Exercício 2.a - Escrita de código

const aluno = {
    nome: "Thiago",
    idade: 37,
    profissao: "desenvolvedor"
}

const amigo = {
    nome: "Willian",
    idade: 32,
    profissao: "desenvolvedor"
}

// Exercício 2.b - Escrita de código

function criaArray(labenu){
    let dadosConsulta = [labenu.nome, labenu.nome.length, labenu.idade, labenu.profissao, labenu.profissao.length]
    return dadosConsulta
}

console.log(criaArray(aluno))
console.log(criaArray(amigo))

// Exercício 3. (a,b,c e d) - Escrita de código
const carrinho = []

const fruta1 = {
    nome: "uva",
    disponibilidade: true
}

const fruta2 = {
    nome: "morango",
    disponibilidade: true
}

const fruta3 = {
    nome: "limão",
    disponibilidade: true
}

function insereFrutaCarrinho(compra) {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
    return compra
}

insereFrutaCarrinho(carrinho)

// Desafio 1

function imprimeObjeto() { 
    const formulario = {
    nome: prompt("Qual é seu nome?"),
    idade: prompt("Qual é sua idade?"),
    profissao: prompt("Qual é sua profissão?")
    }
    console.log(formulario)
}

imprimeObjeto()

// Desafio 2

const filme1 = {
    nome: "O algoritmo",
    anoDeLancamento: 2000
}

const filme2 = {
    nome: "O assassinato da Array",
    anoDeLancamento: 2000
}

function comparaAnoLancamento() {
    const comparaAno1 = filme1.anoDeLancamento < filme2.anoDeLancamento
    const comparaAno2 = filme1.anoDeLancamento == filme2.anoDeLancamento
    console.log("O primeiro filme foi lançado antes do segundo", comparaAno1)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo", comparaAno2)
}

comparaAnoLancamento()

// Desafio 3

const frutaA = {
    nome: "uva",
    disponibilidade: true
}

const frutaB = {
    nome: "morango",
    disponibilidade: true
}

const frutaC = {
    nome: "limão",
    disponibilidade: true
}

function insereFrutaCarrinho(objetoFruta) {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
    return objetoFruta
}

function controleEstoque(estoqueZero) {
    return !estoqueZero.disponibilidade
}

console.log(controleEstoque(frutaA))