// ## Exercício 5

// Considerando o array de usuários a seguir, crie uma função que receba este array como parâmetro
//  e retorne uma lista com apenas os emails dos usuários de role “admin”.

// - Array de usuários:

// ```jsx
// [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},
// 	{name: "Carina", email: "carina@email.com", role: "admin"}
// ]
// ```

// - Entrada esperada → type[ ]
// - Saída esperada → string[ ]
// - Exemplo de saída:

// ```jsx
// [	"ademir@email.com", "carina@email.com" ]
// ```

// Dicas:

// - Crie um type para os usuários.
// - Use os métodos .filter() e .map()

type Usuario = {
  name: string;
  email: string;
  role: string;
};

const usuarios: Usuario[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

function retornaListaDeEmails(usuarios: Usuario[]): string[] {
   const listaDeEmails = usuarios.filter((usuario) => {
      return usuario.role === "admin";
    }).map((usuario) => {
      return usuario.email;
    });

    return listaDeEmails
}

console.log(retornaListaDeEmails(usuarios));
