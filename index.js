export class Basket {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }
}

export class Item {
	constructor() { }
}


export function addItemToBasket(basket, item) {
	basket.addItem(item)
	return ("added item to basket")
}
