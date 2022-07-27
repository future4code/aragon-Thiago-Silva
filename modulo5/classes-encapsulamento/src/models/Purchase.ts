// type para tipar no typescript com camelCase
export type TPurchase = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}

export class Purchase{
    constructor(
        public id: string,
        public userId: string,
        public productId: string,
        public quantity: number,
        public totalPrice: number
    ) {
        this.id = id
        this.userId = userId
        this.productId = productId
        this.quantity = quantity
        this.totalPrice = totalPrice
    }

    public getId() {
        return this.getId
    }

    public getUserId() {
        return this.getUserId
    }

    public getProductId() {
        return this.getProductId
    }

    public getQuantity() {
        return this.getQuantity
    }

    public getTotalPrice() {
        return this.getTotalPrice
    }

    public settId(newId: string) {
        this.id = newId
    }

    public setUserId(newUserId: string) {
        this.userId = newUserId
    }

    public setProductId(newProductId: string) {
        this.userId = newProductId
    }

    public setQuantity(newQuantity: number) {
        this.quantity = newQuantity
    }

    public setTotalPrice(newTotalPrice: number) {
        this.totalPrice = newTotalPrice
    }
}


// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}