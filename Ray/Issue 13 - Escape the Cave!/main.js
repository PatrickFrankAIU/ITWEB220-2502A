// 1. Starting Point:
// Use prompt to display an introductory message explaining the scenario to the player: they have woken up in a dark cave with no memory of how they got there. They see two paths: one to the left and one to the right. Ask the player to choose a path by typing "left" or "right".

// 2. First Decision:
// - If the player chooses "left", use an IF statement to branch the story. Inside this IF block, use another IF statement to present a new scenario based on a secondary decision: they encounter a lake. Ask if they want to swim across or walk around it.
// - If they choose to swim, use alert to show the outcome (e.g., they find a hidden treasure in the middle of the lake).
// - If they choose to walk around, use alert to show a different outcome (e.g., they find an abandoned campsite with useful supplies).
// - If the player chooses "right", follow a similar structure for branching logic. Perhaps they find a tunnel. Ask if they want to explore the tunnel or continue on the path.
// - If they explore the tunnel, show one outcome (e.g., they discover a map of the cave).
// - If they continue on the path, show another outcome (e.g., they encounter a friendly hermit who offers guidance).

// 3. Conclusion:
// Regardless of the paths and decisions, converge the story to a concluding scenario using IF statements. For example, after the series of decisions, they finally find the exit of the cave. Based on the decisions made earlier, determine if they exit the cave with treasure, useful supplies, a map, guidance from the hermit, or perhaps they find another traveler who joins them on their journey.

// 4. Final Message:
// Use alert to summarize the player's adventure and outcomes based on their choices.

// Requirements:

// Utilize nested IF statements for decision-making.
// Use prompt for player inputs.
// Use alert for story narration and outcomes.
// Do not use loops or functions.
let optionTreasure;
let optionCampsite;
let optionMap;
let begin = prompt('You have woken up in a dark cave with no memory of how you got there. They see two paths: one to the left and one to the right. Choose a path by typing "left" or "right".');

if (begin === 'left') {
    swimWalk = prompt('You encounter a lake. Would you like to swim across or walk around it? Type "swim" or "walk"');
    if (swimWalk === 'swim') {
        optionTreasure = true;
        alert('You found a hidden treasure in the middle of the lake.')
    } else {
        optionCampsite = true
        alert('You found a campsite full of useful supplies.')
    }
} else {
    tunnelPath = prompt('You encounter a tunnel. Would you like to enter the tunnel or stay on the path? Type "tunnel" or "path"');
    if (tunnelPath === 'tunnel') {
        optionMap = true;
        alert('You found a map of the cave.')
    } else {
        alert('You found a friendly hermit who offers guideance.')
    }
}
// EXIT CONDITION
if (optionTreasure === true) {
    alert('You made it to the cave exit with the treasure!');
} else if
    (optionCampsite === true) {
    alert('You made it to the cave exit with the supplies!');
} else if
    (optionMap === true) {
    alert('You made it to the cave exit with the map!');
} else {
    alert('You made it to the cave exit with the hermit!');
}