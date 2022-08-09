import { RecipeDatabase } from "../database/RecipeDatabase"
import { Recipe } from "../models/Recipe"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class RecipeBusiness {
    public getAllRecipes = async (input: any) => {
        const token = input.token
        const search = input.search || ""
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)

        if (!token) {
            throw new Error("Token faltando")
        }

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido")
        }

        const recipeDatabase = new RecipeDatabase()
        const recipesDB = await recipeDatabase.getRecipes(
            search,
            sort,
            limit,
            offset
        )

        const recipes = recipesDB.map((recipeDB) => {
            return new Recipe(
                recipeDB.id,
                recipeDB.title,
                recipeDB.description,
                recipeDB.created_at,
                recipeDB.updated_at,
                recipeDB.creator_id
            )
        })

        const response = {
            recipes
        }

        return response
    }

    public createRecipe = async (input: any) => {
        const title = input.title
        const description = input.description
        const token = input.token

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token faltando ou inválido")
        }

        if (!title) {
            throw new Error("Parâmetro 'title' faltando")
        }

        if (typeof title !== "string") {
            throw new Error("Parâmetro 'title' deve ser uma string")
        }

        if (title.length < 3) {
            throw new Error("Parâmetro 'title' deve possuir pelo menos 3 caracteres")
        }

        if (!description) {
            throw new Error("Parâmetro 'description' faltando")
        }

        if (typeof description !== "string") {
            throw new Error("Parâmetro 'description' deve ser uma string")
        }

        if (description.length < 10) {
            throw new Error("Parâmetro 'description' deve possuir pelo menos 10 caracteres")
        }

        const idGenerator = new IdGenerator()

        const recipe = new Recipe(
            idGenerator.generate(),
            title,
            description,
            new Date(),
            new Date(),
            payload.id
        )

        const recipeDatabase = new RecipeDatabase()
        await recipeDatabase.createRecipe(recipe)

        const response = {
            message: "Receita criada com sucesso",
            recipe 
        }

        return response
    }

    public editRecipe = async (input: any) => {
        const recipeId = input.id
        const title = input.title
        const description = input.description
        const token = input.token

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token faltando ou inválido")
        }

        if (!title && !description) {
            throw new Error("Parâmetro faltando")
        }

        if (title && typeof title !== "string") {
            throw new Error("Parâmetro 'title' deve ser uma string")
        }

        if (title && title.length < 3) {
            throw new Error("Parâmetro 'title' deve possuir pelo menos 3 caracteres")
        }

        if (description && typeof description !== "string") {
            throw new Error("Parâmetro 'description' deve ser uma string")
        }

        if (description && description.length < 10) {
            throw new Error("Parâmetro 'description' deve possuir pelo menos 10 caracteres")
        }

        const recipeDatabase = new RecipeDatabase()
        const recipeDB = await recipeDatabase.findRecipeById(recipeId)

        if (!recipeDB) {
            throw new Error("Receita a ser editada não existe")
        }

        const recipe = new Recipe(
            recipeDB.id,
            recipeDB.title,
            recipeDB.description,
            recipeDB.created_at,
            recipeDB.updated_at,
            recipeDB.creator_id
        )

        if (payload.role === USER_ROLES.NORMAL) {
            if (payload.id !== recipe.getCreatorId()) {
                throw new Error("Esta receita não pode ser editada por esse usuário")
            }
        }

        title && recipe.setTitle(title)
        description && recipe.setDescription(description)

        await recipeDatabase.updateRecipe(recipe)

        const response = {
            message: "Receita editada com sucesso",
            recipe
        }

        return response
    }

    public deleteRecipe = async (input: any) => {
        const token = input.token
        const recipeId = input.recipeId

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token faltando ou inválido")
        }

        const recipeDatabase = new RecipeDatabase()
        const recipeDB = await recipeDatabase.findRecipeById(recipeId)

        if (!recipeDB) {
            throw new Error("Receita a ser deletada não existe")
        }

        const recipe = new Recipe(
            recipeDB.id,
            recipeDB.title,
            recipeDB.description,
            recipeDB.created_at,
            recipeDB.updated_at,
            recipeDB.creator_id
        )

        if (payload.role === USER_ROLES.NORMAL) {
            if (payload.id !== recipe.getCreatorId()) {
                throw new Error("Esta receita não pode ser deletada por esse usuário")
            }
        }

        await recipeDatabase.deleteRecipeById(recipe.getId())

        const response = {
            message: "Receita deletada com sucesso"
        }

        return response
    }
}