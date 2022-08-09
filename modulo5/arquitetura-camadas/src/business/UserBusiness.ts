import { RecipeDatabase } from "../database/RecipeDatabase"
import { UserDatabase } from "../database/UserDatabase"
import { User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    public signup = async (input: any) => {
        const nickname = input.nickname
        const email = input.email
        const password = input.password

        if (!nickname || !email || !password) {
            throw new Error("Parâmetros faltando")
        }

        if (typeof nickname !== "string") {
            throw new Error("Parâmetro 'nickname' deve ser uma string")
        }

        if (typeof email !== "string") {
            throw new Error("Parâmetro 'email' deve ser uma string")
        }

        if (typeof password !== "string") {
            throw new Error("Parâmetro 'password' deve ser uma string")
        }

        if (nickname.length < 3) {
            throw new Error("O parâmetro 'nickname' deve possuir ao menos 3 caracteres")
        }

        if (password.length < 6) {
            throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User(
            id,
            nickname,
            email,
            hashPassword,
            USER_ROLES.NORMAL
        )

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            message: "Cadastro realizado com sucesso",
            token
        }

        return response
    }

    public login = async (input: any) => {
        const email = input.email
        const password = input.password

        if (!email || !password) {
            throw new Error("Email ou senha faltando")
        }

        if (typeof email !== "string") {
            throw new Error("Parâmetro 'email' deve ser uma string")
        }

        if (typeof password !== "string") {
            throw new Error("Parâmetro 'password' deve ser uma string")
        }

        if (password.length < 6) {
            throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
        }

        const userDatabase = new UserDatabase()
        const userDB = await userDatabase.findByEmail(email)

        if (!userDB) {
            throw new Error("Email não cadastrado")
        }

        const user = new User(
            userDB.id,
            userDB.nickname,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const hashManager = new HashManager()
        const isPasswordCorrect = await hashManager.compare(
            password,
            user.getPassword()
        )

        if (!isPasswordCorrect) {
            throw new Error("Senha inválida")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            message: "Login realizado com sucesso",
            token
        }

        return response
    }

    public deleteUser = async (input: any) => {
        const token = input.token
        const idToDelete = input.idToDelete

        if (!token) {
            throw new Error("Token faltando")
        }

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new Error("Somente admins podem deletar users")
        }

        const userDatabase = new UserDatabase()
        const userDB = await userDatabase.findById(idToDelete)

        if (!userDB) {
            throw new Error("User a ser deletado não existe")
        }

        const userToDelete = new User(
            userDB.id,
            userDB.nickname,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const recipeDatabase = new RecipeDatabase()
        await recipeDatabase.deleteRecipesFromUser(userToDelete.getId())

        await userDatabase.deleteUserById(userToDelete.getId())

        const response = {
            message: "User deletado com sucesso"
        }

        return response
    }
}