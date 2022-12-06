import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateProductInputDTO, IDeleteProductInputDTO, IEditProductInputDTO, IGetProductInputDTO } from "../models/Product";

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) { }

    public createProduct = async (req: Request, res: Response) => {
        try {

            const input: ICreateProductInputDTO = {
                token: req.headers.authorization,
                name: req.body.name,
                tag: req.body.tag
            }

            const response = await this.productBusiness.createProduct(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao criar product" })
        }
    }

    public getProducts = async (req: Request, res: Response) => {
        try {
            const input: IGetProductInputDTO = {
                token: req.headers.authorization,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.productBusiness.getProducts(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar produtos" })
        }
    }

    public getProductSearchByNameOrId = async (req: Request, res: Response) => {
        try {

            const search = req.query.q as string

            const response = await this.productBusiness.getSearchByNameAndId(search)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public editProduct = async (req: Request, res: Response) => {
        try {
            const input: IEditProductInputDTO = {
                token: req.headers.authorization,
                id: req.params.id,
                name: req.body.name
            }


            const response = await this.productBusiness.editProduct(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public deleteProduct = async (req: Request, res: Response) => {
        try {
            const input: IDeleteProductInputDTO = {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }

            const response = await this.productBusiness.deleteProduct(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public getTagBySearch = async (req: Request, res: Response) => {
        try {

            const search = req.query.q as string

            const response = await this.productBusiness.getProductsTag(search)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}