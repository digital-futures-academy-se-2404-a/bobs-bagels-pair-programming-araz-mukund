import { assertEquals, assertTrue } from "./testing-framework.js";
import basket from "../src/index3.js";

// AFTER EACH Function
const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testItem = undefined;
    basket.basketItems = [];
};

// TEST 1
// The basketItems array should not be able to contain any more than 30 items

console.log(`Test 1`);
console.log(`==================`);
console.log(`Test that only 30 elements are allowed in the basketItems array`);

// Arrange
let expected = 30;
let actual, result;
let testItem = {}

// Act
for (let index = 0; index < 31; index++) {
	basket.addItem(testItem);
}
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();

// TEST 2
// Test that there is a console log ("You already have 30 items in your basket!") if you try to add an item when 30 already exist in the basketItems array

console.log(`Test 2`);
console.log(`==================`);
console.log(
  `Test that there is a console log ("You already have 30 items in your basket!") if you try to add an item when 30 already exist in the basketItems array`
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
  if (message === "You already have 30 items in your basket!") {
    // Do something when the particular log message is encountered
		actual = true;
    // Call the original console.log function
    originalLog.apply(console, arguments);
  }
};

for (let index = 0; index < 31; index++) {
	basket.addItem(testItem);
}

console.log = originalLog;

// Assert
result = assertTrue(actual);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
console.log(`==================`);
