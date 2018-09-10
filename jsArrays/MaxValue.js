
//Declare array with set values
const values = [3, 11, 7, 2, 9, 10];

// set the max value to the element at index 0
max = values[0];

//for loop to iterate through array
for(i = 0; i < values.length; i ++)
{
    //if the value at index i is greater than max...
    if(values[i] > max)
    {   
        // store the element as the max value
        max = values[i];
    }
}
// print result 
console.log(max);