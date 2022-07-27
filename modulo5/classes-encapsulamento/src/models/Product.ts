export type TProduct = {
    id: string,
    name: string,
    price: number
}

export class Product{
    constructor(
    public id: string,
    public name: string,
    public price: number
    ) {
        this.id = id
        this.name = name
        this.price = price
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getPrice() {
        return this.price
    }

    public settId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setPrice(newPrice: number) {
        this.price = newPrice
    }
}