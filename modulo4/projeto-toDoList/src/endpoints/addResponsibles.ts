import { Request, Response } from "express";
import connection from "../database/connection";

export const addResponsibles = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const taskId = req.params.taskId as string;

    const userId = req.body.userId as string;

    const [tasks] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${taskId};
    `);

    const checkTaskId = tasks[0];

    if (checkTaskId === undefined) {
      errorCode = 404;
      throw new Error("taskId doesn't exist.");
    }

    const [userIds] = await connection.raw(`
    SELECT * FROM Users
    WHERE id = ${userId};
    `);

    const checkUserId = userIds[0];

    if (checkUserId === undefined) {
      errorCode = 404;
      throw new Error("userId doesn't exist.");
    }

    const [taskResponsible] = await connection.raw(`
    SELECT * FROM Responsibles
    WHERE taskId = ${taskId};
    `);

    const checkTaskResponsible = taskResponsible[0]

    if(checkTaskResponsible[0]) {
      errorCode = 400
      throw new Error("There is already a responsible to the task. Choose another one (task).")
    }

    await connection.raw(`
    INSERT INTO Responsibles (userId, taskId)
    VALUES ("${userId}", "${taskId}")
    `);

    res.status(200).send({
      message: "Responsibles updated successfully.",
    });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
