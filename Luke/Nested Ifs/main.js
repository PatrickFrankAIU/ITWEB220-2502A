let purchaseAmount = 100
let loyaltyPoints = 200

if (loyaltyPoints >= 50) {
    console.log("you are eligible for a special offer")
}

if (loyaltyPoints > 100) {
        console.log("you qualify for a standard offer")
    }

if (loyaltyPoints > 150) {
    if (purchaseAmount > 200) {
        console.log("you qualify for an additional premium offer")
    }
}