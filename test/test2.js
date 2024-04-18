import { assertEquals, assertTrue } from "./testing-framework.js";
import basket from "../src/index2.js";

// AFTER EACH Function
const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testItem = undefined;
    basket.basketItems = [];
};

// TEST 1
// Add an item to the basket then remove it and expect the length of array (basketItems) to have decreased by 1

console.log(`Test 1 for user story 2`);
console.log(`==================`);
console.log(`Add an item to the basket then remove it and expect the length of array (basketItems) to have decreased by 1`);

// Arrange
let expected = 0;
let actual, result;
let testItem = {}

// Act
basket.addItem(testItem);
basket.removeItem(testItem)
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
// Test that the item doesn't exist in the basket after it is removed

console.log(`Test 2 for user story 2`);
console.log(`==================`);
console.log(`Test that the item doesn't exist in the basket after it is removed`);

// Arrange
expected = true;
testItem = {}

// Act
basket.addItem(testItem);
basket.removeItem(testItem);

// Assert
actual = !basket.basketItems.includes(testItem)
result = assertTrue(actual);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
