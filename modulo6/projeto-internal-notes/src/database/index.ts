import { DataSource } from "typeorm"
export const AppDataSource = new DataSource({
    "type": "postgres",
    "host": process.env.HOST,
    "port": 5432,
    "username": process.env.PG_USER,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "entities": [
        __dirname + '/../models/*.{js,ts}'
    ],
    "migrations": [
      "../database/migrations/*.ts"
    ]
  })

AppDataSource.initialize()
    .then(() => {
        console.log("Conexão com banco estabelecida!")
    })
    .catch((err) => {
        console.error("Erro ao criar conexão com o BD", err)
    })