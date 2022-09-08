import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateShowsInputDTO, IRemoveReserveInputDTO, IReserveInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public createShows = async (req: Request, res: Response) => {
        try {

            const input: ICreateShowsInputDTO = {
                token: req.headers.authorization,
                band: req.body.band,
                startsAt: req.body.startsAt
            }

            const response = await this.showBusiness.createShows(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao criar show" })
        }
    }

    public getShows = async (req: Request, res: Response) => {
        try {

            const response = await this.showBusiness.getShows()
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar shows" })
        }
    }

    public reserveTickets = async (req: Request, res: Response) => {
        try {
            const input: IReserveInputDTO = {
                token: req.headers.authorization,
                showId: req.params.showId
            }

            const response = await this.showBusiness.reserveTickets(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao reservar um ingresso" })
    }
    }

    public removeReserves = async (req: Request, res: Response) => {
        try {
            const input: IRemoveReserveInputDTO = {
                token: req.headers.authorization,
                showId: req.params.showId
            }

            const response = await this.showBusiness.removeReserves(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao remover reserva de ingresso" })
        }
    }
}