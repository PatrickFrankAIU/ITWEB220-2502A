// Write a program that advises a driver on what to do when approaching a traffic light that could be functioning normally, blinking, or out of service, depending on the time of day.

// The advise to the driver is based on the combined conditions of trafficLight and timeOfDay.
// Initialize two variables: trafficLight with values possible as "red", "green", "yellow", "blinking", or "none" (for out of service), and timeOfDay with values as "day" or "night".
// First, check the status of the trafficLight.
// If the light is "green", respond "Go".
// If the light is "yellow", respond "Slow down".
// If the light is "red", respond "Stop".
// If the light is "blinking", you'll need to check timeOfDay:
// During the day, respond "Proceed with caution".
// During the night, respond "Stop, then proceed with caution".
// If the light is "none" (out of service), check timeOfDay:
// During the day, respond "Stop, then proceed when safe".
// During the night, respond "Use the light as a stop sign".
// Tip: Switch-Case may be easier to use here than IF/ELSE.

// ------
let trafficLight = prompt(["red", "green", "yellow", "blinking", "none"]);
let timeOfDay = prompt(["day", "night"]);
switch (trafficLight) {
    case "blinking":
        switch (timeOfDay) {
            case "day":
                console.log('Procees with caution.');
                break;
            case "night":
                console.log('Stop, then procees with caution.');
                break;
        }
        break;
    case "none":
        switch (timeOfDay) {
            case "day":
                console.log('Stop, then proceed when safe.');
                break;
            case "night":
                console.log('Use the light as a stop sign.');
                break;
        }
        break;
    case "red":
        console.log('Stop.');
        break;
    case "yellow":
        console.log('Slow down.');
        break;
    case "green":
        console.log('Go.');
        break;
}