import { assertEquals } from "../spec/test-framework/test-framework.js";
import {Basket} from "../src/basket.js";
import {Item} from "../src/item.js";


let input, actual, result, basket, originalLength, expected
let cleanup = () => {
    input = undefined
    actual = undefined
    result = undefined
    basket = undefined
    originalLength = undefined
    expected = undefined
                    }




/*
// Test 1
// Add an instance of Item to array basketItems (a property of an instance 
// of Basket) and expect the length of the array to have incremented by one

console.log(`Test 1 
Add an item to array basketItems of an instance of Basket and expect 
the length of the array to have incremented by one
`)
*/

// Arrange:
input = new Item("cornflakes")
actual, result
basket = new Basket([])
originalLength = basket.basketItems.length
expected = originalLength + 1 


// Act
// add the instance of Item to the basket:
basket.addItemToBasket(input)
// 
actual = basket.basketItems.length


// Assert
result = assertEquals(actual, expected)


// Report
// result ? console.log(`The result of this test is: PASS`) : console.log(`The result of this test is: FAIL`)

// ********************* end of Test 1  ********************* 



// Test 2
// Initially to ensure basket's basketItems contains an instance of 
// Item of name "cornflakes", then to add another item of the same name 
// and expect the length of the array to have incremented by one

cleanup()

console.log(`Test 2 
============================================================
This test ensures array basketItems of an instance of Basket 
already contains an instance of Item of name 'cornflakes' 
and then adds another instance of item of the same name to 
basketItems. The expectation is that the length of the array
will have incremented by one.`)

// Arrange
let item1 = new Item("cornflakes")
input = new Item("cornflakes")
basket = new Basket([item1])
expected = basket.basketItems.length + 1

// Act
// add the instance of Item to the basket:
basket.addItemToBasket(input)
actual = basket.basketItems.length

// Assert
result = assertEquals(actual, expected)


// Report
result ? console.log(`The result of this test is: PASS`) : console.log(`The result of this test is: FAIL`)


// ********************* end of Test 2  ********************* 