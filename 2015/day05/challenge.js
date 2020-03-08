const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('time');

  const input = data.toString();
  const inputArray = input.split(/\r?\n/g);
  console.log(inputArray);
  let niceStrings = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const forbidden = ['ab', 'cd', 'pq', 'xy'];

  function isAVowel(char) {
    return vowels.find(vowel => char === vowel);
  }
  function findRepeatedLetter(char, i, array) {
    return  char === array[i+1];
  }
  function findForbiddenString(string, i, array) {
    const doubleString = `${string}${array[i+1]}`
    return forbidden.find(forbiddenItem => doubleString === forbiddenItem);
  }

  inputArray.forEach((singleString) => {
    let howManyVowels = 0;
    let repeatedLetter = false;
    let containsForbiddenStrings = false;

    // count vowels
    singleString.split('').forEach(char => {
      isAVowel(char) ? howManyVowels++ : null;
    });
    // console.log('vowels: ', howManyVowels);
    // contains repeated letter?
    repeatedLetter = !!singleString.split('').find(findRepeatedLetter);
    // console.log('double? ', repeatedLetter);
    // NOT contains 'ab', 'cd', 'pq', 'xy'?
    containsForbiddenStrings = !!singleString.split('').find(findForbiddenString);
    // console.log('forbidden? ', containsForbiddenStrings);
    // then add 1 niceString
    if(howManyVowels > 2 && repeatedLetter === true && containsForbiddenStrings === false){
      niceStrings++;
    }
  });
  console.timeEnd('time');

  console.log(`There are ${niceStrings} nice strings`);
})

