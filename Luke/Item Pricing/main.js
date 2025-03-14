let itemOne = parseFloat(prompt("Please enter the price of your 1st item"));
let itemTwo = parseFloat(prompt("Please enter the price of your 2nd item"));
let itemThree = parseFloat(prompt("Please enter the price of your 3rd item"));
let quantityOne = parseFloat(prompt("Please enter the quantity of your 1st item"));
let quantityTwo = parseFloat(prompt("Please enter the quantity of your 2nd item"));
let quantityThree = parseFloat(prompt("Please enter the quantity of your 3rd item"));

let totalCostOne = itemOne * quantityOne;
let totalCostTwo = itemTwo * quantityTwo;
let totalCostThree = itemThree * quantityThree;

let grandTotal = totalCostOne + totalCostTwo + totalCostThree;

let tax = .05 * grandTotal;

console.log("Grand Total: " + grandTotal, "Tax: " + tax);
