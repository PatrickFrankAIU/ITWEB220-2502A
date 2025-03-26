// Use a loop to calculate the product of all the integers between 25 and 75, non-inclusive. (26 times 27 times 28, etc)

// Display only the total product of these numbers. Do not use branching logic in this program (no "IF").

// Tip: Manipulating the loop counter is the key.

// Note: The correct result will be: 2.1325772987914667e+82

let multiply = 1
for (let i = 26; i < 75; i++) {
    multiply *= i
}
console.log(multiply);

let multiplyW = 1
let j = 26
while (j < 75) { multiplyW *= j; j++};
    console.log(multiplyW);
    