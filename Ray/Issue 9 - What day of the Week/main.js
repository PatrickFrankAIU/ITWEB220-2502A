let day = Number(prompt('Enter a number 1-7'));
let count;
let today = "Today is "
let daysLeft = ", days till the weekend!"
let dayName = ["", "Sunday ", " Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday "];
if (day > 0 && day < 7) {
    count = 7 - day
} else {
    console.log('Enter a number 1-7');
}
switch (day) {
    case 1:
        // console.log('Sunday');
        console.log(`${today}${dayName[day]}${count}${daysLeft}`)
        break;
    case 2:
        console.log(`${today}${dayName[day]}${count}${daysLeft}`)
        break;
    case 3:
        console.log(`${today}${dayName[day]}${count}${daysLeft}`)
        break;
    case 4:
        console.log(`${today}${dayName[day]}${count}${daysLeft}`)
        break;
    case 5:
        console.log(`${today}${dayName[day]}${count}${daysLeft}`)
        break;
    case 6:
        console.log(`${today}${dayName[day]}${count}${daysLeft}`)
        break;
    case 7:
        console.log(`${today}${dayName[day]}${count}${daysLeft}`)
        break;
    default:
        console.log('Invalid');
        break;
}