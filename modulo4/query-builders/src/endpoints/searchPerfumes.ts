import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const searchPerfumes = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const query = req.query.q;
    const sort = req.query.sort || "name";
    const order = req.query.order || "asc";
    const limit = Number(req.query.limit) || 20;
    const page = Number(req.query.page) || 1;
    const offset = limit * (page - 1);

    if (query) {
      const result = await connection(TABLE_PERFUMES)
        .select()
        .where("name", "LIKE", `%${query}%`)
        .orWhere("brand", "LIKE", `%${query}%`)
        .orderBy(`${sort}`, `${order}`)
        .limit(limit)
        .offset(offset);

      res.status(200).send({ perfumes: result });
    }

    const result = await connection(TABLE_PERFUMES)
      .select("*")
      .orderBy(`${sort}`, `${order}`)
      .limit(limit)
      .offset(offset);
    res.status(200).send({ perfumes: result });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
