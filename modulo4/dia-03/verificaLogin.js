/* Algoritmo
1- Criar uma lista de cadastros;
2- Ao chamar a função, enviamos os argumentos e-mail e senha como strings;
3- Dentro da função, iteramos a lista de cadastro
3.1- a cada iteração, verificamos se o e-mail recebido via argumento é igual ao da iteração
3.1.1- se os e-mails forem iguais, verificamos se as senhas também são
3.1.1.1- se as senhas forem iguais, retornamos a frase "login bem-sucedido"
4- Dentro da função, retornamos a frase "e-mail ou senha inválidos"
*/

const contas = [
	{
	  email: "astrodev@labenu.com",
	  password: "abc123",
	},
	{
	  email: "bananinha@gmail.com",
	  password: "bananinha",
	},
  ];
  
  const validaLogin = (email, password) => {
	if (email.includes("@")) {
	  if (password.length >= 6) {
		
		let checaEmail = contas.findIndex(conta => conta.email === email)
		let checaPassword = contas.findIndex(conta => conta.password === password)
  
		if (checaEmail === checaPassword) {
		  return "Login realizado com sucesso!"
		} else {
		  return "Email ou senha incorretos."
		}
  
	  } else {
		return "Senha deve possuir no mínimo 6 caracteres"
	  }
	  
	} else {
	  return "Email inválido"
	}
  }
  
  console.log(validaLogin("astrodev@labenu.com", "abc123"))
  console.log(validaLogin("bananinha@gmail.com", "bananinha"))
  console.log(validaLogin("astrodev.labenu.com", "abc123"))
  console.log(validaLogin("astrodev@labenu.com", "abc12"))
  console.log(validaLogin("bananinha@gmail.com", "banana"))
  console.log(validaLogin("bananinha@gmail.com", "banan"))
  console.log(validaLogin("pamela@gmail.com", "123456"))