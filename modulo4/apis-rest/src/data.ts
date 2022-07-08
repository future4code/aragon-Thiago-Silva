// ## Exercício 1

// Crie um arquivo chamado data.ts que contenha e exporte o seguinte array de usuários:

// Dicas:

// - Cada usuário deve ser representado por um type User, com as propriedades definidas acima.
// - A propriedade ‘role’ deve ser um enum USER_ROLE com os seguintes valores possíveis: “ADMIN” ou “NORMAL”.

export enum USER_ROLE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User = {
    id: number,
    name: string,
    email: string,
    role: USER_ROLE,
    age: number,
}

export const users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        role: USER_ROLE.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        role: USER_ROLE.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        role: USER_ROLE.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        role: USER_ROLE.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        role: USER_ROLE.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        role: USER_ROLE.ADMIN,
        age: 60
    }
]