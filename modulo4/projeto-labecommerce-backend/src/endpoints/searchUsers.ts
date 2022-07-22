import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";

export const searchUsers =async (req:Request,res:Response)=> {
    let errorCode = 400
    try {
        
        const query = req.query.q
        const sort = req.query.sort || "email"
        const order = req.query.order || "asc"

        if(query){
            const result = await connection(TABLE_USERS)
            .select()
            .where("email", "LIKE", `${query}`)
            .orWhere("password", "LIKE", `${query}`)
            .orderBy(`${sort}`, `${order}`)
            
            return res.status(200).send({users:result})
        }

        const result = await connection (TABLE_USERS)
        .select("*")
        .orderBy(`${sort}`, `${order}`)
        
        res.status(200).send({users:result})
    } catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}