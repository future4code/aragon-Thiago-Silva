import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }


    public get = async (req: Request, res: Response) => {
        try {
            const user = await this.postBusiness.get(req.params.user)

            if (!user) {
                return res.status(404).send({erro: "Post não encontrado"})
            }

            res.status(200).send(user)
        } catch (error: unknown) {
            res.status(500).send({ message: "Erro inesperado ao buscar post." })
        }
    }

    public getComments = async (req: Request, res: Response) => {
        try {
            const post = await this.postBusiness.getComments(req.params.postId)

            if (!post) {
                return res.status(404).send({erro: "Post não encontrado"})
            }

            res.status(200).send(post)
        } catch (error: unknown) {
            res.status(500).send({ message: "Erro inesperado ao buscar post." })
        }
    }

    public createPost = async (req: Request, res: Response) => {
        try {
            const post = await this.postBusiness.createPost(req.body)

            res.status(200).send(post)
        } catch (error: unknown) {
            res.status(500).send({ message: "Erro inesperado ao buscar post." })
        }
    }

    public createComment = async (req: Request, res: Response) => {
        try {
            const post = await this.postBusiness.createComment(req.params.postId, req.body)

            res.status(200).send(post)
        } catch (error: unknown) {
            console.log(error)
            res.status(500).send({ message: "Erro inesperado ao buscar post." })
        }
    }
}