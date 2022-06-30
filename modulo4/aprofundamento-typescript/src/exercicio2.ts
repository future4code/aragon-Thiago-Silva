// ## Exercício 2

// Crie 1 objeto que representa a sua pessoa e possua 3 propriedades:

// - nome, de tipo string;
// - idade, de tipo number;
// - corFavorita, enum das cores do arco-íris.

enum CorFavorita {
    VERMELHA = "vermelha",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azul-escuro",
    VIOLETA = "violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita
}

const thiago:Pessoa = {
    nome: "Thiago",
    idade: 37,
    corFavorita: CorFavorita.AZUL
}

console.log(thiago)