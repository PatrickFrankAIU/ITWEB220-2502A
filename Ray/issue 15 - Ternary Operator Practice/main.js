// For this exercise, simply review some of our earlier examples of IF, ELSE, and ELSE-IF exercises and convert them to use the ternary operator and related syntax. Also, I've placed below some very simple scenarios based on our earliest on-screen examples that you can try as well.

// Info on Ternary: https://javascript.info/ifelse

// Simple Example:

// let number = 3;
// console.log(number > 0 ? "The number is positive" : "The number is negative");
// Nested Example with "else" (negative outcome):

// let age = 8;
// let message = (age < 9) ? 'Below age 3!' :
//   (age < 18) ? 'Below age 18!' :
//   (age < 100) ? 'Below age 100!' :
//   'Over 100!';
// console.log(message);
// Scenarios:

// Write a program that checks if a number is positive or negative and reports the result.
// Write a program that compares two numbers and reports which one is larger.
// Write a JavaScript program that lets a user input a number, then classifies that number as "positive", "negative", or "zero" and prints the classification to the console.
// Write a JavaScript program that classifies a student's grade as "A", "B", "C", "D", or "F" based on a numeric
// score and prints the classification to the console.
// User inputs a number between 1 and 7 (inclusive); program responds with what day of the week that is (Sunday = 1).


let number = -889;
console.log(number > 0 ? 'The number is positive.' : 'The number is negative.');

let small = 100;
let large = 1000;
console.log(large > small ? `${large} is larger than ${small}.` : `${small} is larger than ${large}.`)

let inputNumber = prompt('Enter a number.');
let answer = (inputNumber > 0) ? 'Positive' : (inputNumber < 0) ? 'Negative' : (inputNumber === 0) ? 'Zero' : 'Zero';
console.log(answer);

let gradeNumber = 93;
let final = (gradeNumber < 60 ? 'F' : gradeNumber < 70 ? 'D' : gradeNumber < 80 ? 'C' : gradeNumber < 90 ? 'B' : 'A');
console.log(final);

let dayNumber = Number(prompt('Enter a number (1-7).'));
let day =
    dayNumber === 1 ? 'Sunday' :
        dayNumber === 2 ? 'Monday' :
            dayNumber === 3 ? 'Tuesday' :
                dayNumber === 4 ? 'Wednesday' :
                    dayNumber === 5 ? 'Thursday' :
                        dayNumber === 6 ? 'Friday' :
                            'Saturday'
console.log(day);