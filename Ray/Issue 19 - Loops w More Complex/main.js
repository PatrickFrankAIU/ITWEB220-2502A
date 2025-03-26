/* Task:
Calculate the sum of the products of consecutive numbers from 1 to 10.

Explanation:
For each number n from 1 to 9, compute the product of n and n+1, then sum all these products.

Hint:
Think about how you can combine numbers in a sequence to create a series of products. For each number from 1 to 9, consider how it relates to the next number in the sequence. This relationship might help you find a pattern to sum up all the products efficiently.

Note: The correct result in your output will be 330. */


let total = 0;
for (let i = 1, j = 2; i < 10; i++, j++) {
    total += (i * j)
}
console.log(total);

let totalW = 0
let i = 1
while (i < 10) {totalW += i * (i + 1); i++};
console.log(totalW);

