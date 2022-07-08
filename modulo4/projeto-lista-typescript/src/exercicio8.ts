// ## Exercício 8

// Escreva uma função que recebe do usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”,
//  e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar
// um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada
//  segundo os seguintes critérios:

// Critério 1) Para pessoas com menos de 25 anos, ou exatamente 25 anos, deve ser renovada de 5 em 5 anos
//  (se for exatamente 5 anos, deve ser renovada).

// Critério 2) Para pessoas entre 26 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos
//  (se for exatamente 10 anos, deve ser renovada).

// Critério 3) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

// - Entrada esperada → string, string
// - Saída esperada → boolean

// Dicas:

// - Você precisará da data atual para fazer as operações e uma opção é utilizar new Date() para
//  obter a data atual.
// - Para fazer as operações necessárias, você pode converter as datas para timestamp usando o
// método .getTime() na data.

function checaRenovacaoRG(anoNasc: string, dataEmissao: string): string {
  const timeElapsed = Date.now();
  //   console.log(timeElapsed)
  const today: any = new Date(timeElapsed);
  //   console.log(today)
  const dataAtual: any = today.toLocaleDateString();
  //   console.log(dataAtual)
  const dataAtualSplitted: any = dataAtual.split("/");
  const anoAtual: number = dataAtualSplitted[2];
  //   console.log(`data atual: ${anoAtual}`);

  const anoNascimentoSplitted: any = anoNasc.split("/");
  const anoNascimento: number = anoNascimentoSplitted[2];
  //   console.log(`Nasc: ${anoNascimento}`)

  const dataEmissaoSplitted: any = dataEmissao.split("/");
  const anoEmissao: number = dataEmissaoSplitted[2];
  //   console.log(`Emissao: ${anoEmissao}`)

  const idade = anoAtual - anoNascimento;
  //   console.log(`idade: ${idade}`)
  const tempoCarteira = anoAtual - anoEmissao;
  //   console.log(`tempoCarteira: ${tempoCarteira}`)

  const cond1: boolean = idade <= 25 && tempoCarteira >= 5;
  const cond2: boolean = idade <= 50 && tempoCarteira >= 10;
  const cond3: boolean = idade > 50 && tempoCarteira >= 15;

  if (cond3) {
    return `Idade: ${idade}, Tempo de carteira: ${tempoCarteira}. Doc vencido/Precisa renovar`;
  } else if (cond2) {
    return `Idade: ${idade}, Tempo de carteira: ${tempoCarteira}. Doc vencido/Precisa renovar`;
  } else if (cond1) {
    return `Idade: ${idade}, Tempo de carteira: ${tempoCarteira}. Doc vencido/Precisa renovar`;
  } else {
    return `Idade: ${idade}, Tempo de carteira: ${tempoCarteira}. Doc em prazo de validade/Não precisa renovar`;
  }
}

console.log(checaRenovacaoRG("01/07/1997", "25/10/2017"));
console.log(checaRenovacaoRG("01/07/1997", "25/10/2022"));
console.log(checaRenovacaoRG("01/07/1984", "25/10/2012"));
console.log(checaRenovacaoRG("01/07/1984", "25/10/2020"));
console.log(checaRenovacaoRG("01/07/1964", "25/10/2007"));
console.log(checaRenovacaoRG("01/07/1964", "25/10/2008"));
