import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { ProductDatabase } from "../../src/database/ProductDatabase"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { ProductBusiness } from "../../src/business/ProductBusiness"
import { IEditProductInputDTO } from "../../src/models/Product"
import { BaseError } from "../../src/errors/BaseError"



describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as unknown as ProductDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("EditProduct bem sucedido", async () => {
        const input: IEditProductInputDTO = {
            token: "token-astrodev",
            id:"8371",
            name: "havaiana"
        }

        const response = await productBusiness.editProduct(input)

        expect(response.message).toEqual("Edição realizada com sucesso")

    })

    test("deve retornar um erro não caso exista token", async () => {
        expect.assertions(2)

        try {
            const input = {
                token: "",
                idToDelete: "201",
                name:"havaiana"
            } as unknown as IEditProductInputDTO

            await productBusiness.editProduct(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Token faltando")
            }
        }
    })

    test("deve retornar erro caso o name não seja uma string", async () => {
        expect.assertions(2)

        try {
            const input = {
                token: "token-astrodev",
                idToDelete: "201",
                name:0
            } as unknown as IEditProductInputDTO

            await productBusiness.editProduct(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetros faltando")
            }
        }
    })

    test("deve retornar um erro caso tamanho do name for menor que 3 caracter", async () => {
        expect.assertions(2)

        try {
            const input = {
                token:"token-astrodev",
                idToDelete: "201",
                name:"ha"

            } as unknown as IEditProductInputDTO

            await productBusiness.editProduct(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'name' inválido")
            }
        }
    })

    test("deve retornar um erro caso conta editada não exista", async () => {
        expect.assertions(2)

        try {
            const input = {
                token:"token-astrodev",
                idToDelete: "",
                name:"havaiana"
            } as unknown as IEditProductInputDTO

            await productBusiness.editProduct(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Conta a ser editada não existe")
            }
        }
    })


})