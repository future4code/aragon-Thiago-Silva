import { Request, Response } from "express";
import connection from "../database/connection";

export const responsibles = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const taskId = req.params.taskId;

    const [tasks] = await connection.raw(`
    SELECT * FROM Responsibles
    WHERE taskId = ${taskId};
    `);

    const checkId = tasks[0];

    if (checkId === undefined) {
      errorCode = 404;
      throw new Error("taskId doesn't exist.");
    }

    const [users] = await connection.raw(`
    SELECT 
    Users.id ,
    Users.nickname
    FROM Users
    JOIN Responsibles
    ON Responsibles.userId = Users.id
    WHERE taskId = ${taskId};
    `);

    if (users[0] === undefined) {
      res.status(200).send({ message: "task has no responsible." });
    }

    res.status(200).send({
      message: "Data successfully found.",
      users: users,
    });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
