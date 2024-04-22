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
//* Remove item from basket using removeItem and expect array basketItems has decreased in length by 1

console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Remove item from basket using removeItem and expect array basketItems to have decreased in length by 1`
);
// Arrange
let basket = new Basket()
let testItem = new Item();
basket.addItem(testItem)
let expected = 0
let actual, result;

// Act
basket.removeBasketItem(testItem);
actual = basket.getBasketItems().length;
// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 1




//? TEST 2
//* Test that the removed item, which is an instance of Item, is actually not in the basket

console.log(`Test 2`);
console.log(`==================`);
console.log(`Test that item removed by addItem is actually no longer in the basket`);
// Arrange
//! testItem is defined in the test setup for test 1
basket = new Basket();
expected = true;
testItem = new Item();

// Act
basket.addItem(testItem);
actual = !basket.getBasketItems().includes(testItem);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? "\x1b[32mPass\x1b[0m" : "\x1b[31mFail\x1b[0m");
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 2
