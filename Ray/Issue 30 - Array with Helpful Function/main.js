// Add a function to this program called "findMinimum()" that will find the minimum element in an array of numbers.

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let findMinimum = (numbers)=> {numbers.sort((a,b) => a-b)
    return numbers[0];
};
console.log(findMinimum(numbers)); // correct output should be 1