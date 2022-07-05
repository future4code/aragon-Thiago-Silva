// ## Exercício 5

// Construa um endpoint que permita alterar o 
// telefone de um usuário baseado em sua id.

// Entradas → Identificação do usuário e novo 
// valor para telefone do usuário.

// Saídas → Mensagem de sucesso e usuário com 
// valor alterado.

// Dicas:

// - Utilize o params para identificar o usuário 
// a ser alterado.
// - Utilize o body para receber o novo telefone
//  do usuário.
// - Utilize o método .map() para identificar
//  o usuário selecionado e efetuar a modificação.

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

app.get('/usuarios/:id', (req: Request, res: Response) => {
const id = Number(req.params.id)
const {phone} = req.body

const updatePhone = usuarios.map( usuario => {
    if(usuario.id === id){
        return {...usuario, phone:phone}
    }else{
        return usuario
    }
})
    usuarios = updatePhone

    const updateUsuario = usuarios.filter(usuario => usuario.id === id)

    res.status(201).send({mensage:"Numero atualizado com sucesso!", usuario:updateUsuario[0]})
})