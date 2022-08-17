import { ShowDatabase } from "../database/ShowDatabase"
import { UserDatabase } from "../database/UserDatabase"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateShowInputDTO, ICreateShowOutputDTO, IGetShowsInputDTO, IGetShowsOutputDTO, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createShow = async (input: ICreateShowInputDTO) => {
        const { token, band , starts_at } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new RequestError("Não autenticado")
        }

        if (typeof band !== "string") {
            throw new RequestError("Parâmetro 'band' inválido")
        }

        if (band.length < 1) {
            throw new RequestError("Parâmetro 'band' inválido: mínimo de 1 caracteres")
        }

        const id = this.idGenerator.generate()
     
        if ( payload.role !== USER_ROLES.ADMIN )
                throw new UnauthorizedError("Erro: apenas usuários 'ADMIN' podem criar shows")

        const show = new Show(
            id,
            band,
            starts_at
        )

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO = {
            message: "Show criado com sucesso",
            show
        }

        return response
    }

    public getShows = async (input: IGetShowsInputDTO) => {

        const showsDB = await this.showDatabase.getShows()

        const shows = showsDB.map(showDB => {
            return new Show(
                showDB.id,
                showDB.band,
                showDB.starts_at
            )
        })

        // for (let show of shows) {
        //     const showId = show.getId()
        //     const tickets = await this.showDatabase.getTickets(showId)
        //     show.setTickets(tickets)
        // }

        const response: IGetShowsOutputDTO = {
            shows
        }

        return response
    }
}