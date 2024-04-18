import { assertEquals, assertTrue } from "./testing-framework.js";
import { Basket, Item, addItemToBasket } from "./index.js";

// Arrange
const basket = new Basket();
const item = new Item();
const expected = "added item to basket";
let actual, result;
// const input = new Item();
// const expected = [item]


// Act
actual = addItemToBasket(basket, item)
// actual = basket.addItemToBasket(basket, item)

// Assert
result = assertEquals(actual, expected);

console.log(result);



