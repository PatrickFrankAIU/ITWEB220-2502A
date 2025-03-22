let answer1 = prompt("What is the correct syntax for creating a function in JavaScript?\nA) function myFunction () {}\nB) var myFunction():")

if (answer1 === "A" || answer1 === "a") {
    let answer2 = prompt("Correct! Next question: What type of value does NaN represents in JavaScript?\nA) Not a Node\nB) Not a Number")

    if (answer2 === "B" || answer2 === "b") {
        let answer3 = prompt("Great Job! Next question: What does the === operator do in JavaScript?\nA) Equal value and equal type\nB) Assigns value")

        if (answer3 === "A" || answer3 === "a") {
            console.log("Correct again! Thank you for completing the quiz and continue studying JavaScript!");
        }
        else {
            console.log("Incorrect but nice job getting 2 out of 3 correct. a single = asigns value while === comparies equal value and equal type. Please continue to study JavaScript!");
        } 
     } else {
            console.log("Incorrect. NaN stands for Not a Number. Continue studying JavaScript!");
        }
    }else {
            console.log("Incorrect. a function must be declared using function and not var. Please continue studying JavaScript!");
        }
