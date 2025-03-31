// Complete the exercise below, sorting the array and displaying the results.

// Stretch goal: Display the results using a loop and concatenation so the user will understand what they're seeing.


let names = ["James", "Janice", "Andrew", "Andrea", "Zachary"];
names.sort();

names.forEach ((item, index) => {
    const position = index + 1;
    console.log(`${item} is in the ${position} position.`)});
