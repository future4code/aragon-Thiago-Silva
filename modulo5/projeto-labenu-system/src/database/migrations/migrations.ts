import { BaseDatabase } from "../BaseDatabase"
import { ClassroomDatabase } from "../ClassroomDatabase"
import { StudentDatabase } from "../StudentsDatabase"
import { classroom, hobbies, students, studentsHobbies } from "./data"


class Migrations extends BaseDatabase {
    public async execute() {
        try {
            await this.createTables()
            console.log("Tables created successfully")
            await this.insertData()
            console.log("Tables populated successfully")
        } catch (error) {
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Migrations completed.")
        }
    }

    private async createTables() {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS 
            ${StudentDatabase.TABLE_STUDENTS_HOBBIES},
            ${StudentDatabase.TABLE_STUDENTS},
            ${StudentDatabase.TABLE_HOBBIES},
            ${ClassroomDatabase.TABLE_CLASSROOMS};
        
        CREATE TABLE IF NOT EXISTS ${ClassroomDatabase.TABLE_CLASSROOMS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            module ENUM("0", "1", "2", "3", "4", "5", "6") DEFAULT "0" NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${StudentDatabase.TABLE_STUDENTS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            birthdate DATE NOT NULL,
            classroom_id VARCHAR(255) DEFAULT NULL,
            FOREIGN KEY (classroom_id) REFERENCES ${ClassroomDatabase.TABLE_CLASSROOMS}(id)
        );

        CREATE TABLE IF NOT EXISTS ${StudentDatabase.TABLE_HOBBIES}(
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) UNIQUE NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${StudentDatabase.TABLE_STUDENTS_HOBBIES}(
            student_id VARCHAR(255) NOT NULL,
            hobby_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (student_id) REFERENCES ${StudentDatabase.TABLE_STUDENTS}(id),
            FOREIGN KEY (hobby_id) REFERENCES ${StudentDatabase.TABLE_HOBBIES}(id)
        );
        `)
    }

    private async insertData() {
        await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .insert(classroom)

        await BaseDatabase
            .connection(StudentDatabase.TABLE_STUDENTS)
            .insert(students)

        await BaseDatabase
            .connection(StudentDatabase.TABLE_HOBBIES)
            .insert(hobbies)
        
        await BaseDatabase
            .connection(StudentDatabase.TABLE_STUDENTS_HOBBIES)
            .insert(studentsHobbies)
    }
}

const migrations = new Migrations()
migrations.execute()