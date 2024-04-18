import { assertEquals, assertTrue } from "./testing-framework.js";
import { basket, bigBasket } from "../src/index6.js";

const afterEach = () => {
  expected = undefined;
  actual = undefined;
  result = undefined;
  testItem = undefined;
  basket.basketItems = [];
  bigBasket.basketItems = [];
};

// Test 1
// Test that the array length of the small basket is not increased when adding a duplicate item

console.log(`Test 1`);
console.log(`==================`);
console.log(
  `Test that the array length of basketItems for the small basket is not reduced when removing an item not already in the basket`
);

// Arrange
let expected = 1;
let actual, result;
let testItem = {};

// Act
basket.addItem(testItem);
basket.addItem(testItem);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();

// Test 1
// Test that the array length of the small basket is not increased when adding a duplicate item

console.log(`Test 2`);
console.log(`==================`);
console.log(
  `Test that the array length of basketItems for the bigBasket is not reduced when removing an item not already in the basket`
);

// Arrange
expected = 1;
actual, result;
testItem = {};

// Act
basket.addItem(testItem);
basket.addItem(testItem);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();
