import { Request, Response } from "express";
import { StudentsDatabase } from "../database/StudentsDatabase";
import { Student } from "../models/Student";

export class StudentController {
    public async createStudents( req: Request , res: Response ) {
        let errorCode = 400;
        try {
          const { name, email, birthdate, classroom_id } = req.body;
    
          if (!name || !email || !birthdate ) {
            throw new Error("Error: missing parameters.");
          }
    
          const student = new Student(
            Date.now().toString(),
            name,
            email,
            birthdate,
            classroom_id
          )
    
          const studentsDatabase = new StudentsDatabase();
          await studentsDatabase.createStudent(student);
    
          res.status(200).send({ message: "Student created successfully.", student: student });
        } catch (error) {
          res.status(errorCode).send({ message: error.message });
        }
      }
}