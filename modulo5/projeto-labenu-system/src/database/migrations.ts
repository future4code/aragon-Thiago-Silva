import { BaseDatabase } from "./BaseDatabase"
import { ClassroomDatabase } from "./ClassroomDatabase"
import { classroom, hobbies, students } from "./data"
import { HobbiesDatabase } from "./HobbiesDatabase"
import { StudentsDatabase } from "./StudentsDatabase"

    class Migrations extends BaseDatabase {
        protected  TABLE_NAME = ""

    public async execute() {
        try {
            await this.createTables()
            console.log("Tables created successfully.")
            await this.insertData()
            console.log("Tables populated successfully.");
        } catch (error) {
            console.log(error.sql || error.message);        
        } finally {
            console.log("Ending connection...");
            BaseDatabase.connection.destroy()
            console.log("Migrations completed");                
        }
    }
        
        private async createTables()  {
            await BaseDatabase.connection.raw(`
    DROP TABLE IF EXISTS 
    ${ClassroomDatabase .TABLE_CLASSROOM}, 
    ${StudentsDatabase. TABLE_STUDENTS}, 
    ${HobbiesDatabase.TABLE_HOBBIES};

    CREATE TABLE IF NOT EXISTS ${HobbiesDatabase.TABLE_HOBBIES}(
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL UNIQUE,
    );

    CREATE TABLE IF NOT EXISTS ${StudentsDatabase.TABLE_STUDENTS}(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        birthdate VARCHAR(255) NOT NULL,
        FOREIGN KEY (hobbies_id) REFERENCES ${HobbiesDatabase.TABLE_HOBBIES}(id),
        FOREIGN KEY (classroom_id) REFERENCES ${ClassroomDatabase.TABLE_CLASSROOM}(id)
    ); 

    CREATE TABLE IF NOT EXISTS ${ClassroomDatabase.TABLE_CLASSROOM}(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
    module ENUM NOT NULL
        FOREIGN KEY (student_id) REFERENCES ${StudentsDatabase.TABLE_STUDENTS}(id)
    );
        `)
    }

    private async insertData () {
            await BaseDatabase
            .connection(HobbiesDatabase.TABLE_HOBBIES)
                .insert(hobbies)
               
            await BaseDatabase
            .connection(StudentsDatabase.TABLE_STUDENTS)
                .insert(students)
            

            await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOM)
                .insert(classroom)
    }
}

const migrations = new Migrations()
migrations.execute()