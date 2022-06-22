function calculaTabuada(numero) {
    const tabuada = []
  for (let i = 0; i <= 10; i++) {
    if (typeof numero === "number") {
      if (numero > 0 && numero <= 10) {
        const resultadoTabuada = `${numero} x ${i} = ${numero * i}`;
        tabuada.push(resultadoTabuada)
        return tabuada;
      } else {
        return "Erro. Parâmetro inválido: o número deve ter valor entre 1 e 10.";
      }
    } else {
      return "Erro. Parâmetro inválido: o valor deve ser um número.";
    }
  }
}

console.log(calculaTabuada("thiago"));
console.log(calculaTabuada(7));
console.log(calculaTabuada(15));