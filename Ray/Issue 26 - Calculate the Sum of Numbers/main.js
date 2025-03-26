// Scenario:
// You have an array of numbers representing sales for each day of the week. Use the .forEach() method to calculate the total sales for the week.

// Array:
// const dailySales = [120, 200, 150, 80, 300, 90, 400];

// Goal:
// Use .forEach() to loop through the array, and calculate the total sales.

// Additional Challenge: Display the running total as you iterate through the array.

let total = 0
const dailySales = [120, 200, 150, 80, 300, 90, 400];
dailySales.forEach(function(daySale) {
    total += daySale
    console.log(`Here are the cummulative sales: $${total}.`)
})

let total2 = 0
const moreSales = [120, 200, 150, 80, 300, 90, 400];
moreSales.forEach((daySale2) => {
    total2+= daySale2
    console.log(`Here are the cummulative sales again: $${total2}.`);
}
)