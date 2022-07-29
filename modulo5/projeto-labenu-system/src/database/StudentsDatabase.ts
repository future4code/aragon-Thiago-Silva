import { Student } from "../models/Student";
import { BaseDatabase } from "./BaseDatabase";
import { students } from "./migrations/data";
export class StudentsDatabase extends BaseDatabase {
  protected TABLE_NAME = "Labe_Students";
  public static TABLE_STUDENTS = "Labe_Students";
  public static TABLE_HOBBIES = "Labe_Hobbies";
  public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies";

  public async getAllStudents() {
    const result = await BaseDatabase.connection(
      StudentsDatabase.TABLE_STUDENTS
    ).select();

    return result;
  }

  public async getStudentByname(q:string){
    const result = await BaseDatabase
    .connection(StudentsDatabase.TABLE_STUDENTS)
    .where("name","LIKE",`%${q}%`)

    return result
}

  public async createStudent(student: Student) {
    await BaseDatabase
    .connection(StudentsDatabase.TABLE_STUDENTS)
    .insert(student);
  }
}
