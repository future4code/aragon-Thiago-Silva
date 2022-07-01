// ## Exercício 1

// Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 

// - Entrada esperada →  Várias possibilidades
// - Saída esperada → Nenhuma

type QualquerTipo = string | number | boolean | undefined

function verificaTypeof(input:QualquerTipo):void {
    console.log(typeof input)
}

verificaTypeof("Thiago")
verificaTypeof(true)
verificaTypeof(37)