let num1 = parseInt(prompt("Please enter the 1st number"));
let num2 = parseInt(prompt("Please enter the 2nd number"));
let num3 = parseInt(prompt("Please enter the 3rd number"));
let num4 = parseInt(prompt("Please enter the 4th number"));
let num5 = parseInt(prompt("Please enter the 5th number"));

let myarray = [];

let sum = 0

myarray.push(num1, num2, num3, num4, num5);
myarray.forEach(num => sum += num );
console.log(sum);