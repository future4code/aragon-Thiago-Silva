```
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  if (quantidade<12) {
    let precoFinal = quantidade * 1.30
  } else if (quantidade>=12) {
    precoFinal = quantidade * 1.00
  }
  return precoFinal
}
```