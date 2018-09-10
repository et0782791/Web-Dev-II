
// Declare array
const musketeers = ["Athos", "Porthos", "Aramis"];

// Print elements with for loop
for(i = 0; i < musketeers.length; i++)
{
    console.log(musketeers[i]);
}

// add element to array
musketeers.push("D Artagnan")

// print elements with foreach method
musketeers.forEach(element => {
    console.log(`${element}`)
});

// remove element "Aramis"
for(i = 0; i < musketeers.length; i++)
{
    if(musketeers[i] == "Aramis")
    {
        musketeers.splice(i, 1);
    }
}

// print elements with for-of loops
let ofMusketeers;
for(ofMusketeers of musketeers)
{
    console.log(musketeers)
}
