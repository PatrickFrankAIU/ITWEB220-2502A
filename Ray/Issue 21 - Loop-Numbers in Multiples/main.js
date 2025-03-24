// Write a loop that prints numbers from 1 to 50, but only displays numbers that are multiples of 5.

// Tip: Use the modulus operator to determine whether a number is a multiple of 5.

// Correct output:
// 5
// 10
// 15
// 20
// 25
// 30
// 35
// 40
// 45
// 50

let num = 0
for (let i = 1; i < 51; i++) {
    num = i;
    if (num % 5 === 0) {
        console.log(num);
    }
}