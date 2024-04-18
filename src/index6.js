const basket = {
  addItem: function (item) {
    if (!this.basketItems.includes(item)) {
      if (this.basketItems.length < 30) {
        this.basketItems.push(item);
      } else {
        console.log("You already have 30 items in your basket!");
      }
    }
  },
  removeItem: function (item) {
    const itemIndex = this.basketItems.indexOf(item);
    if (itemIndex !== -1) {
      this.basketItems.splice(itemIndex, 1);
    }
	},
  basketItems: [],
};

const bigBasket = {
  addItem: function (item) {
    if (!this.basketItems.includes(item)) {
      if (this.basketItems.length < 50) {
        this.basketItems.push(item);
      } else {
        console.log("You already have 50 items in your basket!");
      }
    }
  },
  removeItem: function (item) {
    const itemIndex = this.basketItems.indexOf(item);
    if (itemIndex !== -1) {
      this.basketItems.splice(itemIndex, 1);
    }
  },
  basketItems: [],
};

export { basket, bigBasket };
