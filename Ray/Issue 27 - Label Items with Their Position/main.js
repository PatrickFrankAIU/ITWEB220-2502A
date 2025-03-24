// Using the array index in a ForEach loop:
// The forEach() function has a second parameter that automatically connects to the array index. You can call it by simply assigning it a variable name when you set up the callback. In the example below, the first parameter, "arrayItem", represents the current item in the array on this cycle of the loop. The second parameter, "indexPosition", represents the index number of that item. It works like this:

// myArray.forEach((arrayItem, indexPosition) => {
//   console.log('you can concatenate the above parameters here, to suit your requirements');
// });
// Let's try an exercise!

// Scenario:
// You have an array of tasks, and you want to display each task with its position in the list. Use the .forEach() method with a callback that takes two parameters: the value and its index.

// Array:
// const tasks = ["Wash dishes", "Do laundry", "Write code", "Read a book"];

// Goal:
// Use .forEach() to loop through the array and display each task labeled with its position (e.g., Task 1: Wash dishes). Use the index of the array to provide this number.


const tasks = ["Wash dishes", "Do laundry", "Write code", "Read a book"];
tasks.forEach((job, index) => {
    console.log(`Task ${index + 1}: ${job}`)
});



