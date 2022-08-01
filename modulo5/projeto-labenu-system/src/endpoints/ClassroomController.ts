import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";
import { Classroom } from "../models/Classroom";

export class ClassroomController {
  public async getAllClassrooms(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const classroomDatabase = new ClassroomDatabase();
      const result = await classroomDatabase.getAllclassrooms();

      if (result === undefined) {
        errorCode = 404;
        throw new Error("Error: there are no classrooms registered.");
      }
      res
      .status(200)
      .send({ classrooms: result });
    } catch (error) {
      res
      .status(errorCode)
      .send({ message: error.message });
    }
  }

  public async getClassroomById(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const id = req.params.id;

      const classroomDatabase = new ClassroomDatabase();
      const result = await classroomDatabase.getClassroomById(id);

      if (result === undefined) {
        errorCode = 422;
        throw new Error("Error: classroom(id) not found.");
      }

      res
      .status(200)
      .send({ classroom: result });
    } catch (error) {
      res
      .status(errorCode)
      .send({ message: error.message });
    }
  }

  public async getActiveClassroom(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const classroomDatabase = new ClassroomDatabase();
      const result = await classroomDatabase
      .getActiveClassroom(
        "name",
        "module"
      );

      if (result === undefined) {
        errorCode = 404;
        throw new Error("Error: there are no active classrooms.");
      }

      res
      .status(200)
      .send({ classrooms: result });
    } catch (error) {
      res
      .status(errorCode)
      .send({ message: error.message });
    }
  }

  public async createClassrooms(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const { name, module } = req.body;

      if (!name || !module) {
        throw new Error("Error: missing parameters.");
      }

      if (typeof name !== "string" || typeof module !== "string") {
        throw new Error("Error: name and module must be a string.");
      }

      if (name.length <= 5 ) {
        errorCode = 422;
        throw new Error("Error: name must be a string longer then 5 characters.");
      }

      const classroom = new Classroom(
        Date.now().toString(),
        name, 
        module);

      const classroomDatabase = new ClassroomDatabase();
      await classroomDatabase.createClassroom(classroom);

      res.status(200).send({
        message: "Classroom successfully registered.",
        classroom: classroom,
      });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  public async updateModule(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const id = req.params.classroomId;
      const module = req.body.module;

      if (!module) {
        throw new Error("Error: missing parameters.");
      }

      const classroomDatabase = new ClassroomDatabase();
      const checkId = classroomDatabase.getClassroomById(id)

      if(checkId === undefined) {
        errorCode = 404
        throw new Error("Error: classroom (id) not found.");
        
      }

      await classroomDatabase.updateModule(id, module);

      res.status(200).send({ message: "Module updated successfully." });
    } catch (error) {
      res.status(errorCode).send({ 
        message: error.message, 
        warning: "Module must have enum values: '0', '1', '2', '3', '4', '5' or '6'."});
    }
  }

  public async deleteClassroom(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const id = req.params.classroomId

      if (id === undefined) {
        errorCode = 404
        throw new Error("Error: student (id) not found.");
      }

      const classroomDatabase = new ClassroomDatabase();
      await classroomDatabase.deleteClassroom(id);

      res.status(200).send({ message: "Classroom deleted successfully." });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}
