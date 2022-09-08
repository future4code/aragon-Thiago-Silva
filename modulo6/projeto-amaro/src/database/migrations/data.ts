import { IProductDB, IproductTagDB, ITagDB } from "../../models/Product"
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "101",
        name: "Thiago",
        email: "vernizzi@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "102",
        name: "Lorenzo",
        email: "lorenzo@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "103",
        name: "Camila",
        email: "camila@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }
]

export const products: IProductDB[] = [
    {
        "id": "8309",
        "name": "VESTIDO MOLETOM COM CAPUZ"
      },
      {
        "id": "8301",
        "name": "VESTIDO LONGO CREPE MANGA COMPRIDA"
      },
      {
        "id": "8300",
        "name": "VESTIDO MALHA COM FENDA"
      }
]

export const tags: ITagDB[] = [
    {
        id: "201",
        name: "casual"
    },
    {
        id: "202",
        name: "balada"
    }
]

export const productsTags: IproductTagDB[] = [
    {
        id: "301",
        product_id: "8309",
        tag_id: "201"
    },
    {
        id: "302",
        product_id: "8301",
        tag_id: "202"
    },
    {
        id: "303",
        product_id: "8300",
        tag_id: "201"
    },
]