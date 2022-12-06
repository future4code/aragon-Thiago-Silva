import { IGetproductsDBDTO, IProductDB, ITagDB, Product } from "../models/Product"
import { BaseDatabase } from "./BaseDatabase"

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_PRODUCT_TAGS = "Amaro_Products_Tags"

    public toProductDBModel = (product: Product) => {
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName()
        }

        return productDB
    }


    public createProduct = async (product: Product) => {
        const ProductDB = this.toProductDBModel(product)

        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert(ProductDB)
    }

    public getProducts = async (input: IGetproductsDBDTO): Promise<IProductDB[] | undefined> => {

        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const productsDB: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)

        return productsDB
    }

    public getTags = async (id: string): Promise<IProductDB[] | undefined> => {

        const result = await BaseDatabase.connection.raw(`
        SELECT Amaro_Tags.name
        FROM Amaro_Products_Tags
        JOIN Amaro_Tags
        ON Amaro_Products_Tags.tag_id = Amaro_Tags.id
        WHERE Amaro_Products_Tags.product_id = "${id}"  
        `)

        return result[0]
    }

    public getBySearch = async (search: string): Promise<IProductDB[] | undefined> => {

        const productsDB: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .whereLike("id", `%${search}%`)
            .orWhereLike("name", `%${search}%`)

        return productsDB
    }

    getIdTag = async (tag: string): Promise<ITagDB[] | undefined> => {
        const result: ITagDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_TAGS)
            .select()
            .where({ tag })

        return result
    }

    public getTagBySearch = async (search: string) => {

        const productsDB = await BaseDatabase.connection.raw(`
            SELECT Amaro_Products.name
            FROM Amaro_Products_Tags
            JOIN Amaro_Tags
            ON Amaro_Products_Tags.tag_id = Amaro_Tags.id
            WHERE Amaro_Tags.name = "${search}"  `)
        return productsDB
    }

    public getSearchProductByTag = async (search: string): Promise<ITagDB | undefined> => {

        const [result] = await BaseDatabase.connection.raw(`
            SELECT Amaro_Products.id,Amaro_Products.name
            FROM Amaro_Products_Tags
            JOIN Amaro_Tags
            ON Amaro_Products_Tags.tag_id = Amaro_Tags.id
            JOIN Amaro_Products
            ON Amaro_Products_Tags.product_id = Amaro_Products.id
            WHERE Amaro_Products_Tags.id = "${search}"  `)

        return result
    }

    public findProductById = async (id: string): Promise<IProductDB | undefined> => {
        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .where({ id })

        return result[0]
    }


    public editProduct = async (product: any) => {
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName()
        }

        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .update(productDB)
            .where({ id: productDB.id })
    }


    public deleteProducts = async (id: string) => {
        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .delete()
            .where({ id: id })
    }


}