// Develop a JavaScript program that conducts a short personality quiz to determine the user's spirit animal. The quiz uses a series of questions where the user's choices lead to different outcomes, determined by nested IF statements. The exercise will reinforce the student's understanding of complex branching logic and user input/output handling with prompt and alert.

// Instructions:

// Introduction:
// Explain the objective to the user. Use alert to introduce the quiz and prompt to start the quiz.

// Questions:

// Question 1: Ask the user about their preferred time of day: "morning" or "night". Store their answer.
// Question 2: Based on the first answer, ask a follow-up question:
// If "morning", ask if they prefer "coffee" or "tea".
// If "night", ask if they enjoy "stargazing" or "night walks".
// Question 3: Ask a final question that depends on the previous answers to narrow down the spirit animal.
// Determine Spirit Animal:

// Use nested IF statements to analyze the user's answers and determine their spirit animal.
// There should be at least four possible outcomes.
// Conclusion: Display the result to the user using alert, telling them what their spirit animal is and a fun fact about it.

// Requirements:
// Employ nested IF statements for decision-making based on user inputs.
// Use prompt for getting inputs from the user.
// Use alert for displaying messages and outcomes.
// Avoid using loops, custom functions, or DOM manipulation.

alert ('This quiz will determine your spirit animal!');
let spirit = ['Spider Monker', 'Goat', 'Panda', 'Albatros', 'Scorpion', 'MoudDib', 'Beaver', 'Hamster'];
let daytime = prompt('Do you prefer morning or night?');
if (daytime === 'morning') {
    let drink = prompt('Do you like coffee or tea?')
    if (drink === 'coffee') {
        let coffeeAnimal = prompt('Do you prefer Brazil or Ethiopia?')
        if (coffeeAnimal === 'Brazil') {
            console.log(`Your spirit animal is ${spirit[0]}!`);
        } else {
            console.log(`Your spirit animal is ${spirit[1]}!`);
        }
    } else {
        let teaAnimal = prompt('Do you prefer China or Japan?')
        if (teaAnimal === 'China') {
            console.log(`Your spirit animal is ${spirit[2]}!`);
        } else {
            console.log(`Your spirit animal is ${spirit[3]}!`);
        }
    }
} else {
    let starNight = prompt('Do you prefer stargazing or night walks?')
    if (starNight === 'stargazing') {
        let terrain = prompt('Do you prefer the dessert or mountains?')
        if (terrain === 'dessert') {
            console.log(`Your spirit animal is ${spirit[4]}!`);
        } else {
            console.log(`Your spirit animal is ${spirit[5]}!`);
        }

    } else {
        let weather = prompt('Do you like it cloudy or clear?')
        if (weather === 'cloudy') {
            console.log(`Your spirit animal is ${spirit[6]}!`);
        } else {
            console.log(`Your spirit animal is ${spirit[7]}!`);
        }
    }
}

