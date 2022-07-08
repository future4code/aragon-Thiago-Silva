import express, { Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))

app.get("/home", (req:Request, res:Response) => {
    res.send("Servidor funcionando")
})
