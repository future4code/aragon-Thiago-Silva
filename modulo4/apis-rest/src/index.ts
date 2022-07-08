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