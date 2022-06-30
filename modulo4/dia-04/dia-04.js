/*Algoritmo
1- Armazenar a mesclagem dos dois objetos em uma variável;
2- Iterar a lista verificando o valor das chaves;
3- Adicionar em uma nova variável os elementos que ainda não existem nela;
4- 

*/

const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista = [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

function geraItensUnicos(arr1, arr2) {

const terceiraLista = arr1.concat(arr2)
let itensUnicos = []

terceiraLista.forEach((item) => {
    let valorDuplicado = itensUnicos.findIndex((idemValue) => {
        return item.nome == idemValue.nome
    }) > -1;

    if(!valorDuplicado) {
        itensUnicos.push(item)
    }
})

    return itensUnicos
}

console.log(geraItensUnicos(primeiraLista, segundaLista))