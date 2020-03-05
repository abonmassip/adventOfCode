const fs = require('fs');

fs.readFile('./myinput.txt', (err, data) => {
  console.time('time');

  console.log(data.toString());

  console.timeEnd('time');
})