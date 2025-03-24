// Fizzbuzz is a classic coding challenge and a staple of technical interviews. The game itself is a word game for children, and it works like this: The first player is given the starting value, such as "1". They mentally divide that number by both 3 and 5.

// If it is divisible evenly by 3, they say "Fizz".
// If it is divisible by 5 they say "Buzz".
// If it is divisible by both, they shout "Fizzbuzz!"
// Our challenge here is to write a program that checks the integers from 1 to 50 and reports the appropriate response word -- Fizz, Buzz, or FizzBuzz.

// Tips:

// You do not have to report both the number and the keyword. Reporting one or the other is the intended goal. (This will simplify your IF/ELSE outputs.)
// The "FizzBuzzes" in this range will be at 15, 30 and 45.
// You can use a while loop or a for loop for this. (It's a good idea to try both!)
// There are a LOT of YouTube videos on this, including a famous one by Tom Scott with 3.5 million views. Please don't spoil it for yourself! It is extremely important to work the problem on your own, because the steps you take towards the solution will greatly inform your later understanding of what's going on.


// ~FIRST ATTEMPT - PRINTS DOGS WHERE NOT DIVISIBLE BY 3 AND 5:
// for (let i = 1; i < 51; i++) {
//     if (i / 3 % 1 === 0 && i / 5 % 1 === 0) {
//         console.log(`FizzBuzz ${i}`)
//     } else if (i / 3 % 1 === 0) {
//         console.log(`Fizz ${i}`);
//     } else if (i / 5 % 1 === 0) {
//         console.log(`Buzz ${i}`);
//     } else {
//         console.log('dogs');
//     }
// }

for (let i = 1; i < 51; i++) {
    if (i / 3 % 1 === 0 && i / 5 % 1 === 0) {
        console.log(`FizzBuzz ${i}`)
    } else if (i / 3 % 1 === 0) {
        console.log(`Fizz ${i}`);
    } else {
        if (i / 5 % 1 === 0) {
            console.log(`Buzz ${i}`);
        }
    }
}