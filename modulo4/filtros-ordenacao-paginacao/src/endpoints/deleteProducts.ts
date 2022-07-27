import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

//exercicio4
export const deleteProducts = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id;

    const [products] = await connection.raw(`
      SELECT * FROM ${TABLE_PRODUCTS}
      WHERE id = "${id}";
      `);

    if (!products[0]) {
      errorCode = 404;
      throw new Error("Id doesn't found.");
    }

    await connection.raw(`
      DELETE FROM ${TABLE_PRODUCTS}
      WHERE id = "${id}";
      `);

    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
