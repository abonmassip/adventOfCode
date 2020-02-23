var md5 = require('md5');

console.time('time')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter your secret key: `, (key) => {
  readline.question(`How should the hash start: `, (hashStart) => {
    findHash(key, hashStart);
    readline.close();
  })
});

function findHash(key, hashStart) {
  let secretNumber = 0;
  let combination = `${key}${secretNumber}`;
  while (!md5(combination).startsWith(hashStart)) {
    secretNumber++
    combination = `${key}${secretNumber}`;
  }

  console.timeEnd('time')

  console.log(`the secret number is ${secretNumber}`);
  console.log(`the hash is ${md5(combination)}`);
}