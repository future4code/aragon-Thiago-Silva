import { TClassroom } from "../models/Classroom"
import { BaseDatabase } from "./BaseDatabase"

export class ClassroomDatabase extends BaseDatabase {
    TABLE_NAME = "Labe_Classroom"
    public static TABLE_CLASSROOM = "Labe_Classroom"

    public async getAll() {
        return super.getAll()
    }

    public async create(classroom: TClassroom) {
        return super.create(classroom)
    }

    public async getItemById(id: string) {
        return super.getItemById(id)
    }
}