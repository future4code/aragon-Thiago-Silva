import { BaseDatabase } from "./BaseDatabase";
import { classroom } from "./migrations/data";

export class ClassroomDatabase extends BaseDatabase {
  protected TABLE_NAME = "Labe_Classrooms";
  public static TABLE_CLASSROOMS = "Labe_Classrooms";

  public async getAllclassrooms() {
    const result = await BaseDatabase.connection(
      ClassroomDatabase.TABLE_CLASSROOMS
    )
    .select("*");

    return result;
  }

  public async createClassroom(classroom: any) {
    await BaseDatabase
    .connection(ClassroomDatabase.TABLE_CLASSROOMS)
    .insert(
      classroom
    );
  }

  public async getActiveClassroom(name: string, module: string) {
    const result = await BaseDatabase
    .connection(
      ClassroomDatabase.TABLE_CLASSROOMS
    )
      .select(name, module)
      .where("module", "!=", "0");

    return result;
  }

  public async getClassroomById(id: string) {
    const result = await BaseDatabase.connection(
      ClassroomDatabase.TABLE_CLASSROOMS
    )
      .select("*")
      .where({ id: id });

    return result[0];
  }

  public async updateModule(id: string, newModule: string) {
    await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
      .update({ module: newModule })
      .where({ id: id });
  }

  public async deleteClassroom(classroomId: string) {
    await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
      .delete("*")
      .where({ id: classroomId });
  }
}
