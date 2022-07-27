import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";
import { Perfume } from "../models/Perfume"

export const createPerfumes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, brand, price, ml } = req.body

        if( !name || !brand || !price || !ml  ) {
            errorCode = 422
            throw new Error("Error: missing parameters.")
        }

        if(  typeof name !== "string" || typeof brand !== "string" ){
            errorCode = 422
            throw new Error("Error: Id, name and brand must be a string.")
        }

        if ( typeof price !== "number" || typeof ml !== "number" ) {
            errorCode = 422
            throw new Error("Error: Price and ml must be a number.")
        }

        if ( price <= 0) {
            errorCode = 422
            throw new Error("Error: Price must have a value greater than zero.")
        }

        const newPerfume: Perfume = {
            id: Date.now().toString(),
            name: name,
            brand: brand,
            price: price,
            ml: ml
        }

        console.log(newPerfume.id)

        await connection(TABLE_PERFUMES)
        .insert({
            id: newPerfume.id,
            name: newPerfume.name,
            brand: newPerfume.brand,
            price: newPerfume.price,
            ml: newPerfume.ml
        })

        res.status(201).send({ 
            message: "Perfume successfully added.",
            perfumes: newPerfume
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message})
    }
}