// create bank object
const bank = 
{
    owner: "Alex",
    balance: 0,

    // methods to add/subtract value
    credit(value)
    {
        this.balance += value;
    },
    debit(value)
    {
        this.balance -= value;
    }
}

console.log(`Owner: ${bank.owner}, Balance: $${bank.balance}`);
// Credit 250
bank.credit(250);
// Subtract 80
bank.debit(80);
console.log(`Owner: ${bank.owner}, Balance: $${bank.balance}`);
