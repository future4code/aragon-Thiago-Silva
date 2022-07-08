// ## Exercício 6

// Construa um endpoint para deletar um usuário 
// baseado em sua id.

// Entradas → Identificação do usuário.

// Saídas → Mensagem de sucesso da operação.

// Dicas:

// - Utilize o params para identificar o usuário 
// a ser removido.
// - Utilize o método .filter() para promover 
// a remoção.


import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

type Usuarios = {
    id:number,
    nome: string,
    phone: number,
    email: string
}

const usuarios:Usuarios[] = [
    {
        id: 1,
        nome: "Thiago",
        phone: 11-9111-1111,
        email: "thiago@gmail.com"
    },
    {
        id: 2,
        nome: "Lorenzo",
        phone: 11-9222-2222,
        email: "lorenzo@gmail.com"
    },
    {
        id: 3,
        nome: "Camila",
        phone: 11-9333-3333,
        email: "camila@gmail.com"
    }
]

app.listen(3003, ()=> console.log("O servidor esta rodando na porta 3003"))
app.delete('/usuarios/:id', (req: Request, res: Response) => {

    const id = Number(req.params.id)

    const index = usuarios.findIndex(usuario => usuario.id === id)

    usuarios.splice(index,1)

    res.status(200).send(usuarios)
})