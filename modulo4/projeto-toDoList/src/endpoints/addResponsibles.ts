import { Request, Response } from "express";
import connection from "../database/connection";

export const addResponsibles = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const taskId = req.params.taskId;

    const userId = req.body

    const [tasks] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE taskId = ${taskId};
    `);

    const checkTaskId = tasks[0];

    if (checkTaskId === undefined) {
      errorCode = 404;
      throw new Error("taskId doesn't exist.");
    }

    const [userIds] = await connection.raw(`
    SELECT * FROM Responsibles
    WHERE taskId = ${userId};
    `);

    const checkUserId = userIds[0];

    if (checkUserId === undefined) {
      errorCode = 404;
      throw new Error("userId doesn't exist.");
    }

    if (checkUserId && userIds.length > 1) {
        errorCode = 404;
        throw new Error("User can be registered only once for each selected task.");
      }

      const [addUser] = await connection.raw(`
    SELECT * FROM Responsibles
    WHERE taskId = ${userId};
    `);

    const newResponsible = {
        userId: userId,
        taskId: taskId
    }

    await connection.raw(`
    INSERT INTO Responsibles (userId, taskId)
    VALUES ("${userId}", "${taskId}")
    `)

    res.status(200).send({
      message: "Responsibles update successfully.",
    });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
