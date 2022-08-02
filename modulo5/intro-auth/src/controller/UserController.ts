import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {
  public signup = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
      const nickname = req.body.nickname;
      const email = req.body.email;
      const password = req.body.password;

      if (!nickname || !email || !password) {
        errorCode = 422;
        throw new Error("Missing Paremeters.");
      }

      if (
        typeof nickname !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string"
      ) {
        errorCode = 422;
        throw new Error("Nickname, email and password must be a string.");
      }

      if (nickname.length < 3 || password.length < 6) {
        errorCode = 422;
        throw new Error(
          "Nickname must be longer then 3 characters and password mut be longer then 6 characters."
        );
      }

      const userDatabase = new UserDatabase();
      const checkEmail = await userDatabase.findByEmail(email);

      if (checkEmail) {
        errorCode = 400;
        throw new Error("Email already exists.");
      }

      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      const user = new User(id, nickname, email, password);

      await userDatabase.createUser(user);

      const payload: ITokenPayload = {
        id: user.getId(),
      };

      const authenticator = new Authenticator();
      const token = authenticator.generateToken(payload);

      res.status(201).send({
        message: "Registered successfully.",
        token,
      });
    } catch (error) {
      if (
        typeof error.message === "string" &&
        error.message.includes("Duplicate entry.")
      ) {
        return res.status(400).send("Email already taken.");
      }
      res.status(errorCode).send({ message: error.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
      const email = req.body.email;
      const password = req.body.password;

      if (!email || !password) {
        errorCode = 401;
        throw new Error("Email or password missing.");
      }

      if (typeof email !== "string" || typeof password !== "string") {
        errorCode = 422;
        throw new Error("Email and password must be a string.");
      }

      if (password.length < 6) {
        errorCode = 422;
        throw new Error("Password must have at least 6 characters.");
      }

      if (!email.includes("@")) {
        errorCode = 400;
        throw new Error("Email must have @.");
      }

      const userDatabase = new UserDatabase();
      const userDB = await userDatabase.findByEmail(email);

      if (!userDB) {
        errorCode = 401;
        throw new Error("Email not asign.");
      }

      const user = new User(
        userDB.id,
        userDB.nickname,
        userDB.email,
        userDB.password
      );

      if (user.getPassword() !== password) {
        errorCode = 401;
        throw new Error("Password invalid.");
      }

      const payload: ITokenPayload = {
        id: user.getId(),
      };

      if (!payload) {
        errorCode = 404;
        throw new Error("User not found.");
      }

      const authenticator = new Authenticator();
      const token = authenticator.generateToken(payload);

      res.status(200).send({
        message: "Successfully logged.",
        token,
      });
    } catch (error) {
      res.status(200).send({ message: error.message });
    }
  };

  public getAllUsers = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
      const token = req.headers.authorization;
      const search = req.query.q as string;

      const authenticator = new Authenticator();
      const payload = authenticator.getTokenPayload(token);

      if (search) {
        const userDatabase = new UserDatabase();
        const userDB = await userDatabase.getUserByNickname(search);
        res.status(200).send({ user: userDB });
      }
      if (!payload) {
        errorCode = 401;
        throw new Error("Token missing or invalid.");
      }

      const userDatabase = new UserDatabase();
      const usersDB = await userDatabase.getAllUsers();

      const users = usersDB.map((user) => {
        return new User(user.id, user.nickname, user.email, user.password);
      });

      res.status(200).send({ users });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  };

  public editUser = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
      const { nickname, email, password } = req.body;
      const token = req.headers.authorization;

      const authenticator = new Authenticator();
      const payload = authenticator.getTokenPayload(token);

      const userDatabase = new UserDatabase();
      const userDB = await userDatabase.editUser(
        payload.id,
        nickname,
        email,
        password
      );

      if (typeof nickname !== "string" || nickname.length < 3) {
        errorCode;
        throw new Error("Nickname must be a string greater then 3 characters.");
      }

      if (typeof password !== "string" || password.length < 6) {
        errorCode;
        throw new Error("Password must be a string greater then 6 characters.");
      }

      if (typeof email !== "string" || !email.includes("@")) {
        errorCode = 400;
        throw new Error("Email must have @ and must be a string.");
      }

      const checkEmail = await userDatabase.findByEmail(email);

      if (checkEmail) {
        errorCode = 400;
        throw new Error("Email already exists.");
      }

      res.status(200).send({
        message: "Updated successfully!",
        user: userDB,
      });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
      const id = req.body.id;
      const token = req.headers.authorization;

      if (!token) {
        errorCode = 400;
        throw new Error("Required login.");
      }

      const authenticator = new Authenticator();
      const payload = authenticator.getTokenPayload(token);

      if (!payload) {
        errorCode = 400;
        throw new Error("Token invalid");
      }

      if (payload.id === id) {
        errorCode = 400;
        throw new Error("You can't delete yourself.");
      }

      const userDatabase = new UserDatabase();
      const userDB = await userDatabase.deleteUser(id);

      res.status(200).send({
        message: "Deleted successfully!",
        user: userDB,
      });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  };
}
