// ## Exercício 3

// Analise a função a seguir escrita em JS, e responda as perguntas:

// 
// ```

// ### Parte 1

// Quais são as entradas e saídas dessa função? Copie a função para um arquivo typescript
// e faça a tipagem desses parâmetros. Utilize o type para tipar a saída da função.

// Resposta: As entradas é um array de números e a saída é um objeto com as propriedades
// maior (maior número), menor (menor número) e média (soma dos números dividido pela quantidade de números).

// Dica: Lembre-se da variável de tipo do typescript, que é uma descrição estrutural do 
// comportamento de um objeto. Ou seja, o type define as propriedades e tipos que o objeto deve ter. 

// ### Parte 2

// Quais outras variáveis compõem a implementação dessa função? Tipe todas elas.

// Resposta: const numerosOrdenados, let soma, const estatisticas.

// Dica: Procure por todas as declarações, normalmente tipamos as variáveis criadas!

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros:number[]):Estatisticas {

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([40, 28, 47, 48, 46, 15, 10, 4, 1, 30, 39, 18, 5, 2, 70, 88, 100]))