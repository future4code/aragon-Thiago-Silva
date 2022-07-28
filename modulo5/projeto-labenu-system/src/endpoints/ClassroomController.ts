import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";
import { Classroom } from "../models/Classroom";

export class ClassroomController {
  public async getAllClassrooms(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const classroomDatabase = new ClassroomDatabase();
      const result = await classroomDatabase.getAllclassrooms();

      res.status(200).send({ classrooms: result });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  public async getActiveClassroom(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const classroomDatabase = new ClassroomDatabase();
      const result = await classroomDatabase.getActiveClassroom("name", "module");

      res.status(200).send({ classrooms: result });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  public async createClassrooms(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const { name, module } = req.body;

      if (!name || !module) {
        throw new Error("Error: missing parameters.");
      }

      const classroom = new Classroom(
        Date.now().toString(),
        name,
        module
      )

      const classroomDatabase = new ClassroomDatabase();
      await classroomDatabase.createClassroom(classroom);

      res.status(200).send({ classroom: classroom });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  // public async updateModule(req: Request, res: Response) {
  //   let errorCode = 400;
  //   try {
  //     const id = req.params.id
  //     const module = req.body.module;

  //     if (!module) {
  //       throw new Error("Error: missing parameters.");
  //     }

  //    const newModule = {
  //     id: id,
      
  //    }
      
  //     const classroomDatabase = new ClassroomDatabase();
  //     await classroomDatabase.create(classroom);

  //     res.status(200).send({ classroom: classroom });
  //   } catch (error) {
  //     res.status(errorCode).send({ message: error.message });
  //   }
  // }

}