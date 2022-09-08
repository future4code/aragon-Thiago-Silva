import { BaseDatabase } from "../../src/database/BaseDatabase"
import { Product, IProductDB } from "../../src/models/Product"

export class ProductDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"



    public toProductDBModel = (product: Product) => {
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName()

        }

        return productDB
    }

    public createProduct = async (product: Product) => {

    }

    public getProducts = async () => {
        const products: IProductDB[] = [
            {
                id: "8371",
                name: "VESTIDO TRICOT CHEVRON"
            },
            {
                id: "8367",
                name: "VESTIDO MOLETOM COM CAPUZ MESCLA"
            },
            {
                id: "8360",
                name: "VESTIDO FEMININO CANELADO"
            }
        ]

        return products
    }


    public findProductById = async (productId: string): Promise<IProductDB | undefined> => {
        switch (productId) {
            case "8371":
                return {
                    id: "8371",
                    name: "VESTIDO TRICOT CHEVRON",
                    tags: ["balada", "neutro", "delicado", "festa"]
                } as IProductDB
            default:
                return undefined
        }
    }

    public editProduct = async (req: Request, res: Response) => {

    }

    public deleteProducts = async (id: string) => {

    }

}