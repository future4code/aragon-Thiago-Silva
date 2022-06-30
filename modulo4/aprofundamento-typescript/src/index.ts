//_______________TYPE INFERENCE_______________
//Para evitar tipagens redundantes, podemos declarar uma variável diretamente com o tipo de valor que irá assumir.  
//O typescript é capaz de subentender o tipo.
const nome: string = "Labenu"
const nome2 = "Labenu"

//________________UNION TYPE___________________
//Union Type permite que uma variável possa assumir mais de um tipo. 
//Lembram do operador lógico || em Javascript, 
//que representa OU?  No Typescript utilizamos apenas | .
let nome3: string | undefined = "Lua"
let idade: number | undefined = 27
let id: number | string | undefined = 1

//________________TYPE ALIASES___________________
//Type Aliases é uma estrutura que podemos criar e reutilizá-la. 
//É apenas um "esqueleto" que definirá as propriedades que aquele tipo deve ter.

// type Usuario = {
//     nome: string,
//     idade: number,
//     id: number | string
// }

// const lua: Usuario = {
//     nome: "Lua",
//     idade: 27,
//     id: 1
// }

// function imprimeUsuario (usuario: Usuario) {
//     console.log(usuario)
// }

// imprimeUsuario(lua)


// //________________ENUM___________________
// //Em Typescript, temos uma estrutura de dados que permite a declaração de tipos de variáveis quando elas podem 
// //assumir valores restritos pré-definidos (dados que não mudam):

// enum TipoDeConta {
//     NORMAL = "Normal",
//     ADMIN = "Admin"
// }

// type Pessoa = {
//     id: number | string,
//     nome: string,
//     email: string,
//     senha: string,
//     tipoDeConta: TipoDeConta
// }

// type Normal = {
//     permissao: boolean
// }

// type Admin = {
//     senhaAdmin: string,
//     permissao: boolean
// }

// //_______________INTERSECTION TYPES___________________
// //Intersection Type cria um novo tipo combinando múltiplos types já existentes.
// //Assim como o Union Type está para OU, o Intersection Type está para E.
// type ContaNormal = Pessoa & Normal



// //lógica
// const vini: ContaNormal = {
//     id: 1,
//     nome: "Vini",
//     email: "vini@labenu.com",
//     senha: "husdhuhd",
//     tipoDeConta: TipoDeConta.NORMAL,
//     permissao: true
// } 

// //type
// type ContaAdmin = Pessoa & Admin

// //lógica
// const laura: ContaAdmin = {
//     id: 2,
//     nome: "Laura",
//     email: "laura@labenu.com",
//     senha: "skdojdoisd",
//     tipoDeConta: TipoDeConta.ADMIN,
//     permissao: true,
//     senhaAdmin: "skdifjosdskdo"
// } 

// //método normal
// //const array: string[] = []

// //type
// type TiposDeContas = ContaNormal[] & ContaAdmin[]

// //lógica
// const listaDeContas: TiposDeContas = []
// listaDeContas.push(vini)
// listaDeContas.push(laura)
// console.log(listaDeContas)