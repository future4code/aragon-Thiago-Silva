import { ShowDatabase } from "../database/ShowDatabase";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import {
  IAddReserveOutputDTO,
  ICreateShowsInputDTO,
  ICreateShowsOutputDTO,
  IGetShowsOutputDTO,
  IRemoveReserveInputDTO,
  IRemoveReserveOutputDTO,
  IReserveInputDTO,
  ITicketDB,
  Show,
} from "../models/Show";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public createShows = async (input: ICreateShowsInputDTO) => {
    const { token, band, startsAt } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new UnauthorizedError("Não autenticado");
    }

    if (!band || !startsAt) {
        throw new RequestError("Parâmetros ausentes");
    }

    if (typeof band !== "string") {
      throw new RequestError("Parâmetro 'band' inválido: deve ser uma string");
    }

    if (band.length < 1) {
      throw new RequestError(
        "Parâmetro 'band' inválido: mínimo de 1 caráter"
      );
    }

    if (typeof startsAt !== "string" ) {
        throw new RequestError("Parâmetro 'startsAt' inválido: deve ser uma string");
        
    }

    if (payload.role !== USER_ROLES.ADMIN)
      throw new UnauthorizedError(
        "Apenas usuários 'ADMIN' podem criar shows"
      );

    const isShowDateReserved = await this.showDatabase.checkDate(new Date(startsAt));

    if (isShowDateReserved) {
      throw new RequestError("Data indisponível");
    }

    if (startsAt < "2022/12/05") {
      throw new RequestError(
        "Erro: shows começam a partir do dia 05 de dezembro."
      );
    }

    if (startsAt > "2022/12/11") {
      throw new RequestError("Erro: shows se encerram no dia 11 de dezembro.");
    }

    const id = this.idGenerator.generate();

    const show = new Show(
        id, 
        band, 
        new Date(startsAt)
        );

    await this.showDatabase.createShows(show);

    const response: ICreateShowsOutputDTO = {
      message: "Show criado com sucesso",
      show,
    };

    return response;
  };

  public getShows = async () => {
    const showsDB = await this.showDatabase.getShows();

    const shows = showsDB.map((showDB) => {
      return new Show(showDB.id, showDB.band, showDB.starts_at);
    });

    for (let show of shows) {
      const showId = show.getId();
      const tickets = await this.showDatabase.getTickets(showId);
      show.setTickets(show.getTickets() - tickets)
    }

    const response: IGetShowsOutputDTO = {
      shows,
    };

    return response;
  };

  public reserveTickets = async (input: IReserveInputDTO) => {
    const { token, showId } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new UnauthorizedError("Não autenticado");
    }

    const showDB = await this.showDatabase.findShowById(showId);

    if (!showDB) {
      throw new NotFoundError("Show não encontrado");
    }

    const isAlreadyReserved = await this.showDatabase.findReserves(
      showId,
      payload.id
    );

    if (isAlreadyReserved) {
      throw new ConflictError("Já reservou o ingresso");
    }

    const tickets: any = await this.showDatabase.getTickets(showId)

    if(tickets.length > 5000) {
        throw new RequestError("Ingressos esgotados")
    }

    const reserveDB: ITicketDB = {
      id: this.idGenerator.generate(),
      show_id: showId,
      user_id: payload.id,
    };

    await this.showDatabase.reserveTickets(reserveDB);

    const response: IAddReserveOutputDTO = {
      message: "Reserva realizada com sucesso",
    };

    return response;
  };

  public removeReserves = async (input: IRemoveReserveInputDTO) => {
    const { token, showId } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new UnauthorizedError("Não autenticado");
    }

    const showDB = await this.showDatabase.findShowById(showId);

    if (!showDB) {
      throw new NotFoundError("Show não encontrado");
    }

    const isAlreadyAddReserve = await this.showDatabase.findReserves(
      showId,
      payload.id
    );

    if (!isAlreadyAddReserve) {
      throw new NotFoundError("Ainda não reservou ingresso");
    }

    const reserveDB = await this.showDatabase.findTicketById(showId, payload.id);

    if (payload.role === USER_ROLES.NORMAL && reserveDB.user_id !== payload.id) {
        throw new Error("Erro: somente 'ADMIN' pode remover ingressos de qualquer usuário");
      }

    await this.showDatabase.removeReserve(showId, payload.id);

    const response: IRemoveReserveOutputDTO = {
      message: "Reserva removida com sucesso",
    };

    return response;
  };
}
