let apple = Number(prompt('Enter the price of an apple.'));
let orange = Number(prompt('Enter the price of an orange.'));
let banana = Number(prompt('Enter the price of a banana.'));
let appleAmount = Number(prompt('How many apples would you like?'));
let orangeAmount = Number(prompt('How many oranges would you like?'));
let bananaAmount = Number(prompt('How many bananas would you like?'));
let appleCost = apple * appleAmount;
let orangeCost = orange * orangeAmount;
let bananaCost = banana * bananaAmount;
let totalPreTax = appleCost + orangeCost + bananaCost;
let taxCost = Number((totalPreTax * 0.05).toFixed(2));
let totalAfterTax = (Number(totalPreTax) + Number(taxCost)).toFixed(2);
alert(`The fruit tax is $${taxCost} based on 5%. The grand total is $${totalAfterTax} including tax.`)
