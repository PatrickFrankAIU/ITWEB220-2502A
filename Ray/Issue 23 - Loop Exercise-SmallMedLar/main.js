// Write a loop that counts from 1 to 15 and logs whether each number is "Small" (1-5), "Medium" (6-10), or "Large" (11-15).

// Tip: Each category will require a condition, and each condition will require an AND operator (&&) to verify that the value is within the selected range.

// Expected Output:
// 1 is Small
// 2 is Small
// 3 is Small
// 4 is Small
// 5 is Small
// 6 is Medium
// 7 is Medium
// 8 is Medium
// 9 is Medium
// 10 is Medium
// 11 is Large
// 12 is Large
// 13 is Large
// 14 is Large
// 15 is Large


for (let i = 1; i < 16; i++) {
    if (i > 0 && i < 6) {
        console.log(`${i} is Small`)
    } else if (i > 5 && i < 11) {
        console.log(`${i} is Medium`)
    } else {
        console.log(`${i} is Large`)
    }
}
