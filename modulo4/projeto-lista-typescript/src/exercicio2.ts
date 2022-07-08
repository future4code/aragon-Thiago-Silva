// ## Exercício 2

// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 

// - Formato esperado de saída → “Olá, me chamo {NOME}, nasci no dia {DIA}, no mês de {MÊS} e ano de {ANO}.”
// - Entrada esperada → string, string
// - Saída esperada → string

// Dica: Para dividir a string da data utilize o método .split()

function retornaDados (nome:string, dataNasc:string):string {

    const dataSeparada = dataNasc.split("/")
    const dia = dataSeparada[0]
    const mes = dataSeparada[1]
    const ano = dataSeparada[2]

    const frase = `Olá, me chamo ${nome}, nasci no dia ${dia}, no mês de ${mes} e ano de ${ano}.`

    return frase
}

console.log(retornaDados("Thiago","01/07/1984"))