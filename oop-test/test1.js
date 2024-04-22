import { assertEquals } from "../test/testing-framework.js";
import Basket from "../oop-src/basket-class.js";
import Item from  "../oop-src/item-class.js"

// AFTER EACH Function
const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testItem = undefined;
    basket.basketItems = [];
};

//? TEST 1
//* Add item to basket using addItem and expect array (basketItems) has increased in length by 1

console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Add item to basket using addItem and expect array (basketItems) has increased in length by 1`
);
// Arrange
const basket = new Basket()
let expected = basket.getBasketItems.length + 1
let testItem = new Item();
let actual, result;

// Act
basket.addItem(testItem);
actual = basket.getBasketItems().length;
// Assert
result = assertEquals(actual, expected);

// Report
console.log("\x1b[31m%s\x1b[0m", "This text will be red.");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 1



/*
//? TEST 2
//* Test that item passed to addItem is actually added to the basket

console.log(`Test 2`);
console.log(`==================`);
console.log(`Test that item passed to addItem is actually added to the basket`);
// Arrange
//! testItem is defined in the test setup for test 1
basket = new Basket();
expected = true;
testItem = new testItem();

// Act
basket.addItem(testItem);
actual = basket.getBasketItems().includes(testItem);

// Assert
result = assertEquals(actual, expected);

// Report
console.log("\x1b[31m%s\x1b[0m", "This text will be red.");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 2
*/