// const array = Array(4).fill(0)
// const grid = Array(4).fill(array);

// const grid = Array(4).fill([0,0,0,0]);

const columns = Array(4).fill([]);
const grid = columns.map(item => item = Array(4).fill(0));


console.log(grid[0]);
console.log(grid[1]);
console.log(grid[2]);
console.log(grid[3]);

grid[1][1] = 1;

console.log('------');

console.log(grid[0]);
console.log(grid[1]);
console.log(grid[2]);
console.log(grid[3]);
