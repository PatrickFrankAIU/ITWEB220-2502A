// Scenario:
// You’re building a simple checkout system. You have an array of item prices in a shopping cart. Your task is to write a calculateSalesTax function that calculates the sales tax for a given price, based on a provided tax rate. Then, use .forEach() to iterate through the cart, calculate the tax for each item using your function, and display the price, tax, and total.

// Instructions:

// Write the calculateSalesTax function using the following structure:
// The function should take one parameter: price.
// Use the provided taxRate (7%) to calculate the tax for the given price.
// Return the calculated tax.
// Use the .forEach() method to loop through the cartPrices array.
// For each price, call the calculateSalesTax function to get the tax.
// Calculate the total price (price + tax).
// Display the price, tax, and total using console.log().
// Ensure the output is formatted with two decimal places for currency.
// You may use an arrow function or an anonymous function (you don't have to do both), but you must use cartPrices.forEach() for this exercise, as shown in the provided code.


let taxRate = 0.07;
let tax = 0;
let total = 0;

let cartPrices = [12.13, 14.98, 7.45, 38.01, 9.99]
cartPrices.forEach(function calculateSalesTax(price) {
    tax = price * taxRate
    total = price + tax
    console.log(`The price is $${price}, the tax is $${tax.toFixed(2)} based on ${(taxRate * 100).toFixed(0)}%, the total is $${total.toFixed(2)}.`)
})

