const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('challenge')

  if (err) {
    console.log('error!!!');
  }

  var dataArray = data.toString().split('');

  let position = [0,0];
  let positionTrace = ['0,0'];
  let positionSanta = [0,0];
  let positionRobot = [0,0];
  let positionDuoTrace = ['0,0'];

  function arrayToString(array){
    return `${array[0]},${array[1]}`
  }

  dataArray.forEach((pos, i) => {

    function changePosition (axis, mov) {
      position[axis] += mov;
      (i%2 === 0) ? (positionSanta[axis] += mov) : (positionRobot[axis] += mov);
    }

    switch(pos) {
      case '>':
        changePosition(0, 1);
        break;
      case 'v':
        changePosition(1, -1);
        break;
      case '<':
        changePosition(0, -1);
        break;
      case '^':
        changePosition(1, 1);
        break;
      default:
        break;
    }
    
    if(!positionTrace.includes(arrayToString(position))) {
      positionTrace.push(arrayToString(position));
    }
    if(!positionDuoTrace.includes(arrayToString(positionSanta))) {
      positionDuoTrace.push(arrayToString(positionSanta));
    }
    if(!positionDuoTrace.includes(arrayToString(positionRobot))) {
      positionDuoTrace.push(arrayToString(positionRobot));
    }

  })

  console.timeEnd('challenge');

  console.log(`part one: ${positionTrace.length} houses received at least one present`)
  console.log(`part two: ${positionDuoTrace.length} houses received at least one present`)

})
