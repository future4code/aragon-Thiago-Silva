import { Request, Response } from "express"
import connection from "../database/connection"

export const deleteTasks = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const taskId = req.params.taskId as string
  
      const [ result ] = await connection.raw(`
      SELECT * FROM Tasks
      WHERE id = "${taskId}";
      `)
  
      const checkId = result[0]
  
      if (!checkId) {
        errorCode = 404
        throw new Error("TaskId doesnt exist")
      }
  
      await connection.raw(`
      DELETE FROM Responsibles
      WHERE taskId = "${taskId}";
      `)
      
      await connection.raw(`
      DELETE FROM Tasks
      WHERE id = "${taskId}";
      `)

      res.status(200).send({ mensagem: "Task deleted successfully." })
  
    } catch (error) {
      res.status(errorCode).send({ mensagem: error.message })
    }
  }