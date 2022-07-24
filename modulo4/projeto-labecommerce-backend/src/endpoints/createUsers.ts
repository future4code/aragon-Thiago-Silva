import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";
import { User } from "../models/User";

export const createUsers = async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      errorCode = 422;
      throw new Error("'Email' and 'password' must exist.");
    }

    if (typeof email !== "string" || typeof password !== "string") {
      errorCode = 422;
      throw new Error("'Email' and 'password' must be a string.");
    }

    if (!email.includes("@")) {
      errorCode = 422;
      throw new Error("Error: invalid 'e-mail' format.");
    }

    if (password.length < 5) {
      errorCode = 422;
      throw new Error("Error: 'password' must have more then 5 characters.");
    }

    const setNewId = await connection(TABLE_USERS)
      .select()

    const lastUser = setNewId [setNewId.length -1]
    const lastUserId = Number(lastUser.id)

    const newUser: User = {
      id: (lastUserId + 1).toString(),
      email: email,
      password: password,
    };

    await connection(TABLE_USERS)
    .insert({
      id: newUser.id,
      email: newUser.email,
      password: newUser.password,
    });

    res
      .status(200)
      .send({ users: newUser, message: "User created successfully." });
  } catch (error) {
    res
    .status(errorCode)
    .send({ message: error.message });
  }
};
