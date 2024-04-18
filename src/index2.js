const basket = {
	addItem: function (item) {
		this.basketItems.push(item);
	},
	removeItem: function (item) {
		const itemIndex = this.basketItems.indexOf(item)
		this.basketItems.splice(itemIndex, 1)
	},
  basketItems: [],
};

export default basket;
