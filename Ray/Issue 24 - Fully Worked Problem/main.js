// This is a "fully worked" problem, meaning both the instructions and the solution are provided. This problem was fully worked during class session "Module 2 Instructor Live 3", on August 19th, and that recording is available in the classroom announcements. A good idea here is to try to work the problem again later on your own, without looking at the solution. I've also attached at the end of this Issue some suggested upgrades that you can try, all of which are completable with your current level of knowledge.

// Instructions:
// Imagine you have an array of numbers representing scores from a game. You want to count how many scores are above a certain threshold. For those special high scores, you also want to keep a separate count, all the while using a while loop for iteration.

// let scores = [15, 22, 18, 34, 45, 5, 10, 25]; // Example scores in an array
// let highScoreThreshold = 20; // Scores above this value are considered high
// let totalScoresCount = 0; // Counter for all scores processed
// let highScoresCount = 0; // Counter for high scores
// Tips:

// You will also want a variable to act as the loop counter, but no other variables should be needed
// Remember that other variables besides the loop counter can be incremented with ++
// You will need an IF statement within the WHILE loop to handle the decision of whether the number is a "high score"
// =================


let scores = [15, 22, 18, 34, 45, 5, 10, 25];
let highScoreThreshold = 20;
let highScoresCount = 0;
let i = 0
while (i < scores.length) {
    if (scores[i] >= highScoreThreshold) {
        highScoresCount += 1
    };
    i++;
}
console.log(`There are ${highScoresCount} scores above ${highScoreThreshold}`)


let scores2 = [15, 22, 18, 34, 45, 5, 10, 25];
let highScoreThreshold2 = 20;
let highScoresCount2 = 0;
for (let i = 0; i < scores2.length; i++) {
    if (scores2[i] >= highScoreThreshold2) {
        highScoresCount2 += 1
    }
}
console.log(`There are ${highScoresCount2} scores above ${highScoreThreshold2}`)
