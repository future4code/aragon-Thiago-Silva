import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { Funcionario } from "./type";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

// Teste de API
app.get("/teste", async (req: Request, res: Response) => {
  res.status(200).send({ mensagem: "API funcionando corretamente."})
})

// Exercício 1 - GET Usuários (Tabela Funcionários)

app.get("/funcionarios", async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const busca = req.query.busca as string;

    if (busca) {
      const [resultado] = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE LOWER(nome) LIKE "%${busca.toLowerCase()}%";
      `);

      return res.status(200).send({ funcionarios: resultado });
    }

    const [resultado] = await connection.raw(`
    SELECT * FROM Funcionarios;
    `);

    res.status(200).send({ funcionarios: resultado });
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message });
  }
});

// Endpoint - Get Usuário por id (extra)

app.get("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const id = Number(req.params.id);

    const [funcionario] = await connection.raw(`
    SELECT * FROM Funcionarios
    WHERE id = ${id}
    `);
    res.status(200).send({ funcionarios: funcionario });
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message });
  }
});

// Exercício 2 - POST Novo usuário

app.post("/funcionarios", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { nome, email } = req.body;

    if (!nome || !email) {
      errorCode = 422;
      throw new Error("Parâmetros faltando.");
    }

    if (typeof nome !== "string" || typeof email !== "string") {
      errorCode = 422;
      throw new Error("Nome e email devem ser do tipo string.");
    }

    if (!email.includes("@")) {
      errorCode = 422;
      throw new Error("Email deve possuir @.");
    }

    //   const checkEmail: any = () => {
    //   const emailRegex
    //   const resultado: any  = email.match(emailRegex)
    //   if( resultado ) {
    //     errorCode = 422
    //     throw new Error("O email deve ter o formato padrão nome@dominio.com")
    //   }
    // }

    if (nome.length < 4) {
      errorCode = 422;
      throw new Error("Nome não deve possuir menos que 4 caracteres.");
    }

    const [funcionarios] = await connection.raw(`
  SELECT * FROM Funcionarios
  WHERE LOWER(email) = "${email.toLocaleLowerCase()}";
  `);

    const verificaEmail = funcionarios[0];

    if (verificaEmail !== undefined) {
      errorCode = 404;
      throw new Error("Email já está cadastrado.");
    }

    const novoFuncionario: Funcionario = {
      id: Date.now(),
      nome: nome,
      email: email,
    };

    await connection.raw(`
     INSERT INTO Funcionarios (id, nome, email)
     VALUES ("${novoFuncionario.id}", "${novoFuncionario.nome}", "${novoFuncionario.email}");
    `);

    res.status(201).send({
      message: "Funcionário cadastrado com sucesso.",
      funcionarios: novoFuncionario,
    });
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message });
  }
});

// Exercício 3 - Atualizar email do funcionário

app.put("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id;
    const email = req.body.email;

    if (!email) {
      errorCode = 422;
      throw new Error("Email deve existir.");
    }

    if (typeof email !== "string") {
      errorCode = 422;
      throw new Error("Email deve ser do tipo string.");
    }

    if (!email.includes("@")) {
      errorCode = 422;
      throw new Error("Email deve possuir @.");
    }

    const [ ids ] = await connection.raw(`
  SELECT * FROM Funcionarios
  WHERE id LIKE "%${id}%";
  `);

    const verificaId = ids[0];

    if (verificaId === undefined) {
      errorCode = 404;
      throw new Error("ID não localizada.");
    }

    const [ emails ]= await connection.raw(`
  SELECT * FROM Funcionarios
  WHERE LOWER(email) = "${email.toLocaleLowerCase()}";
  `);

    const verificaEmail = emails[0];

    if (verificaEmail !== undefined) {
      errorCode = 401;
      throw new Error("Email já está cadastrado.");
    }

    await connection.raw(`
    UPDATE Funcionarios
    SET email = "${email}"
    WHERE id = "${id}";
    `);
    res.status(200).send({ mensagem: "Email atualizado com sucesso." , email});
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message });
  }
});

// Exercício 4 - Deletar usuário

app.delete("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id;

    const [funcionarios] = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = ${id};
      `);

    const funcionarioEncontrado = funcionarios[0];

    if (!funcionarioEncontrado) {
      errorCode = 404;
      throw new Error("(id) Funcionário não encontrado.");
    }

    await connection.raw(`
      DELETE FROM Funcionarios
      WHERE id = ${id};
      `);

    res.status(200).send({ mensagem: "Funcionário excluído com sucesso.", funcionarios: funcionarios });
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message });
  }
});
