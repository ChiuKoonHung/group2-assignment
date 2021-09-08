// 1. Import tax-calculator.js using CommonJS
let calculate = require("./tax-calculator.cjs");

const cart = [
    {
        item:"Toy",
        price:29.90
    },
    {
        item:"Back Pack",
        price:59.90
    },
    {
        item:"Pencil Case",
        price:12.90
    }
];

// 2. Use array iteration method to produce an amount payable using the property "price".
let finalPrice = 0;
for (i = 0; i < cart.length; i++) {
    finalPrice += cart[i]["price"];
}
console.log(`total: ${finalPrice}`);

// 3. Invoke tax calculator with the payable amount.
let sum = calculate(finalPrice,2);
console.log(`sum: ${sum}`);