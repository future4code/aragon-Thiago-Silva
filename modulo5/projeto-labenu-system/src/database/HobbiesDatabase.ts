import { THobbies } from "../models/Hobbies"
import { BaseDatabase } from "./BaseDatabase"

export class HobbiesDatabase extends BaseDatabase {
    TABLE_NAME = "Labe_Hobbies"
    public static TABLE_HOBBIES = "Labe_Hobbies"

    public async getAll() {
        return super.getAll()
    }

    public async create(hobby: THobbies) {
        return super.create(hobby)
    }

    public async getItemById(id: string) {
        return super.getItemById(id)
    }
}