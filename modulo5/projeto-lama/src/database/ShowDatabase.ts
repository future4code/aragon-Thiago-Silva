import { IShowDB, Show } from "../models/Show"
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

    public createShow = async (show: Show) => {
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
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .count("id AS likes")
            .where({ show_id: showId })

        return result[0].tickets as number
    }
}