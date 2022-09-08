import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { ProductDatabase } from "../../src/database/ProductDatabase"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { ProductBusiness } from "../../src/business/ProductBusiness"
import { IDeleteProductInputDTO } from "../../src/models/Product"
import { BaseError } from "../../src/errors/BaseError"


describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as unknown as ProductDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("DeleteProduct bem sucedido", async () => {
        const input: IDeleteProductInputDTO = {
            token: "token-astrodev",
            idToDelete: "8371"
        }

        const response = await productBusiness.deleteProduct(input)

        expect(response.message).toEqual("Produto deletado com sucesso")

    })

    test("deve retornar um erro não caso exista token", async () => {
        expect.assertions(2)

        try {
            const input = {
                token: "",
                idToDelete: "201"
            } as unknown as IDeleteProductInputDTO

            await productBusiness.deleteProduct(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Token inválido ou faltando")
            }
        }
    })

})