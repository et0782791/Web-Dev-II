
// create dog object
const dog = 
{
    name: "Nova",
    species: "Australian Shepherd",
    size: 75,
    // Method that barks
    bark()
    {
        return `WOOF!`;
    }
}

console.log(`${dog.name} is a ${dog.species} measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

