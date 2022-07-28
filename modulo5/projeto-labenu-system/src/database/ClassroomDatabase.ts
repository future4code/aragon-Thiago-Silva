import { BaseDatabase } from "./BaseDatabase";
import { classroom } from "./migrations/data";

export class ClassroomDatabase extends BaseDatabase {
  public static TABLE_CLASSROOMS = "Labe_Classrooms";

  public async getAllclassrooms() {
    const result = await BaseDatabase
       .connection(ClassroomDatabase.TABLE_CLASSROOMS)
       .select()

    return result
 }

 public async createClassroom(item: any) {
  await BaseDatabase
     .connection(ClassroomDatabase.TABLE_CLASSROOMS)
     .insert(classroom)
}

  public async getActiveClassroom(name: string, module: string) {
    const result = await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
      .select(name, module)
      .where("module", "!=", "0");

    return result;
  }
}
