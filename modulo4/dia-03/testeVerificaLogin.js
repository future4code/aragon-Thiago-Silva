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

const login = (email, password) => {
  if (email.includes("@")) {
    if (password.length >= 6) {
      for (let i = 0; i <= contas.length; i++) {
        const validacaoEmail = contas[i].email === email
        const validacaoPassword = contas[i].password === password
        const autoriza = validacaoEmail && validacaoPassword

        if (autoriza) {
          return "login bem sucedido"
        } else {
          return "email ou senha incorretos"
        }
      }
    } else {
      return "senha deve possuir mais de 6 caracteres"
    }
  } else {
    return "email inválido"
  }
};

console.log(login("astrodev@labenu.com", "abc123"));
console.log(login("bananinha@gmail.com", "bananinha"));
console.log(login("astrodev.labenu.com", "abc123"));
console.log(login("astrodev@labenu.com", "abc12"));
console.log(login("bananinha@gmail.com", "banana"));
console.log(login("bananinha@gmail.com", "banan"));
console.log(login("pamela@gmail.com", "123456"));
