import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";
import { User } from "../models/User";


export const createUsers = async (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const {email,password} = req.body

        if (!email || !password) {
            errorCode = 422;
            throw new Error("Email and password must exist.")
        }

        if (
            typeof email !== "string" || typeof password !== "string"
        ) {
            errorCode = 422;
            throw new Error("Email and password must be a string.")
        }

        const newUser: User = {
            id: Date.now().toString(),
            email: email,
            password: password,
        };

        await connection(TABLE_USERS)
        .insert({
            id:newUser.id,
            email:newUser.email,
            password:newUser.password
        })

            res.status(200).send({ users:newUser , message:"Users created successfully."})
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
}