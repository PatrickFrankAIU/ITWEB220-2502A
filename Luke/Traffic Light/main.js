let trafficLight = "red";
let timeOfDay = "day";

switch(trafficLight) {
    case "green": 
        console.log("Go")
    break;

    case "yellow": 
        console.log("Slow down")
    break;

    case "red": 
        console.log("Stop")
    break;

    case "blinking": 
    if (timeOfDay === "day") {
        console.log("Proceed with caution")
    }
    else { 
        console.log("Stop, then proceed with caution")
    }
    break;

    case "none":
        if  (timeOfDay === "day") {
        console.log("Stop, then proceed when safe")
        }
        else { 
        console.log("Use the light as a stop sign")
        }
    break;

    default:
        (console.log("Invalid traffic light state"))
}