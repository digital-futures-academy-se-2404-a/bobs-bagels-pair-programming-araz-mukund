class Basket {

    #basketItems = []

    getBasketItems() {
        return this.#basketItems
    }

    addItem(item) {
        this.#basketItems.push(item)
    }

}
export default Basket

