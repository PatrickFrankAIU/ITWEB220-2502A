alert("Welcome to the Spirit Animal Quiz! Answer a few questions to discover your spirit animal!")

let dayAnswer = prompt("Is your favorite time of day morning or night?")

if (dayAnswer === "morning") {
    let bevPref = prompt("Do you prefer coffee or tea")

    if (bevPref === "coffee") {
        let lightPref = prompt("Do you prefer the sun or the shade?")

        if (lightPref === "sun") {
            alert("Your spirit animal is the Bald Eagle! Fun fact: The Bald Eagle is only found in North America.");
        }
        else if
            (lightPref === "shade") {
            alert("Your spirit animal is the Crow! Fun fact: Crows are capable of recognizing faces and can hold grudges against individuals who have wronged them.");
        }

    } else if (bevPref === "tea") {
        let moisturePref = prompt("Do you prefer to be wet or dry?")

        if (moisturePref === "wet") {
            alert("Your spirit animal is the Starfish! Fun fact: Starfish do not have a brain or blood; instead, they use filtered sea water to pump nutrients through their nervous system");
        } else if
            (moisturePref === "dry") {
            alert("Your spirit animal is the Squirrel! Fun fact: A squirrel’s front teeth never stop growing.");
        }
    }

} else if (dayAnswer === "night") {
    let nightActivity = prompt("Do you prefer stargazing or night walks?")

    if (nightActivity === "stargazing") {
        let sightPref = prompt("Do you like comets or constellations?")

        if (sightPref === "comets") {
            alert("Your spirit animal is the Owl! Fun fact: Owls are not great at building their own nests and often take over abandoned nests from other birds or use natural cavities for their nests.")
        }
        else if (sightPref === "constellations") {
            alert("your sprit animal is the Wolf! Fun Fact: A wolf's sprinting speed is 36 to 38 miles per hour for short distances")
        }

    } else if (nightActivity === "night walks") {
        let socialPref = prompt("Do you like to socialize or isolate?")
        if (socialPref === "socialize") {
            alert("Your spirit animal is the Lion! Fun fact: An adult male’s roar can be heard up to 8km away.");
        }
        else if (socialPref === "isolate") {
            alert("Your spirit animal is the Tarantula! Fun fact: Tarantulas have few natural enemies, except for the parasitic pepsis wasp, which can paralyze a tarantula with its sting and lay its eggs on the spider's body.")
        }

    }
}

