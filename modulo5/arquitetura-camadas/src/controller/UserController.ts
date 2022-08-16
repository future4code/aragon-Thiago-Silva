import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup({
                nickname: req.body.nickname,
                email: req.body.email,
                password: req.body.password
            })
            
            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const userBusiness = new UserBusiness()
            const response = await userBusiness.login({
                email: req.body.email,
                password: req.body.password
            })

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const userBusiness = new UserBusiness()
            const response = await userBusiness.deleteUser({
                token: req.headers.authorization,
                idToDelete: req.params.id
            })

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}