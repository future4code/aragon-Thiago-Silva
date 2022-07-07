import express, { Request, Response } from "express";
import cors from "cors";
import { frutas, Fruta } from "./data";

let dados = [...frutas];

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

//Exercicio1
app.get("/ping", (req: Request, res: Response) => {
  try {
    res.send({ mensagem: "Pong!" });
  } catch (error) {
    res.send({ mensagem: error.message });
  }
});

//exercicio3
// Crie um endpoint que retorna todos os produtos existentes na lista.

// Entradas → Nenhuma

// Validação de Input → Nenhuma

// Regras de negócio → Nenhuma

// Saídas possíveis:

// - Sucesso: mensagem de sucesso e a lista de produtos.
// - Erro: mensagem de erro.

app.get("/dados/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const resultado = dados.filter((dado) => {
      return dado.id === id;
    });

    if (resultado.length === 0) {
      res.statusCode = 404;
      throw new Error("Erro: usuário 'id' não existe.");
    }

    res.status(200).send({ mensagem: "ok", dados: resultado });
  } catch (error) {
    res.send({ mensagem: error.message });
  }
});

//## Exercício 4

// Construa um endpoint de criação de afazer.
// A resposta deve retornar uma mensagem de
// sucesso e o array de afazeres atualizado.

// Entradas → Dados de cadastro de um novo
// afazer (apenas o id do usuário e title).

// Saídas → Mensagem de sucesso da operação
// e lista de afazeres atualizada.

// Observação:  A identificação do novo afazer
// dever ser criado pelo fluxo da requisição
// (não envie como entrada). O status inicial
// de um afazer deve iniciar como false.

app.post("/dados", (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (typeof id !== "string") {
      res.statusCode = 422;
      throw new Error("Erro: tipo inválido de 'id', deve ser uma string.");
    }

    const dadosNovos: Fruta = {
      id: "fruta4",
      name: "uva",
      price: 10,
    };

    dados.push(dadosNovos);

    res.status(201).send({ mensagem: "ok", dados: dados });
  } catch (error) {
    res.send({ mensagem: error.message });
  }
});

//exercicio5

// ## Exercício 5

// Crie um endpoint que edita o preço de um
//determinado produto **e retorna o
//produto atualizado.

// Entradas → id e novo preço do produto.

// Validação de Input:

// - id e e price devem existir.
// - price deve ser do tipo number.

// Regras de negócio:

// - price deve ser um valor maior que 0.
// - se a id do produto não existir, disparar erro com mensagem adequada

// Saídas possíveis:

// - Sucesso: mensagem de sucesso e o produto atualizado.
// - Erro: mensagem de erro.

app.post("/dados/:id", (req: Request, res: Response) => {
  // Entradas de informações do novo preco, com desestruturação.
  const { id, name } = req.body;

  try {
  } catch (error) {}
  // Condicional que verifica se id e/ou name foram enviados pelo client.
  if (!id || !name) {
    // Encerramento da requisição pelo return.
    return res.status(400).send({
      message: "É preciso passar os parâmetros de id e name.",
    });
  }

  // Variável novaFruta -> Objeto que representa o novo dado.
  const novaFruta: Fruta = {
    id: "fruta4",
    name: "uva",
    price: 10,
  };

  // Atualização da lista de frutas.
  dados.push(novaFruta);

  // Resposta em formato de objeto, com as propriedades message e list.
  res.status(201).send({
    message: "Criado com sucesso!",
    todos: dados,
  });
});

//## Exercício 6
// Construa um endpoint que deleta
//um determinado produto.
// Entradas → id do produto.
// Validação de Input:
// - id deve existir.
// Regras de negócio:
// - se a id do produto não existir,
//disparar erro com mensagem adequada
// Saídas possíveis:
// - Sucesso: mensagem de sucesso.
// - Erro: mensagem de erro.

app.delete("/dados/:id", (req: Request, res: Response) => {
  const idDados = req.params.id;

  // Condicional que verifica se a informação fornecida pelo client é válida (um número em formato string).
  if (!idDados) {
    // Encerramento da requisição pelo return.
    return res.status(400).send({
      message: "Id do afazer inválido",
    });
  }

  // Variável novosDados -> Filtra dados, removendo o produto escolhido.
  const novosDados = dados.filter((dado) => {
    return dado.id !== idDados;
  });

  // Atualiza dados para utilização em outros endpoints.
  dados = novosDados;

  res.status(200).send({
    message: "Afazer deletado com sucesso!",
    dados: dados,
  });
});
