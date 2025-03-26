// For this exercise, create a simple JavaScript quiz that will ask the user a series of questions. This quiz will utilize nested IF statements to determine the next question based on the user's previous answer. The focus will again be on using prompt for input and alert for output, with branching logic to navigate through the quiz.

// Objective:
// Create a short quiz that tests the user's knowledge of JavaScript basics. The quiz will adapt the next question based on the user's answer to the current question, using nested IF statements for this logic.

// Instructions:

// Question 1:
// Start the quiz by asking the user about the correct syntax for creating a function in JavaScript. Provide two options and ask them to choose.

// If the user selects the correct answer, congratulate them and move to question 2.
// If the user selects the wrong answer, provide a brief explanation and end the quiz.
// Question 2 (for those who got question 1 correct):

// Ask about the type of value NaN represents in JavaScript.
// If the user answers correctly, congratulate them and proceed to the next question.
// If the user answers incorrectly, explain what NaN represents and end the quiz.
// Question 3 (for those who got question 2 correct):

// Quiz the user on what the === operator does in JavaScript.
// If the user answers correctly, congratulate them for completing the quiz.
// If the user answers incorrectly, provide the correct explanation.
// Conclusion:
// Regardless of the number of correct answers, congratulate the user on their effort and encourage them to study JavaScript further.

let q1 = prompt('What is the correct syntax for creating a function in JavaScript? Type "function()" or "f()"')
if (q1 === 'function()') {
    alert('Congratulations. Proceed to the next question.');
    let q2 = prompt('What does NaN represent in JavaScript? Type "NotaNumber" or "NotadjacentNumber"')
    if (q2 === 'NotaNumber') {
        alert('Congratulations. Proceed to the next question.')
        let q3 = prompt('What does the === operator mean? Type "equals" or "declares".')
        if (q3 === 'equals') {
            alert('Congratulations on completing the quiz.')
        } else {
            alert('The === operator means equals.')
        }
    } else {
        alert('NaN means Not a Number.');
    }
} else {
    alert('The correct function syntax is function()');
}
alert('Congratulations on your score. Enroll in Digital Crafts bootcamp.');
