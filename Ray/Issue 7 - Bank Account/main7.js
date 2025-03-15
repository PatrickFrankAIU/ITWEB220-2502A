let a = 1000;
let aComma = a.toLocaleString();
let b = Number(prompt(`Your initial balance is $${aComma}. How much would you like to deposit?`));
let c = a +  b;
let cComma = c.toLocaleString();
alert(`Your new balance is $${cComma}.`);