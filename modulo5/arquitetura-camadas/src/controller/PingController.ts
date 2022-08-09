import { Request, Response } from "express"
import { PingBusiness } from "../business/PingBusiness"

export class PingController {
    public ping = async (req: Request, res: Response) => {
        try {
            const pingBusiness = new PingBusiness()
            const response = await pingBusiness.ping()
            
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}