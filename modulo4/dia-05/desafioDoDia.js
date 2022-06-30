// 1. criar o objeto de resposta
// 2. criar variável e atribuir para ela uma lista com todas as chaves
// 3. iterar a lista de chaves
// 3.1 a cada iteração, acessar o valor da chave
// 3.2 verificar se o valor é undefined
// 3.2.1 se SIM, editar a propriedade booleana de erro do objeto de resposta para true
// 3.2.2 se NÃO, editar a propriedade de lista de erros do objeto de resposta adicionando a chave iterada
// 3.2.3 se não, não fazer nada
// 4. retornar o objeto de resposta

const validaObjeto = (input) => {
  const resposta = {
    isErro: false,
    errors: []
  }

  const chaves = Object.keys(input)

  for (let chave of chaves) {
    if (input[chave] === undefined) {
      resposta.isErro = true
      resposta.errors.push(chave)
    }
  }

  return resposta
}

console.log(validaObjeto({ id: 1, nome: undefined }))
console.log(validaObjeto({ id: 1, nome: "thiago" }))
console.log(validaObjeto({ id: undefined, nome: undefined, email: undefined }))
console.log(validaObjeto({ id: "", nome: ""  }))