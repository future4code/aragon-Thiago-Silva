import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        try {
            const recipeBusiness = new RecipeBusiness()
            const response = await recipeBusiness.getAllRecipes({
                token: req.headers.authorization,
                search: req.query.search,
                sort: req.query.sort,
                limit: req.query.limit,
                page: req.query.page,
            })


            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public createRecipe = async (req: Request, res: Response) => {
        try {
            const recipeBusiness = new RecipeBusiness()
            const response = await recipeBusiness.createRecipe({
                title: req.body.title,
                description: req.body.description,
                token: req.headers.authorization
            })

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public editRecipe = async (req: Request, res: Response) => {
        try {
            const recipeBusiness = new RecipeBusiness()
            const response = await recipeBusiness.editRecipe({
                recipeId: req.params.id,
                title: req.body.title,
                description: req.body.description,
                token: req.headers.authorization
            })

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public deleteRecipe = async (req: Request, res: Response) => {
        try {
            const recipeBusiness = new RecipeBusiness()
            const response = await recipeBusiness.deleteRecipe({
                recipeId: req.params.id,
                token: req.headers.authorization
            })

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}