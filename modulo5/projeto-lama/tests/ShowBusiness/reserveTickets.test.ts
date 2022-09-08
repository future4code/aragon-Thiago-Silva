import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { BaseError } from "../../src/errors/BaseError"
import { IReserveInputDTO } from "../../src/models/Show"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"

describe("Testing ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Reserve tickets bem sucedido", async () => {

        const input: IReserveInputDTO = {
            token: "token-mock",
            showId: "201",
        }

        const response = await showBusiness.reserveTickets(input)

        expect(response.message).toEqual("Reserva realizada com sucesso")
    })

    test("retorna erro se o show não for encontrado", async () => {
        expect.assertions(2)
        try {
            const input: IReserveInputDTO = {
                token: "token-mock",
                showId: "211",
            }

            await showBusiness.reserveTickets(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Show não encontrado")
            }
        }
    })

    test("retorna erro se usuário já comprou ingresso daquele show", async () => {
        expect.assertions(2)
        try {
            const input: IReserveInputDTO = {
                token: "token-astrodev",
                showId: "201",
            }

            await showBusiness.reserveTickets(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(409)
                expect(error.message).toEqual("Já reservou o ingresso")
            }
        }
    })

    test("retorna erro se token inválido/ausente", async () => {
        expect.assertions(2)
        try {
            const input: IReserveInputDTO = {
                token: "token-astrodev2",
                showId: "201",
            }

            await showBusiness.reserveTickets(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })
}) 