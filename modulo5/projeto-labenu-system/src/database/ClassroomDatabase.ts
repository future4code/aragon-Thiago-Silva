import { BaseDatabase } from "./BaseDatabase"

export class ClassroomDatabase extends BaseDatabase {
    public static TABLE_CLASSROOMS = "Labe_Classrooms"

    public async getAllClassrooms() {
        const result = await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .select()
        
        return result
    }
}