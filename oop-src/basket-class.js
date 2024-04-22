class Basket {
  #basketItems = [];

  getBasketItems() {
    return this.#basketItems;
  }

  addItem(item) {
    this.#basketItems.push(item);
    // console.log(
    //   `In addItem. #basketItems.length is: ${this.#basketItems.length}`
    // );
  }

  removeBasketItem(item) {
    const itemIndex = this.#basketItems.indexOf(item);
    this.#basketItems.splice(itemIndex, 1);
  }
}

export default Basket;
