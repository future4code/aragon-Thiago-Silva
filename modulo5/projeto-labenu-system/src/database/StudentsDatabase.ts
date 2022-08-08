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

  public async getStudentByName(search: string) {
    const result = await BaseDatabase.connection(
      StudentsDatabase.TABLE_STUDENTS
    ).where("name", "LIKE", `%${search}%`);

    return result;
  }

  public async getStudentsById(id: string) {
    const result = await BaseDatabase.connection(
      StudentsDatabase.TABLE_STUDENTS
    )
      .select("*")
      .where("id", "=", `${id}`);
    return result;
  }

  public async getStudentsByClassroom(classroom_id: string) {
    const result = await BaseDatabase.connection(
      StudentsDatabase.TABLE_STUDENTS
    )
      .select()
      .where("classroom_id", "=", `${classroom_id}`);
    return result;
  }

  public async createStudent(student: Student) {
    await BaseDatabase.connection(StudentsDatabase.TABLE_STUDENTS).insert(
      student
    );
  }

  public async getStudentEmail(email:string){
    const findEmail = await BaseDatabase
    .connection(StudentsDatabase.TABLE_STUDENTS)
    .select()
    .where("email","=",`${email}`)
    return findEmail
}

  public async updateClassroom(id: string, newClassroom_id: string) {
    await BaseDatabase.connection(StudentsDatabase.TABLE_STUDENTS)
      .update({ classroom_id: newClassroom_id })
      .where({ id: id });
  }

  public async deleteStudent(studentId: string) {
    await BaseDatabase.connection(StudentsDatabase.TABLE_STUDENTS)
      .delete("*")
      .where({ id: studentId });
  }
}
