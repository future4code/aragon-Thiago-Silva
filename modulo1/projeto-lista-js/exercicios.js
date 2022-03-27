// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
    const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  altura = prompt("Digite a altura do retângulo")
  largura = prompt("Digite a largura do retângulo")
  areaRetangulo = altura * largura
  return console.log(areaRetangulo)
}

calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  anoAtual = prompt("Digite o ano atual")
  anoNascimento = prompt("Digite seu ano de nascimento")
  calculoIdade = anoAtual - anoNascimento
  return console.log(calculoIdade)
}

imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  peso = Number(prompt("Digite seu peso em kg"))
  altura = Number(prompt("Digite sua altura em metros"))
  imc = peso / (altura * altura)
  return imc 
}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Digite seu nome")
  idade = prompt("Digite sua idade")
  eMail = prompt("Digite seu e-mail")
  unirFrase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${eMail}.`
  return console.log(unirFrase)
}

imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  primeiraCor = prompt("Digite sua primeira cor favorita")
  segundaCor = prompt("Digite sua segunda cor favorita")
  terceiraCor = prompt("Digite sua terceira cor favorita")
  return console.log([primeiraCor,segundaCor,terceiraCor])
}

imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

retornaStringEmMaiuscula("")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  pontoEquilibrio = custo / valorIngresso
  return pontoEquilibrio
}
calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  compararTamanho = string1.length == string2.length
  return compararTamanho
}

checaStringsMesmoTamanho("")

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array.shift()
}

retornaPrimeiroElemento([])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.slice(-1)[0]
}

// EXERCÍCIO 11  
function trocaPrimeiroEUltimo(array) {
  let first = array[0]
  let last = array[array.length - 1]
  array.splice(0, 1)
  array.splice(-1,1)

  array = [last,...array,first]
    return array
  }
  trocaPrimeiroEUltimo()

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  compararStrings = string1.toUpperCase() === string2.toUpperCase()
  return compararStrings
}
checaIgualdadeDesconsiderandoCase()

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual,anoNascimento,anoEmissaoRG) {
  anoAtual = Number(prompt("Qual o ano atual?"))
  anoNascimento = Number(prompt("Qual o seu ano de nascimento?"))
  anoEmissaoRG = Number(prompt("Qual é o ano de emissão do seu RG?"))
  
  let idade = anoAtual - anoNascimento
  let tempoEmissaoRG = anoAtual - anoEmissaoRG
  
    let condicaoAteVinteAnos = idade <= 20
    condicaoAteVinteAnos = tempoEmissaoRG >= 5 
    
    let condicaoDeVinteACinquentaAnos = 21 < idade <= 50
    condicaoDeVinteACinquentaAnos = tempoEmissaoRG >= 10

    let condicaoAcimaCinquentaAnos = idade > 50
    condicaoAcimaCinquentaAnos = tempoEmissaoRG >= 15

    return condicaoAteVinteAnos == condicaoDeVinteACinquentaAnos == condicaoAcimaCinquentaAnos
}
    
checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}