/* Algoritmo
1- Criar uma lista de cadastros;
2- Ao chamar a função, enviamos os argumentos e-mail e senha como strings;
3- Dentro da função, iteramos a lista de cadastro
3.1- a cada iteração, verificamos se o e-mail recebido via argumento é igual ao da iteração
3.1.1- se os e-mails forem iguais, verificamos se as senhas também são
3.1.1.1- se as senhas forem iguais, retoramos a frase "login bem-sucedido"
4- Dentro da função, retornamos a frase "e-mail ou senha inválidos"
*/

const contas = [
  {
    email: "astrodev@labenu.com",
    senha: "abc123",
  },
  {
    email: "bananinha@gmail.com",
    senha: "bananinha",
  },
];

const verificaLogin = (email, senha) => {
  if (email.includes("@")) {
    if (senha.length >= 6) {
      
      let validaEmail = contas.findIndex(conta => conta.email === email);
      let validaSenha = contas.findIndex(conta => conta.senha === senha);

      if (validaEmail === validaSenha) {
        return console.log("Login realizado com sucesso!");
      } else {
        return console.log("Email ou senha incorretos.");
      }

    } else {
      return console.log("Senha deve possuir no mínimo 6 caracteres");
    }
    
  } else {
    return console.log("Email inválido");
  }
}

verificaLogin("astrodev.labenu.com", "abc123");
verificaLogin("astrodev@labenu.com", "abc123"); 
verificaLogin("astrodev@labenu.com", "abc1");
verificaLogin("bananinha@gmail.com", "banana");
verificaLogin("bananinha@gmail.com", "bananinha");
