const basket = {
  addItem: function (item) {
    if (this.basketItems.length < 30) {
      this.basketItems.push(item);
		} else {
			console.log("You already have 30 items in your basket!");
		}
  },
  removeItem: function (item) {
    const itemIndex = this.basketItems.indexOf(item);
    this.basketItems.splice(itemIndex, 1);
  },
  basketItems: [],
};

export default basket;
