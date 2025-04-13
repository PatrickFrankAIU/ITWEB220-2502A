// Prompt the user for five numbers, store them in an array, and display the sum of the values.

// Tips:

// Remember to convert the prompt() input to numerical data
// Since we know the total number of inputs here, a loop is not necessary to calculate the total (see stretch goals)
// An empty array is declared like this: let myArray = [];
// Stretch goals:

// Use a loop to display the array values
// Use a loop to calculate the total


let myArray = [];
let sum = 0
let num1 = Number(prompt('Enter 5 numbers, one per popup'));
let num2 = Number(prompt('Enter numbers'));
let num3 = Number(prompt('Enter numbers'));
let num4 = Number(prompt('Enter numbers'));
let num5 = Number(prompt('Enter numbers'));
myArray.push(num1, num2, num3, num4, num5);
myArray.forEach(number => {
    console.log(number);
});
for (let i = 0; i < 5; i++) {
    sum += myArray[i] 
}
console.log(sum);
