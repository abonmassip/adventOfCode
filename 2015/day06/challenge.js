const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('time');

  const input = data.toString();
  const inputArray = input.split(/\r?\n/g);

  const columns = Array(1000).fill([]);
  const grid = columns.map(item => item = Array(1000).fill(0));
  
  inputArray.forEach(instruction => {
    if (instruction) {
      let coords = [];

      instruction.split(' ').forEach(string => {
        if (string.includes(',')) {
          coords.push(string.split(',')); 
        }
      })
      
      function modifyRange(state) {
        const [[xStart, yStart],[xEnd, yEnd]] = coords;

        for(y = Number(yStart); y <= Number(yEnd); y++) {
          for(x = Number(xStart); x <= Number(xEnd); x++) {
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
    }
  })

  let litLights = 0;
  grid.forEach(array => {
    array.forEach(num => {
      if(num === 1){
        litLights++;
      }
    })
  })

  console.timeEnd('time');

  console.log(`there are ${litLights} lights lit`);
})