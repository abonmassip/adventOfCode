const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('challenge')

  if (err) {
    console.log('error!!!!!');
  }
  var array = data.toString().split(/\r?\n/g);
  let totalSquareFeet = 0;
  let totalRibbon = 0;

  array.map(size => {
    if (size !== '') {
      const sidesArray = size.split("x").sort(function(a, b){return a-b});
      sides = sidesArray.map(value => Number(value));
      const package = sides[0]*sides[1] * 3 + (sides[0]*sides[2] + sides[1]*sides[2]) * 2;
      totalSquareFeet += package;
      const ribbon = (sides[0]+sides[1])*2 + (sides[0]*sides[1]*sides[2]);
      totalRibbon += ribbon;
    }
  });
  console.timeEnd('challenge');

  console.log(`they need a total of ${totalSquareFeet} square feet of wrapping paper and ${totalRibbon} feet of ribbon`);

})