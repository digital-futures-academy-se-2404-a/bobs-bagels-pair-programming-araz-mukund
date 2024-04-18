import { assertEquals, assertTrue } from "./testing-framework.js";
import { basket, bigBasket } from "../src/index5.js";

const afterEach = () => {
  expected = undefined;
  actual = undefined;
  result = undefined;
	testItem = undefined;
	basket.basketItems = [];
  bigBasket.basketItems = [];
};

// Test 1
// Test that the array length of basketItems for the small basket is not reduced when removing an item not already in the basket

console.log(`Test 1`);
console.log(`==================`);
console.log(
  `Test that the array length of basketItems is not reduced when removing an item not already in the basket`
);

// Arrange
let expected = 1;
let actual, result;
let testItem = {};
let notGoingInBasketItem = {};

// Act
basket.addItem(testItem);
basket.removeItem(notGoingInBasketItem);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();

// Test 2
// Test that the array length of basketItems for bigBasket is not reduced when removing an item not already in the basket

console.log(`Test 1`);
console.log(`==================`);
console.log(
  `Test that the array length of basketItems is not reduced when removing an item not already in the basket`
);

// Arrange
expected = 1;
actual, result;
testItem = {};
notGoingInBasketItem = {};

// Act
bigBasket.addItem(testItem);
bigBasket.removeItem(notGoingInBasketItem);
actual = bigBasket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();
