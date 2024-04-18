import { assertEquals } from "./testing-framework.js";
import { basket } from "../src/index2.js";

// Arrange
let expected = basket.basketItems.length;
let actual, result;
let testItem = {};

// Act
basket.addItem(testItem);
basket.removeItem(testItem)
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
