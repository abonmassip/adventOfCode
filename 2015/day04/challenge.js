var md5 = require('md5');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter your secret key: `, (key) => {
  findHash(key);
  readline.close();
});

function findHash(key) {
  console.log(key);
  console.log(md5(key));
}