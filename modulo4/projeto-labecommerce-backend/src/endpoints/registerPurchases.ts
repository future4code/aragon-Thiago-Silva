import { Request, Response } from "express";
import connection from "../database/connection";
import {
  TABLE_PRODUCTS,
  TABLE_PURCHASES,
  TABLE_USERS,
} from "../database/tableNames";
import { Purchase } from "../models/Purchase";

export const registerPurchases = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { user_id, product_id, quantity } = req.body;

    if (!user_id || !product_id || !quantity) {
      errorCode = 422;
      throw new Error("User_id, product_id quantity must exist.");
    }

    if (
      typeof user_id !== "string" ||
      typeof product_id !== "string" ||
      typeof quantity !== "number" ||
      quantity <= 0
    ) {
      errorCode = 422;
      throw new Error(
        "User_id and product_id must be a string, and quantity must be a number greater then zero."
      );
    }

    const userIdExists = await connection(TABLE_USERS)
      .select()
      .where("id", "=", `${user_id}`);

    if (!userIdExists[0]) {
      errorCode = 404;
      throw new Error("Error: User not found.");
    }

    const productIdExists = await connection(TABLE_PRODUCTS)
      .select()
      .where("id", "=", `${product_id}`);

    if (!productIdExists[0]) {
      errorCode = 404;
      throw new Error("Error: Product not found.");
    }

    const productPrice: any = await connection(TABLE_PRODUCTS)
      .select("price")
      .where("id", "=", `${product_id}`);

    const newPurchase: Purchase = {
      id: Date.now().toString(),
      user_id: user_id,
      product_id: product_id,
      quantity: quantity,
      total_price: quantity * productPrice[0].price,
    };

    await connection(TABLE_PURCHASES)
    .insert({
      id: newPurchase.id,
      user_id: newPurchase.user_id,
      product_id: newPurchase.product_id,
      quantity: newPurchase.quantity,
      total_price: newPurchase.total_price,
    });
    
    res.status(200).send({
      purchases: newPurchase,
      message: "Purchase registered successfully.",
    });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
