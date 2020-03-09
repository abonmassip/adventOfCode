const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('time');

  const input = data.toString();
  const inputArray = input.split(/\r?\n/g);
  let niceStrings = 0;
  let niceStringsTwo = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const forbidden = ['ab', 'cd', 'pq', 'xy'];

  function isAVowel(char) {
    return vowels.find(vowel => char === vowel);
  }
  function findRepeatedLetter(char, i, array) {
    return  char === array[i+1];
  }
  function findForbiddenString(char, i, array) {
    const pair = `${char}${array[i+1]}`
    return forbidden.find(forbiddenItem => pair === forbiddenItem);
  }
  function findRepeatedPair(char, i, array) {
    const pair = `${char}${array[i+1]}`
    const otherChars = [...array];
    otherChars[i] = null;
    otherChars[i+1] = null;
    return otherChars.find((otherChar, index, newArray) => {
      newPair = `${otherChar}${newArray[index+1]}`;
      return newPair === pair;
    })
  }
  function findRepeatedLetterWithJump(char, i, array) {
    return  char === array[i+2];
  }

  inputArray.forEach((singleString) => {
    const charsArray = singleString.split('');
    let howManyVowels = 0;

    // count vowels
    singleString.split('').forEach(char => {
      isAVowel(char) ? howManyVowels++ : null;
    });

    // contains repeated letter?
    const hasRepeatedLetter = !!charsArray.find(findRepeatedLetter);
    
    // NOT contains 'ab', 'cd', 'pq', 'xy'?
    const hasForbiddenStrings = !!charsArray.find(findForbiddenString);
    
    // add 1 niceString
    if(howManyVowels > 2 && hasRepeatedLetter && !hasForbiddenStrings){
      niceStrings++;
    }

    // Part 2
    // contains pair letters repeated twice without overlap
    const hasRepeatedPair = !!charsArray.find(findRepeatedPair);

    // contains one letter repeated with one letter in between
    const hasRepeatedLetterJump = !!charsArray.find(findRepeatedLetterWithJump);
    
    // add 1 niceStringTwo
    if(hasRepeatedLetterJump && hasRepeatedPair){
      niceStringsTwo++;
    }
  });
  console.timeEnd('time');

  console.log(`Part 1: There are ${niceStrings} nice strings`);
  console.log(`Part 2: There are ${niceStringsTwo} nice strings`);
})

