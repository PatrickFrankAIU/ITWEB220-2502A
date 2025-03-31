// For this program, the user will enter numbers which the program will store in an array. Follow these steps:

// First, prompt the user for the number of values they plan to enter.
// Next, use a loop to prompt the user that number of times, pushing each number into the array
// Sort the array in ascending order
// Display the sorted array using a second loop
// Tips:

// For the first loop, you'll need a for or while type loop using the number they entered from the first question in the condition. (This will need to be a for or while loop.)
// When sorting, remember to use the arrow function with two parameters, such as "a" and "b", and use "a - b" for the sort.
// For the second loop, displaying the sorted array, a for-of loop will work.
// Stretch Goal:


let arrays = [];
let num = 0;
let i = 0;
while (i < 5) {
    num = Number(prompt('Enter a number (5 total).'));
    arrays.push(num);
    arrays.sort((a,b) => b-a);
    console.log(arrays)
    i++
}
for (const array of arrays) {
    console.log(array);
}

// Recreate this exercise using string values instead of numerical ones.

let arrayStrings = [];
let letter;
let j = 0;
while (j < 5) {
    letter = prompt('Enter a letter (5 total).');
    arrayStrings.push(letter);
    arrayStrings.sort();
    console.log(arrayStrings)
    j++
}
for (const arrayString of arrayStrings) {
    console.log(arrayString);
}