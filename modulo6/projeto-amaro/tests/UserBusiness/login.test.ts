import { UserBusiness} from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { IdGeneratorMock} from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock} from "../mocks/services/AuthenticatorMock"
import { ILoginInputDTO } from "../../src/models/User"
import { BaseError } from "../../src/errors/BaseError"

describe("Testing UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("login bem sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)

        expect(response.message).toEqual("Login realizado com sucesso!")
        expect(response.token).toEqual("token-astrodev")
    })

    test("retorna erro se email não for cadastrado", async () => {
        expect.assertions(2)
        try {
            const input: ILoginInputDTO = {
                email: "labenu@gmail.com",
                password: "labenu22"
            }

            await userBusiness.login(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Email não cadastrado.")
            }
        }
    })

    test("retorna erro se email tiver formato inválido ", async () => {
        expect.assertions(2)
        try {
            const input: ILoginInputDTO = {
                email: "astrodevgmail.com",
                password: "bananinha"
            }

            await userBusiness.login(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido.")
            }
        }
    })

    test("retorna erro se senha estiver incorreta", async () => {
        expect.assertions(2)
        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "senhaerrada"
            }

            await userBusiness.login(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Password incorreto.")
            }
        }
    })

}) 