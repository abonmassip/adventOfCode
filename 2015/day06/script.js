
console.time('time');

const input = `turn on 0,0 through 5,5
turn off 0,0 through 2,2
toggle 0,0 through 10,0
toggle 0,0 through 0,0
turn on 0,0 through 999,999`;
const inputArray = input.split(/\r?\n/g);

const columns = Array(1000).fill([]);
const grid = columns.map(item => item = Array(1000).fill(0));

let iterations = 0;

let externalCoords = [];

inputArray.forEach(instruction => {

  iterations++;
  
  let coords = [];

  instruction.split(' ').forEach(string => {
    if (string.includes(',')) {
      coords.push(string.split(',')); 
    }
  })

  externalCoords = [...coords]

  function modifyRange(state) {
    const [[xStart, yStart],[xEnd, yEnd]] = coords;
    for(y = yStart; y <= yEnd; y++) {
      for(x = xStart; x <= xEnd; x++) {
        if (state === 'toggle') {
          grid[y][x] = grid[y][x] ? 0 : 1;
        } else {
          grid[y][x] = state;
        }
      }
    }
  }

  if (instruction.includes('on')) {
    modifyRange(1);
  } else if (instruction.includes('off')) {
    modifyRange(0);
  } else {
    modifyRange('toggle');
  }

  /* switch(true) {
    case instruction.includes('on'):
      console.log('ON');
      break;
    case instruction.includes('off'):
      console.log('OFF');
      break;
    case instruction.includes('toggle'):
      console.log('TOGGLE');
      break;
  } */
})

let litLights = 0;
grid.forEach(array => {
  array.forEach(num => {
    if(num === 1){
      litLights++;
    }
  })
})

console.log(externalCoords);
console.timeEnd('time');

/* console.log(JSON.stringify(grid[0]));
console.log(JSON.stringify(grid[1]));
console.log(JSON.stringify(grid[2]));
console.log(JSON.stringify(grid[3]));
console.log(JSON.stringify(grid[4]));
console.log(JSON.stringify(grid[5]));
console.log(JSON.stringify(grid[6]));
console.log(JSON.stringify(grid[7])); */

console.log(`there are ${litLights} lights lit`);
console.log(grid);