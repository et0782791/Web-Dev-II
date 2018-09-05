// Square the given number x
function square1(x) {
    let square = (x * x);
    return square;
  }
  
  // Square the given number x
  const square2 = x => (x * x);
  
  console.log(square1(0)); // Must show 0
  console.log(square1(2)); // Must show 4
  console.log(square1(5)); // Must show 25
  
  console.log(square2(0)); // Must show 0
  console.log(square2(2)); // Must show 4
  console.log(square2(5)); // Must show 25
  
  for( i = 0; i <= 10; i++)
  {
      console.log(square1(i));
  }