import { ShowBusiness } from "../../src/business/ShowBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { IBuyTicketInputDTO, ITicketDB } from "../../src/models/Show"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"

describe("Testing ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Buy ticket bem sucedido", async () => {

        const input: IBuyTicketInputDTO = {
            token: "token-mock",
            showId: "201",
        }

        const response = await showBusiness.buyTicket(input)

        expect(response.message).toEqual("Ingresso comprado com sucesso!")

    })

    test("retorna erro se show não for encontrado", async () => {
        expect.assertions(2)
        try {
            const input: IBuyTicketInputDTO = {
                token: "token-mock",
                showId: "205",
            }

            await showBusiness.buyTicket(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Show não encontrado.")
            }
        }
    })

    test("retorna erro se usuário já comprou ingresso daquele show", async () => {
        expect.assertions(2)
        try {
            const input: IBuyTicketInputDTO = {
                token: "token-astrodev",
                showId: "201",
            }

            await showBusiness.buyTicket(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(409)
                expect(error.message).toEqual("Você já comprou ingresso para esse show.")
            }
        }
    })

    test("retorna erro se token inválido/ausente", async () => {
        expect.assertions(2)
        try {
            const input: IBuyTicketInputDTO = {
                token: "token-astrodev2",
                showId: "201",
            }

            await showBusiness.buyTicket(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Token ausente/inválido.")
            }
        }
    })

}) 