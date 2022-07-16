import { Request, Response } from "express";
import connection from "../database/connection";

export const editNickname = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const userId = req.params.userId;
    const nickname = req.body.nickname;

    const [users] = await connection.raw(`
      SELECT * FROM Users
      WHERE id = ${userId};
      `);

    const checkId = users[0];

    if (checkId === undefined) {
      errorCode = 404;
      throw new Error("userId doesn't exist.");
    }

    if (!nickname) {
      errorCode = 404;
      throw new Error("Nickname must exist");
    }

    if (typeof nickname !== "string") {
      errorCode = 404;
      throw new Error("Nickname must be a string");
    }

    if (nickname.length < 3) {
      throw new Error("Nickname must have at last 3 characters");
    }
    console.log(editNickname);
    await connection.raw(`
      UPDATE Users
      SET nickname = "${nickname}"
      WHERE id = "${userId}";
      `);

    res.status(200).send({ message: "Nickname updated succesfully." });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
