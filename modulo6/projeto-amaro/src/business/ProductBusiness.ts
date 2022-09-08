import { ProductDatabase } from "../database/ProductDatabase"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateProductInputDTO, ICreateProductOutputDTO, IDeleteProductInputDTO, IEditProductInputDTO, IGetProductOutputDTO, IGetproductsDBDTO, IgetProductsInputDTO, Product } from "../models/Product"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    public createProduct = async (input: ICreateProductInputDTO) => {
        const { token, name, tag } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        if (typeof name !== "string") {
            throw new RequestError("Parâmetro 'name' inválido")
        }

        if (name.length < 1) {
            throw new RequestError("Parâmetro 'name' inválido: mínimo de 1 caracteres")
        }

        if (payload.role === USER_ROLES.NORMAL) {
            throw new UnauthorizedError("Erro: Apenas usuários 'ADMIN' podem criar products.");
        }


        const id = this.idGenerator.generate()
        const product = new Product(
            id,
            name,
            tag
        )

        await this.productDatabase.createProduct(product)

        const response: ICreateProductOutputDTO = {
            message: "Produto criado com sucesso",
            product
        }

        return response
    }

    public getProducts = async (input: IgetProductsInputDTO) => {

        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)

        const getProductInputDB: IGetproductsDBDTO = {
            order,
            sort,
            limit,
            offset
        }
        const productsDB = await this.productDatabase.getProducts(getProductInputDB)

        const products = productsDB.map(productDB => {

            return new Product(
                productDB.id,
                productDB.name
            )
        })

        for (let product of products) {
            const tags: any = await this.productDatabase.getTags(product.getId())

            product.setTag(tags)
        }

        const response: IGetProductOutputDTO = {
            products
        }

        return response
    }

    public getSearchByNameAndId = async (search: string) => {

        const productsDB = await this.productDatabase.getBySearch(search)

        const response: any = {
            productsDB
        }

        return response
    }


    public getProductsTag = async (search: string) => {


        const tag = await this.productDatabase.getIdTag(search)

        const tagId = tag?.map(item => item.id)

        const products = await this.productDatabase.getSearchProductByTag(tagId[0])


        const response: any = {
            products
        }

        return response
    }

    public editProduct = async (input: IEditProductInputDTO) => {
        const {
            token,
            id,
            name
        } = input

        if (!token) {
            throw new UnauthorizedError("Token faltando")
        }

        if (!name) {
            throw new RequestError("Parâmetros faltando")
        }

        if (name && typeof name !== "string") {
            throw new RequestError("Parâmetro 'name' inválido")
        }

        if (name.length < 3) {
            throw new RequestError("Parâmetro 'name' inválido")
        }

        const productDB = await this.productDatabase.findProductById(id)

        if (!productDB) {
            throw new RequestError("Conta a ser editada não existe")
        }

        const product = new Product(
            productDB.id,
            productDB.name
        )

        name && product.setName(name)
        await this.productDatabase.editProduct(product)

        const response = {
            message: "Edição realizada com sucesso"
        }

        return response
    }

    public deleteProduct = async (input: IDeleteProductInputDTO) => {
        const token = input.token
        const idToDelete = input.idToDelete

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Token inválido ou faltando")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new UnauthorizedError("Apenas admins podem deletar produtos")
        }

        if (payload.id === idToDelete) {
            throw new UnauthorizedError("Não é possível deletar a própria conta")
        }

        const productDB = await this.productDatabase.findProductById(idToDelete)

        if (!productDB) {
            throw new RequestError("Product a ser deletado não encontrado")
        }

        await this.productDatabase.deleteProducts(idToDelete)

        const response = {
            message: "Produto deletado com sucesso"
        }

        return response
    }

}