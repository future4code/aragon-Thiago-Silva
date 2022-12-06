import { BaseDatabase } from "../BaseDatabase"
import { ProductDatabase } from "../ProductDatabase"
import { UserDatabase } from "../UserDatabase"
import { products, tags, users, productsTags } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCT_TAGS};
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_TAGS};
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCTS};
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCTS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_TAGS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCT_TAGS}(
            id VARCHAR(255) PRIMARY KEY,
            product_id VARCHAR(255) NOT NULL,
            tag_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (product_id)REFERENCES ${ProductDatabase.TABLE_PRODUCTS}(id),
            FOREIGN KEY (tag_id)REFERENCES ${ProductDatabase.TABLE_TAGS}(id)
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)

        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert(products)

        await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS)
        .insert(tags) 

        await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCT_TAGS)
        .insert(productsTags)
    }
}

const migrations = new Migrations()
migrations.execute()
