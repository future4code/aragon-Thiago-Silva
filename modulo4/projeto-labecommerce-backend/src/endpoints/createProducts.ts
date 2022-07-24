import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product } from "../models/Product";

export const createProducts = async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { name, price } = req.body;

    if (!name || !price) {
      errorCode = 422;
      throw new Error("Error: 'name' and 'price' must exist.");
    }

    if (typeof name !== "string" || name.length <= 5) {
      errorCode = 422;
      throw new Error("Error: 'name' must be a string longer then 5 characters.");
    }

    if (typeof price !== "number" || price <= 0) {
      errorCode = 422;
      throw new Error("Error: 'price' must be a number greater then 0 (zero).");
    }

    const setNewProductId = await connection(TABLE_PRODUCTS)
      .select()

    const lastProduct = setNewProductId [setNewProductId.length -1]
    const lastProductId = Number(lastProduct.id)

    const newProduct: Product = {
      id: (lastProductId + 1).toString(),
      name: name,
      price: price,
    };

    await connection(TABLE_PRODUCTS)
    .insert({
      id: newProduct.id,
      name: newProduct.name,
      price: newProduct.price,
    });

    res
      .status(200)
      .send({ products: newProduct, message: "Product created successfully." });
  } catch (error) {
    res
    .status(errorCode)
    .send({ message: error.message });
  }
};
