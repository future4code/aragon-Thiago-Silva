// ## Exercício 4

// Considere que você esteja implementando uma rede social composta por posts de usuários, 
//onde cada um dos posts possui um autor e um texto. A seguir, temos um exemplo de array de posts em JS:

// ### Parte 1

// - Crie um type para representar um post;
// - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.

// ### Parte 2

// Analise a função a seguir chamada buscarPostsPorAutor(), escrita em JS:

// Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo .ts do array 
//de posts e faça a tipagem necessária.

// Resposta: As entradas são o Array de posts e uma string com o nome do autor;
// As s

type Post = {
    autor: string,
    texto: string
}

const posts:Post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

function buscarPostsPorAutor(posts:Post[], autorInformado:string):Post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  console.log(buscarPostsPorAutor(posts,"Lord Voldemort"))