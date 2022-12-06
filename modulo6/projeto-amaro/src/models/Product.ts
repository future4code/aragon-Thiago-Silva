export interface IProductDB {
    id: string,
    name: string

}

export interface ITagDB {
    id: string,
    name: string
}

export interface IproductTagDB {
    id: string,
    product_id: string,
    tag_id: string
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private tag: string[] = []
    ) { }

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tag
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTag = (newTag: string[]) => {
        this.tag = newTag
    }

}

export interface ICreateProductInputDTO {
    token: string,
    name: string,
    tag: string[]
}

export interface ICreateProductOutputDTO {
    message: string,
    product: Product
}

export interface IGetProductInputDTO {
    token: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}


export interface IGetProductOutputDTO {
    products: Product[]
}

export interface IGetproductsDBDTO {
    order: string,
    sort: string,
    limit: number,
    offset: number
}
export interface IgetProductsInputDTO {
    token: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface IGetProductSearchInputDTO {
    token: string,
    name: string,
    id:string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface IGetSearchDBDTO {
    name: string,
    id:string,
    order: string,
    sort: string,
    limit: number,
    offset: number
}

export interface IGetProductsProduct {
    id:string,
    name: string
}

export interface IGetProductsByTagInputDTO {
    search:string
}


export interface IEditProductInputDTO {
    token: string,
    id: string,
    name: string
}
export interface IDeleteProductInputDTO {
    token:string,
    idToDelete:string
}