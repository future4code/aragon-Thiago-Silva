import express, { Request, Response } from "express";
import cors from "cors";
import { User, users, USER_ROLE } from "./data";

const app = express();

app.use(cors());

app.use(express.json());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003.");
});


app.get("/test", (req: Request, res: Response) => {
  res.send({ message: "API funcionando corretamente." });
});

// Exercício 2

// Crie um endpoint de busca de usuários da lista. Este endpoint deve permitir a busca de usuários 
// pela propriedade ‘role’. Caso nenhum valor de ‘role’ seja definido, retornamos a lista de todos os usuários.

// Entradas → ‘role’ opcional valendo ”NORMAL” ou “ADMIN”

// Validação de Input → se o ‘role’ foi recebido deve ser “NORMAL” ou “ADMIN”

// Regras de Negócios → Nenhuma

// Saídas → Erro de requisição 400, lista de usuários selecionados ou toda a lista

// Dicas:

// - ‘role’ é uma query opcional. Caso seja fornecida verifique se ela vale “NORMAL” ou “ADMIN”.

app.get("/user", (req: Request, res: Response) => {
  const { role } = req.query;

  try {
    if (role !== "ADMIN" && role !== "NORMAL") {
      return res.send({
        role: role,
        user: users,
      });
    }
    if (role === "ADMIN") {
      const result = users.filter((user) => {
        return user.role === "ADMIN";
      });
      return res.send({
        users: result,
        role: role,
      });
    } else {
      const result = users.filter((user) => {
        return user.role === "NORMAL";
      });
      return res.send({
        users: result,
        role: role,
      });
    }
  } catch (error) {
    res.send({ message: "Erro de requisição (400)" });
  }
});

//Exercício 3

// Desenvolva um endpoint que cria um novo usuário e retorna a lista de usuários atualizada.
//  A id do usuário deve ser gerada automaticamente pela API.

// Entradas → name, email, age e role do usuário.

// Validação de Input:

// - name, email, age e role devem existir.
// - name e email devem ser do tipo string. age deve ser do tipo number, enquanto role só pode
//  assumir dois valores: “ADMIN” ou “NORMAL”.

// Regras de negócio → O e-mail de um usuário deve ser único.

// Saídas possíveis:

// - Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situação.
// - Para sucesso, deve retornar o status de criação 201, mensagem de sucesso e a lista de usuários atualizada.

// Dicas:

// - Para não se preocupar em contar o tamanho da lista ao criar uma id automatizada, utilize o Date.now()
// - Utilize o método .push() para atualizar a lista de usuários.

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {

        const { name, email, age, role } = req.body

        if (!name || !email || !age || !role) {
            errorCode = 422
            throw new Error("Product name,email,age or role is required");
        }


        if (typeof name !== "string" || typeof email !== "string" || typeof age !== "number") {
            errorCode = 422
            throw new Error("name and email must be a string,age must be a number or role must be ADMIN or NORMAL");

        }

        const checkEmail: any = users.findIndex(user => user.email === email)
        if (checkEmail < 0) {
            const novoUsuario: User = {
                id: Date.now(),
                name: name,
                email: email,
                age: age,
                role: role
            }
            users.push(novoUsuario)

            res.status(201).send({
                message: "User created successfully!",
                users: users
            })


        } else {
            errorCode = 409
            throw new Error("Email already exists");
        }


    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

//exercicio4

// Crie um endpoint que edita o e-mail de um determinado usuário ****e retorna o usuário atualizado.

// Entradas → id do usuário a ser editado e novo e-mail.

// Validação de Input:

// - id e e email devem existir.
// - email deve ser do tipo string e o valor de id deve ser um número válido.

// Regras de negócio:

// - Se o id informado for válido, mas não existir em um dos usuários, um erro deverá ser exibido.
// - Caso o e-mail enviado já exista para outro usuário cadastrado, um erro deverá ser exibido.

// Saídas possíveis:

// - Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situação.
// - Para sucesso teremos a mensagem de sucesso e o usuário atualizado.


app.put("/users/:id", (req: Request, res: Response) => {

    let errorCode: number = 400;

    try {
        const id = Number(req.params.id);
        const { email } = req.body;

        if (!id) {
            errorCode = 422;
            throw new Error("Id is required.");
        };

        if (!email) {
            errorCode = 422;
            throw new Error("Email is required.");
        };

        if (typeof email !== "string") {
            errorCode = 422;
            throw new Error("Email must be a string.");
        };

        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex < 0) {
            errorCode = 409;
            throw new Error("Id doesn´t match a valid user.");
        }
        const emailIndex = users.findIndex(user => user.email === email);

        if (emailIndex > 0) {
            errorCode = 409;
            throw new Error("Email already exists.");
        }

        users[userIndex].email = email;

        res.status(200).send({
            message: "user has been modified successfully!",
            user: users[userIndex]
        });
    } catch (error: any) {
        res.send({ mensagem: error.message })
    }
});

//exercicio5

// Construa um endpoint que deleta um determinado usuário.

// Entradas → id do usuário a ser deletado.

// Validação de Input:

// - id deve existir e ser um número.

// Regras de negócio:

// - Se o id fornecido não corresponder a um usuário existente, um erro deverá ser exibido.

// Saídas possíveis:

// - Cada erro deve retornar o seu respectivo status code e uma mensagem descrevendo a situação.
// - Para sucesso teremos somente a mensagem de sucesso.

app.delete("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;


    try {
        const id = Number(req.params.id)
      
        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex < 0) {
            errorCode = 409;
            throw new Error("Id doesn´t match a valid user.");
        }

        if (typeof id !== "number") {
            errorCode = 422;
            throw new Error("Id must be a number.");
        };

        users.splice(userIndex,1)

        res.status(200).send({
            message: "User has been removed successfully!"
        })
    } catch (error) {
        res.status(errorCode).send(error.message);
    }

})