import { Request, Response } from "express";
import { StudentsDatabase } from "../database/StudentsDatabase";
import { Student } from "../models/Student";

export class StudentController {
  public async getAllStudents(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const search = req.query.q as string;
      if (search) {
        const studentDatabase = new StudentsDatabase();
        const result = await studentDatabase.getStudentByName(search);

        if (result.length === 0) {
          errorCode = 404;
          throw new Error(
            "Error: the data searched doesn't match the registered student's name."
          );
        }

        res.status(200).send({ students: result });
      }

      const studentDatabase = new StudentsDatabase();
      const result = await studentDatabase.getAllStudents();

      res.status(200).send({ students: result });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  public async getStudentsByClassroom(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const classroom_id = req.params.classroom_id;

      const studentDatabase = new StudentsDatabase();
      const result = await studentDatabase.getStudentsByClassroom(classroom_id);

      if (result === undefined) {
        errorCode = 404;
        throw new Error("Error: classroom (id) not found.");
      }

      res.status(200).send({ students: result });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  public async createStudents(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const { name, email, birthdate, classroom_id } = req.body;

      if (!name || !email || !birthdate) {
        throw new Error("Error: missing parameters.");
      }

      if (typeof name !== "string" || typeof email !== "string") {
        errorCode = 422;
        throw new Error("Error: name and email must be a string.");
      }

      if (!email.includes("@")) {
        errorCode = 422;
        throw new Error("Email must have @");
      }

      const studentDatabase = new StudentsDatabase();
      const checkEmail = await studentDatabase.getStudentEmail(email);
      console.log(checkEmail);
      
      if (checkEmail[0]) {
        errorCode = 422;
        throw new Error("email already exists.");
      }

      const student = new Student(
        Date.now().toString(),
        name,
        email,
        birthdate,
        classroom_id
      );

      await studentDatabase.createStudent(student);

      res
        .status(200)
        .send({ message: "Student created successfully.", student: student });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  public async updateClassroom(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const id = req.params.studentId;
      const classroom_id = req.body.classroom_id;

      if (!classroom_id) {
        throw new Error("Error: missing parameters.");
      }

      if (typeof classroom_id !== "string") {
        throw new Error("Error: classroom_id must be a string.");
      }

      const studentDatabase = new StudentsDatabase();
      const checkId = await studentDatabase.getStudentsById(id);

      if(checkId === undefined) {
        errorCode = 404
        throw new Error("Error: studant (id) not found.");
        
      }
     
      await studentDatabase.updateClassroom(id, classroom_id);

      res.status(200).send({ message: "Classroom_id updated successfully." });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }

  public async deleteStudent(req: Request, res: Response) {
    let errorCode = 400;
    try {
      const id = req.params.studentId;

      const studentDatabase = new StudentsDatabase();
      const checkId = await studentDatabase.deleteStudent(id);

      // if (checkId === undefined) {
      //   errorCode = 404;
      //   throw new Error("Error: student (id) not found.");
      // }

      res.status(200).send({ message: "Student deleted successfully." });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}
