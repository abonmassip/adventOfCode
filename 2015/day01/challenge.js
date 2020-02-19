const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {

  console.time('Advent of Code Challenge');

  if (err) {
    console.log('there was an error');
  }

  var count = 0;
  var array = data.toString().split("");
  array.forEach(char => {
    if (char === "("){ count = count+1; }
    else if (char === ")"){ count = count-1; }
  })
  
  let count2 = 0;
  let position = 0;
  for (char of array) {
      if (char === "("){ count2 = count2+1; }
      else if (char === ")"){ count2 = count2-1; }
      position = position+1;
      if (count2 === -1){ break; }
    }
    
    console.timeEnd('Advent of Code Challenge');

    console.log('Santa ends up in floor', count);
    console.log('the position of the character is', position);
})