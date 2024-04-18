import { assertEquals, assertTrue } from "./testing-framework.js";
import { basket, bigBasket } from "../src/index7.js";

const afterEach = () => {
  expected = undefined;
  actual = undefined;
  result = undefined;
  testItem = undefined;
  basket.basketItems = [];
  bigBasket.basketItems = [];
};

// Test 1
// Test that the basket has a getPrice function

console.log(`Test 1`);
console.log(`==================`);
console.log(`Test that you can get the price of an item through a getPrice function in the basket`);

// Arrange
let expected = 1;
let actual, result;
let testItem = {
  name: "bagel",
  price: 1,
};

// Act
basket.addItem(testItem);
actual = basket.getPrice(testItem)

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();

// Test 2
// Test that the big basket has a getPrice function

console.log(`Test 1`);
console.log(`==================`);
console.log(
  `Test that you can get the price of an item through a getPrice function in the basket`
);

// Arrange
expected = 1;
actual, result;
testItem = {
  name: "bagel",
  price: 1,
};

// Act
bigBasket.addItem(testItem);
actual = bigBasket.getPrice(testItem);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();
