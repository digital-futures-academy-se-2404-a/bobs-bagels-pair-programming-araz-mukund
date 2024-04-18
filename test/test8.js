import { assertEquals } from "./testing-framework.js";
import { basket, bigBasket } from "../src/index8.js";

const afterEach = () => {
  expected = undefined;
  actual = undefined;
  result = undefined;
  testItem = undefined;
  basket.basketItems = [];
  bigBasket.basketItems = [];
};

// Test 1
// Test that you can get the total price of the small basket

console.log(`Test 1`);
console.log(`==================`);
console.log(
  `Test that you can get the total price of the small basket`
);

// Arrange
let expected = 4;
let actual, result;
let testItem = {
  name: "bagel",
  price: 1,
};
let testItem2 = {
  name: "bananas",
  price: 2,
};
let testItem3 = {
  name: "bread",
  price: 1,
};

// Act
basket.addItem(testItem);
basket.addItem(testItem2);
basket.addItem(testItem3);
actual = basket.getTotalPrice();

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();

// Test 2
// Test that you can get the total price of the bigBasket

console.log(`Test 1`);
console.log(`==================`);
console.log(`Test that you can get the total price of the bigBasket`);

// Arrange
expected = 4;
actual, result;
testItem = {
  name: "bagel",
  price: 1,
};
testItem2 = {
  name: "bananas",
  price: 2,
};
testItem3 = {
  name: "bread",
  price: 1,
};

// Act
basket.addItem(testItem);
basket.addItem(testItem2);
basket.addItem(testItem3);
actual = basket.getTotalPrice();

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();
