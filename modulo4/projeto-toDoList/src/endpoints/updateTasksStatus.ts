import { Request, Response } from "express";
import connection from "../database/connection";

export const updateTasksStatus = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const taskId = req.params.taskId as string;
    const status = req.body.status;

    const [tasks] = await connection.raw(`
      SELECT * FROM Tasks
      WHERE id = "${taskId}";
      `);

    const checkId = tasks[0];

    if (checkId === undefined) {
      errorCode = 404;
      throw new Error("taskId doesn't exist.");
    }

    if (!status) {
      errorCode = 404;
      throw new Error("Stats must exist.");
    }

    // if (status !== "TO_DO" || status !== "DOING" || status !== "DONE") {
    //   errorCode = 422;
    //   throw new Error("Error: Status must be TO_DO, DOING or DONE.");
    // }

    await connection.raw(`
        UPDATE Tasks
        SET status = "${status}"
        WHERE id = "${taskId}";
      `);

    res.status(200).send({ message: "Task status updated successfully" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
