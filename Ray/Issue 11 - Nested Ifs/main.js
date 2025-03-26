// You want to determine if a user qualifies for a special offer based on their purchase amount and loyalty points.

// Users must have more than 50 loyalty points to be eligible for any special offer.
// If they have more than 100 loyalty points, they qualify for a standard offer.
// If they have more than 150 loyalty points and their purchase amount is over $200, they qualify for an additional premium offer.
let loyalty = 151;
let purchase = 201;
if (loyalty > 150 && purchase > 200) {
    console.log('You qualify for an additional premium offer.');
} else if (
    loyalty > 100) {
    console.log('You qualify for a standard offer.');
} else if (
    loyalty > 50) {
    console.log('You are eligible for a special offer.');
} else {
    console.log('You do not have enough loyalty points.');
}