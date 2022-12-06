import { Router } from 'express'
import { ProductBusiness } from '../business/ProductBusiness'
import { ProductDatabase } from '../database/ProductDatabase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'
import { ProductController} from '../controller/ProductController'
export const productRouter = Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
)

productRouter.post("/", productController.createProduct)
productRouter.get("/", productController.getProducts)
productRouter.get("/search", productController.getProductSearchByNameOrId)
productRouter.get("/search/tag", productController.getProductSearchByNameOrId)
productRouter.put("/:id", productController.editProduct)
productRouter.delete("/:id", productController.deleteProduct)