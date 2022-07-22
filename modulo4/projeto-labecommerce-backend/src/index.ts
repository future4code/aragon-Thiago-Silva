import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { createUsers } from './endpoints/createUsers'
import { searchUsers } from './endpoints/searchUsers'
import { createProducts } from './endpoints/createProducts'
import { searchProducts } from './endpoints/searchProducts'
import { registerPurchases } from './endpoints/registerPurchases'
import { searchUserPurchases } from './endpoints/searchUserPurchases'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)

app.post("/users", createUsers)

app.get("/users", searchUsers)

app.post("/products", createProducts)

app.get("/products", searchProducts)

app.post("/purchases", registerPurchases)

app.get("/users/:userId/purchases", searchUserPurchases)