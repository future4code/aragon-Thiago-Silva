import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public get = async (req: Request, res: Response) => {
        try {
            const usuario = await this.userBusiness.get(req.params.usuario)

            if (!usuario) {
                return res.status(404).send({erro: "Usuário não encontrado"})
            }

            res.status(200).send(usuario)
        } catch (error: unknown) {
            res.status(500).send({ message: "Erro inesperado ao logar usuário." })
        }
    }
}