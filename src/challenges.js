// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  let highestRepeat = 0;
  for (let number of numbers) if (number === Math.max(...numbers)) highestRepeat += 1;
  return highestRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);
  if (distMouseCat1 < distMouseCat2) return 'cat1';
  if (distMouseCat1 < distMouseCat2) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) array[index] = 'fizzBuzz';
    else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) array[index] = 'bug!';
    else if (array[index] % 3 === 0 && array[index] % 5 !== 0) array[index] = 'fizz';
    else array[index] = 'buzz';
  }
  return array;
}

// Desafio 9
function encode(secretMessage) {
  secretMessage = secretMessage.replace(/a/g, 1);
  secretMessage = secretMessage.replace(/e/g, 2);
  secretMessage = secretMessage.replace(/i/g, 3);
  secretMessage = secretMessage.replace(/o/g, 4);
  secretMessage = secretMessage.replace(/u/g, 5);
  return secretMessage;
}

function decode(secretMessage) {
  secretMessage = secretMessage.replace(/1/g, 'a');
  secretMessage = secretMessage.replace(/2/g, 'e');
  secretMessage = secretMessage.replace(/3/g, 'i');
  secretMessage = secretMessage.replace(/4/g, 'o');
  secretMessage = secretMessage.replace(/5/g, 'u');
  return secretMessage;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
