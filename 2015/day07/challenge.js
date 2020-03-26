const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  var dataArray = data.toString().split(/\r?\n/g);
  var instructions = dataArray.map(el => {
    const arr = el.split(' -> ');
    const newArr = [arr[0].split(' '), arr[1]];
    return newArr;
  });

  function binary(dec){
    let converted = (dec >>> 0).toString(2);
    while(converted.length < 16) {
      converted = `0${converted}`;
    }
    return converted;
  }
  function decimal(bin){
    return parseInt(bin, 2);
  }

  function not(num) {
    const bin = binary(num).split('').map(x => x === '1' ? '0' : '1').join('');
    return decimal(bin);
  }
  const circuit = instructions.reduce((obj, [from, cable]) => {
    switch (from.length) {
      case 1:
        obj[cable] = parseInt(from[0]);
        break;
      case 2:
        obj[cable] = not(parseInt(obj[from[1]]));
        break;
      case 3:
        const [a, gate, b] = from;
        switch (gate) {
          case 'AND':
            obj[cable] = obj[a] & obj[b];
            break;
          case 'OR':
            obj[cable] = obj[a] | obj[b];
            break;
          case 'RSHIFT':
            obj[cable] = obj[a] >> b;
            break;
          case 'LSHIFT':
            obj[cable] = obj[a] << b;
            break;
        }
    }
    return obj
  }, {})
  console.log(circuit)
  console.log(`The wire a is provided the signal: ${circuit.a}`);
})