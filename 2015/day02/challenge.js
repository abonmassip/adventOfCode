const fs = require('fs');

fs.readFile('./myinput.txt', (err, data) => {
  console.time('challenge')

  if (err) {
    console.log('error!!!!!');
  }

  var array = data.toString().split(/\r?\n/g);
  array.map(num => )
  console.log(array);

})