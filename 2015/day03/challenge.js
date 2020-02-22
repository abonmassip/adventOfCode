const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('challenge')

  if (err) {
    console.log('error!!!');
  }

  var dataArray = data.toString().split('');

  let x = 0;
  let y = 0;
  let positionTrace = ['0,0']

  dataArray.map(position => {
    switch(position) {
      case '>':
        x += 1;
        break;
      case 'v':
        y -= 1;
        break;
      case '<':
        x -= 1;
        break;
      case '^':
        y += 1;
        break;
      default:
        break;
    }

    if(!positionTrace.includes(`${x},${y}`)) {
      positionTrace.push(`${x},${y}`);
    }

  })

  console.timeEnd('challenge');

  console.log(`${positionTrace.length} houses receiveat least one present`)

})