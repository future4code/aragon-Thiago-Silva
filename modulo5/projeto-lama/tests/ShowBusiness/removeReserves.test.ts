import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { BaseError } from "../../src/errors/BaseError"
import { IRemoveReserveInputDTO, IReserveInputDTO } from "../../src/models/Show"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"

describe("Testing ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Remover reserva bem sucedido", async () => {

        const input: IRemoveReserveInputDTO= {
            token: "token-astrodev",
            showId: "201"
        }

        const response = await showBusiness.removeReserves(input)

        expect(response.message).toEqual("Reserva removida com sucesso")

    })

    test("retorna erro se o show não for encontrado", async () => {
        expect.assertions(2)
        try {
            const input: IReserveInputDTO = {
                token: "token-mock",
                showId: "211"
            }

            await showBusiness.reserveTickets(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {

                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Show não encontrado")
            }
        }
    })

    test("retorna erro se token for ausente", async () => {
        expect.assertions(2)
        try {
            const input: IRemoveReserveInputDTO = {
                token: "",
                showId: "201"
            }

            await showBusiness.removeReserves(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {

                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

    test("retorna erro se o ingresso ainda não foi reservado", async () => {
        expect.assertions(2)
        try {
            const input: IRemoveReserveInputDTO = {
                token: "token-mock",
                showId: "201"
            }

            await showBusiness.removeReserves(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {

                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Ainda não reservou ingresso")
            }
        }
    })
}) 