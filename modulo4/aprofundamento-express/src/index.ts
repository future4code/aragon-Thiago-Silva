import cors from "cors";
import express, { Request, Response } from "express";
import { Tarefa, tarefas } from "./tarefas";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003.");
});

app.get("/ping", (req: Request, res: Response) => {
  try {
    res.send({ mensagem: "Pong!" });
  } catch (error) {
    res.send({ mensagem: error.message });
  }
});

app.get("/tarefas/:userId", (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);

    const resultado = tarefas.filter((tarefa) => {
      return tarefa.userId === userId;
    });

    if (resultado.length === 0) {
      throw new Error("Erro: usuário 'userId' não existe.");
    }

    res.send({ mensagem: "ok", tarefas: resultado });
  } catch (error) {
    res.send({ mensagem: error.message });
  }
});

app.post("/tarefas", (req: Request, res: Response) => {
  try {
    const { userId, title } = req.body;

    if(typeof userId !== "number") {
        throw new Error("Erro: tipo inválido de 'userId', deve ser do formato number.")
    }

    if(typeof title !== "string") {
        throw new Error("Erro: tipo inválido de 'userId', deve ser do formato string.")
    }

    const ultimaTarefa = tarefas[tarefas.length - 1];

    const novaTarefa: Tarefa = {
      userId: userId,
      id: ultimaTarefa.id + 1, //poderia utilizar id: Date.now()
      title: title,
      completed: false,
    };
    tarefas.push(novaTarefa);

    res.send({
      mensagem: "Tarefa criada com sucesso",
      tarefas: novaTarefa,
    });
  } catch (error) {
    res.send({ mensagem: error.message });
  }
});

// exercicio5
app.get("/tarefas", (req: Request, res: Response) => {
  const busca = req.query.busca;

  if (busca !== "true" && busca !== "false") {
    return res.send({
      busca: busca,
      tarefas: tarefas,
    });
  }

  if (busca === "true") {
    const resultado = tarefas.filter((tarefa) => {
      return tarefa.completed === true;
    });

    return res.send({
      tarefas: resultado,
      busca: busca,
    });
  } else {
    const resultado = tarefas.filter((tarefa) => {
      return tarefa.completed === false;
    });

    return res.send({
      tarefas: resultado,
      busca: busca,
    });
  }
});

//exercicio6
app.delete("/tarefas/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const index = tarefas.findIndex((tarefa) => {
    return tarefa.id === id;
  });

  if (index === -1) {
    return res.send({
      mensagem: "tarefa não encontrado",
      id: id,
    });
  }

  tarefas.splice(index, 1);

  res.send({
    mensagem: "tarefa deletado com sucesso",
    tarefas: tarefas,
  });
});

//exercicio7

app.get("/tarefas", (req: Request, res: Response) => {
  const busca = req.query.busca;

  if (busca !== "true" && busca !== "false") {
    return res.send({
      busca: busca,
      tarefas: tarefas,
    });
  }

  if (busca === "true") {
    const resultado = tarefas.filter((tarefa) => {
      return tarefa.completed === true;
    });

    return res.send({
      tarefas: resultado,
      busca: busca,
    });
  } else {
    const resultado = tarefas.filter((tarefa) => {
      return tarefa.completed === false;
    });

    return res.send({
      tarefas: resultado,
      busca: busca,
    });
  }
});
