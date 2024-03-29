import { ShowBusiness } from "../../src/business/ShowBusiness"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { ICreateShowsInputDTO } from "../../src/models/Show"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("createShow bem sucedido", async () => {
        const input: ICreateShowsInputDTO = {
            token: "token-astrodev",
            band:"U2",
            startsAt: "2022/12/08"
        }

        const response = await showBusiness.createShows(input)

        expect(response.message).toEqual("Show criado com sucesso")
        expect(response.show.getId()).toEqual("id-mock")
        expect(response.show.getBand()).toEqual("U2")
        expect(response.show.getStartsAt()).toEqual(new Date("2022/12/08"))
    })

    test("deve retornar um erro não caso exista token", async ()=> {
        expect.assertions(2)

        try {
            const input = {
                token:"",
                band:"Evanescence",
                startsAt: "2022/08/17"
            } as unknown as ICreateShowsInputDTO

            await showBusiness.createShows(input)
        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })
})