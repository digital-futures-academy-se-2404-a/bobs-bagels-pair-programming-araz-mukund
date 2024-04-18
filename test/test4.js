import { assertEquals, assertTrue } from "./testing-framework.js";
import {basket, bigBasket} from "../src/index4.js";

// AFTER EACH Function
const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testItem = undefined;
    bigBasket.basketItems = [];
};

// TEST 1

console.log(`Test 1`);
console.log(`==================`);
console.log(`Test that a bigBasket can contain more 30 items`);

// Arrange
let expected = 31;
let actual, result;
let testItem = {}

// Act
for (let index = 0; index < 31; index++) {
	bigBasket.addItem(testItem);
}
actual = bigBasket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();

// TEST 2

console.log(`Test 2`);
console.log(`==================`);
console.log(`Test that a bigBasket can contain up to 50 items`);

// Arrange
expected = 50;
actual, result;
testItem = {}

// Act
for (let index = 0; index < 50; index++) {
	bigBasket.addItem(testItem);
}
actual = bigBasket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();

// TEST 3
// Test that the basket cannot hold no more than 50 items

console.log(`Test 3`);
console.log(`==================`);
console.log(`Test that only 50 elements are allowed in the basketItems array`);

// Arrange
expected = 50;
actual, result;
testItem = {}

// Act
for (let index = 0; index < 51; index++) {
	bigBasket.addItem(testItem);
}
actual = bigBasket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();

// TEST 4
// Test that there is a console log ("You already have 50 items in your basket!") if you try to add an item when 30 already exist in the basketItems array

console.log(`Test 4`);
console.log(`==================`);
console.log(
  `Test that there is a console log ("You already have 50 items in your basket!") if you try to add an item when 30 already exist in the basketItems array`
);
console.log(`==================`);
console.log(`Your log:`)

// Arrange
actual = false;
testItem = {}

// Act
const originalLog = console.log;

console.log = function (message) {
  // Check if the message matches the one you're interested in
  if (message === "You already have 50 items in your basket!") {
    // Do something when the particular log message is encountered
		actual = true;
    // Call the original console.log function
    originalLog.apply(console, arguments);
  }
};

for (let index = 0; index < 51; index++) {
	bigBasket.addItem(testItem);
}

console.log = originalLog;

// Assert
result = assertTrue(actual);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
console.log(`==================`);
