// require('dotenv').config({
//   path: './config/.development.env'
// })

// import { DataSource } from "typeorm";


module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "internal_notes",
    "entities": [
      "./src/modules/**/infra/typeorm/entities/*.ts"
    ],
    "migrations": [
      "./src/database/migrations/*.ts"
    ],
    "cli": {
      "migrationsDir": "./src/database/migrations"
    }
  }
  
  // export const connectionSource = new DataSource({
  //   migrationsTableName: 'migrations',
  //   type: 'postgres',
  //   host: 'localhost',
  //   port: 5432,
  //   username: 'postgres',
  //   password: 'postgres',
  //   database: 'internal_nontes',
  //   logging: false,
  //   synchronize: false,
  //   name: 'default',
  //   entities: ['src/**/**.entity{.ts,.js}'],
  //   migrations: ['src/database/migrations/**/*{.ts,.js}'],
  //   subscribers: ['src/subscriber/**/*{.ts,.js}'],
  // });