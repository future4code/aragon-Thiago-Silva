import { Request, Response } from "express";
import connection from "../database/connection";

export const searchTasks = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const search = req.query.search as string;
    if (search) {
      const [result] = await connection.raw(`
            SELECT * FROM Tasks
            WHERE LOWER(title) LIKE "%${search.toLowerCase()}%";
            `);
      return res.status(200).send({ users: result });
    }

    const [result] = await connection.raw(`
          SELECT * FROM Tasks;
          `);

    res.status(200).send({ users: result });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};