let promptNumber = parseInt(prompt("How many values would you like to enter?"));

let numArray = [];

    for (let i = 0; i < promptNumber; i++) {
        let numValue = (parseInt(prompt("Please enter a number")));
        numArray.push(numValue);
    }

    numArray.sort((a, b) => a - b)

    for (let i = 0; i < numArray.length; i++) {
        console.log(numArray[i])
    }