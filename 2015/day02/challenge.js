const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('challenge')

  if (err) {
    console.log('error!!!!!');
  }

  var array = data.toString().split("\n");
  console.log(array);

})