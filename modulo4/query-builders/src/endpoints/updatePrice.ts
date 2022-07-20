import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const updatePrice = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id as string
        const price = req.body.price

        const perfumeExists = await connection(TABLE_PERFUMES)
        .select()
        .where("id", "=", `${id}`)

        if(!perfumeExists[0]) {
            errorCode = 404
            throw new Error("Error: Perfume not found.")
        }

        if(!price || typeof price !== "number" || price <= 0) {
            errorCode = 422
            throw new Error ("Error: Price must exist and be a number greater than zero.")
        }

        await connection(TABLE_PERFUMES)
        .update({
            price: price
        })
        .where({
            id: id
        })    
        
        res.status(200).send({
            message: "Price successfully updated.",
            price: price
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}