class Basket {

    #basketItems = []

    getBasketItems() {
        return this.#basketItems
    }

    addItem(item) {
        this.#basketItems.push(item)
        console.log(`In addItem. #basketItems.length is: ${this.#basketItems.length}`)
    }

}
export default Basket

