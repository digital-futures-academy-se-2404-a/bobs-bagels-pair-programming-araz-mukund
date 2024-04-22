import basket from "./basket.js";
import { item1, item2 } from "./item.js";

//* The actual program goes in index.js

basket.addItem(item1);
basket.addItem(item2);

console.log(basket.basketItems);