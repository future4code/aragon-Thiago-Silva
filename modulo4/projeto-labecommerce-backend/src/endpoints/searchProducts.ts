import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS, TABLE_USERS } from "../database/tableNames";

export const searchProducts =async (req:Request,res:Response)=> {
    let errorCode = 400
    try {
        
        const query = req.query.q
        const sort = req.query.sort || "name"
        const order = req.query.order || "asc"

        if(query){
            const result = await connection(TABLE_PRODUCTS)
            .select()
            .where("name", "LIKE", `${query}`)
            .orWhere("price", "LIKE", `${query}`)
            .orderBy(`${sort}`, `${order}`)
            
            return res.status(200).send({products:result})
        }

        const result = await connection (TABLE_PRODUCTS)
        .select("*")
        .orderBy(`${sort}`, `${order}`)
        
        res.status(200).send({products:result})
    } catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}