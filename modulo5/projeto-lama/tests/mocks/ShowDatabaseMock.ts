import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IShowDB, ITicketDB, Show } from "../../src/models/Show"

    export class ShowDatabaseMock extends BaseDatabase {
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

    public checkDate = async (date: Date) => {

    }

    public createShows = async (show: Show) => {
  
    }

    public getShows = async () => {
        const shows: IShowDB[] = [
            {
                id: "201",
                band: "Foo Fighters",
                starts_at: new Date("2022/12/05")
            },
            {
                id: "202",
                band: "System of a Down",
                starts_at: new Date("2022/12/06")
            },
            {
                id: "203",
                band: "Evanescence",
                starts_at: new Date("2022/12/07")
            },
        ]

        return shows
    }

    public getTickets = async (showId: string) => {
        switch (showId) {
            case "201":
                return 4997
            default:
                return 0
        }
    }

    public findShowById = async (showId: string): Promise<IShowDB | undefined> => {
        switch (showId) {
            case "201":
                return {
                    id: "201",
                    band: "Foo Fighters",
                    starts_at: new Date("2022/12/05")
                } as IShowDB
            default:
                return undefined
        }
    }

    public findTicketById = async (show_id: string, user_id: string): Promise<ITicketDB | undefined> => {
        switch (show_id + user_id) {
            case "201" + "101":
              return {
                    id: "301",
                    show_id: "201",
                    user_id: "101"
                } as ITicketDB
                case "307" + "id-mock":
                return {
                    id: "307",
                    show_id: "201",
                    user_id: "id-mock"
                } as ITicketDB
            default:
                return undefined
        }
    }

    public findReserves = async (showId: string, userId: string): Promise<ITicketDB | undefined> => {
        switch (showId + userId) {
            case "201" + "101":
              return {
                id: "301",
                show_id: "201",
                user_id: "101"
            } as ITicketDB
            default:
                return undefined
        }
    }

    public reserveTickets = async (reserveDB: ITicketDB) => {
        
    }

    public removeReserve = async (showId: string, userId: string) => {
      
    }
}