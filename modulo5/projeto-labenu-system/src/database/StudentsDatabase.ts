import { TStudent } from "../models/Student"
import { BaseDatabase } from "./BaseDatabase"

export class StudentsDatabase extends BaseDatabase {
    TABLE_NAME = "Labe_Students"
    public static TABLE_STUDENTS = "Labe_Students"

    public async getAll() {
        return super.getAll()
    }

    public async create(student: TStudent) {
        return super.create(student)
    }

    public async getItemById(id: string) {
        return super.getItemById(id)
    }
}