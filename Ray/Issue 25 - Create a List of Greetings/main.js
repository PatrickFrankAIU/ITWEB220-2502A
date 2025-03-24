// Scenario:
// You have an array of names, and you want to greet each person. Use the .forEach() method and a callback function with a single parameter (the array below) to generate and display a greeting for each name.

// Array:
// const names = ["Alice", "Bob", "Charlie", "Dana", "Elliot"];

// Goal:
// Loop through the array using .forEach(), and display a personalized greeting using concatenation and console.log(). Complete this exercise using both an anonymous function and an arrow function (two solutions).


const names = ["Alice", "Bob", "Charlie", "Dana", "Elliot"];
names.forEach(function(person) {
    console.log(`Hello ${person}, welcome to the list.`);
});

names.forEach((person ) => {
    console.log(`Hello ${person}, welcome to the second list.`);
});
