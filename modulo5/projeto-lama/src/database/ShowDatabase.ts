import { IShowDB, ITicketDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"
    
    public toShowDBModel = (show: Show) => {
        const showDB: IShowDB = {
            id:show.getId(),
            band:show.getBand(),
            starts_at:show.getStartsAt()
        }

        return showDB
    }

    public checkDate = async (date: Date): Promise<IShowDB | undefined> => {

        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({ starts_at: date })

        return result[0]
    }

    public createShows = async (show: Show) => {
        const showDB = this.toShowDBModel(show)

        await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .insert(showDB)
    }

    public getShows = async () => {
        const showsDB: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()

        return showsDB
    }

    public getTickets = async (showId: string) => {
        const result: any = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .count("id AS tickets")
            .where({ show_id: showId })

        return result[0].tickets as number
    }

    public findShowById = async (id: string): Promise<IShowDB | undefined> => {
        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({ id })

        return result[0]
    }

    public findTicketById = async (showId: string, userId: string): Promise<ITicketDB | undefined> => {
        const result: ITicketDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .where({ show_id: showId })
            .andWhere({ user_id: userId})

        return result[0]
    }

    public findReserves = async (showId: string, userId: string): Promise<ITicketDB | undefined> => {
        const reserveDB: ITicketDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .where({ show_id: showId })
            .andWhere({ user_id: userId })

        return reserveDB[0]
    }

    public reserveTickets = async (reserveDB: ITicketDB) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .insert(reserveDB)
    }

    public removeReserve = async (showId: string, userId: string) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .delete()
            .where({ show_id: showId })
            .andWhere({ user_id: userId })
    }
}