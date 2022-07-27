import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const updatePrice = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id;
    const price = req.body.price;

    const [products] = await connection.raw(`
      SELECT * FROM ${TABLE_PRODUCTS}
      WHERE id = "${id}";
      `);

    if (!products[0]) {
      errorCode = 404;
      throw new Error("Id doesn't found.");
    }

    await connection.raw(`
     UPDATE ${TABLE_PRODUCTS}
     SET  price = "${price}"
     WHERE id = "${id}";
      `);

    res.status(200).send({ message: "Price updated successfully" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
