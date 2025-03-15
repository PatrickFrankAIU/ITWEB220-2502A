let x = prompt("Type your first and last name.");
let y = "";
let z = ["First Character: ", "Second Character: ", "Third Character: ", "Fourth Character: ", "Fifth Character: "]

for (let i = 0; i < 5; i++) {
    y += z[i] + x[i] + "\n";
 }
alert(y);
