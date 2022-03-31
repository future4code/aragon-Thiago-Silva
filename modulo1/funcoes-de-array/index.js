// Exercício 1 - Interpretação de código

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// a) Será impresso:  Cada elemento(objeto completo) da array usuarios, o respectivo índice e a array completa.
// ou seja, serão impressos conforme abaixo:
// {nome: 'Amanda Rangel', apelido: 'Mandi'}     0     (3) [{…}, {…}, {…}]
//                                                     0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
//                                                     1: {nome: 'Laís Petra', apelido: 'Laura'}
//                                                     2: {nome: 'Letícia Chijo', apelido: 'Chijo'}


// {nome: 'Laís Petra', apelido: 'Laura'}        1     (3) [{…}, {…}, {…}]
//                                                     0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
//                                                     1: {nome: 'Laís Petra', apelido: 'Laura'}
//                                                     2: {nome: 'Letícia Chijo', apelido: 'Chijo'}

// {nome: 'Letícia Chijo', apelido: 'Chijo'}     2    (3) [{…}, {…}, {…}]
//                                                     0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
//                                                     1: {nome: 'Laís Petra', apelido: 'Laura'}
//                                                     2: {nome: 'Letícia Chijo', apelido: 'Chijo'}

// Exercício 2 - Interpretação de código

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// a) Serão impressas apenas a propriedade "nome" de cada objeto da array, conforme abaixo.
// ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

// Exercício 3 - Interpretação de código

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// a) Serão impressas os elementos (ojetos completos) da array usuários em que a propriedade
// apelido for diferentes de "Chijo". Conforme abaixo:
// (2) [{…}, {…}]
// 0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
// 1: {nome: 'Laís Petra', apelido: 'Laura'}

// Obs.: map copia a array inteira e pode fazer alterações nos elementos da array.
//       filter copia a array sem editar valores dos elementos, mas pode filtrar 
//       todos, nenhum ou alguns elementos que atendam as condições criadas.

// Exercício 1 completo - Escrita de código

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const nomePets = pets.map((pet) => {
    return pet.nome
})

console.log(nomePets)

const racaSalsicha = pets.filter((pet) =>{
    return pet.raca === "Salsicha"
})

console.log(racaSalsicha)

const poodles = pets.filter((pet) => {
    return pet.raca === "Poodle"
})

const arrayMensagens = poodles.map((pet) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o(a) ${pet.nome}`
})

console.log(arrayMensagens)

// Exercício 2 completo - Escrita e código

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomesDosProdutos = produtos.map((produto) =>{
     return produto.nome
 })
 console.log(nomesDosProdutos)

 const descontoDeCincoPorCento = produtos.map((produto) =>{
    return {
        produto: produto.nome,
        preco: produto.preco * 0.95
    }
 })
console.log(descontoDeCincoPorCento)

const categoriaBebidas = produtos.filter((produto) =>{
    return produto.categoria === "Bebidas"
})
console.log(categoriaBebidas)

const marcaYpe = produtos.filter((produto) =>{
    return produto.nome.includes("Ypê")
})
console.log(marcaYpe)

const fraseCompra = marcaYpe.map((produto) =>{
    return `COMPRE ${produto.nome} por PREÇO ${produto.preco}.`
})
console.log(fraseCompra)

// Desafios completo

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const listaNomeDosPokemons = pokemons.map((pokemon) =>{
     return pokemon.nome
 })

 const ordemAlfabeticaNomeDosPokemons = listaNomeDosPokemons.sort()
 console.log(ordemAlfabeticaNomeDosPokemons)

 const todosTiposDePokemon = pokemons.map((pokemon) =>{
    return pokemon.tipo
 })
 console.log(todosTiposDePokemon)

 const TiposDePokemonSemRepeticao = todosTiposDePokemon.filter((tipo, i) => todosTiposDePokemon.indexOf(tipo) === i)
 console.log(TiposDePokemonSemRepeticao)