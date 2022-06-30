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
  
  function verificaLogin(email, senha) {
    if (email.includes("@")) {
      if (senha.length >= 6) {
        
        for (let conta of contas) {
            const validaEmail = conta.email === email
            return validaEmail
        }
        for (let conta of contas) {
            const validaSenha = conta.senha === senha
            return validaSenha
        }        
  
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