
// create character object
const frodo = 
{
    health: 100,
    str: 50,
    xp: 0,
    
    describe()
    {
        return `Frodo's Stats: HEALTH: ${frodo.health}, STR: ${frodo.str}, XP: ${frodo.xp}`;
    }
}
// initial stats
console.log(frodo.describe());

// Harmed by an arrow
console.log("Frodo was harmed by an arrow!");
frodo.heatlh -= 20;
console.log(`Frodo's health is now ${frodo.health}`);

// Equip a strength necklace
console.log("Frodo equipped a strength necklace.");
frodo.str += 10;

// Learn a skill
console.log("Frodo has learned: Pyroblast! Gain 15xp.")
frodo.xp += 15;

// final stats
console.log(frodo.describe());

