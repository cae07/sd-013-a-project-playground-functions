// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  let result = parseFloat((base * height) / 2);
  return result;
}
// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}
// Desafio 4
function concatName(names) {
  let ultimo = names[names.length - 1];
  let primeiro = names[0];
  return `${ultimo}, ${primeiro}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  let gamesWins = wins * 3;
  let gamesTies = ties * 1;
  return gamesWins + gamesTies;
}
// Desafio 6
function highestCount(array) {
  let maxNumber = 0;
  for (let number of array) {
    maxNumber = Math.max(number, maxNumber);
  }
  const times = array.filter((el) => el === maxNumber);
  return times.length;
}
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push('bug!');
    if (array[index] % 15 === 0) {
      newArray[index] = 'fizzBuzz';
    } else if (array[index] % 5 === 0) {
      newArray[index] = 'fizz';
    } else if (array[index] % 3 === 0) {
      newArray[index] = 'buzz';
    }
  } return newArray;
}
// Desafio 9
function encode() {}
//   let letra = ['a', 'e', 'i', 'o', 'u'];
//   let numero = [1, 2, 3, 4, 5];
//   for (let i = 0; i < frase.length; i += 1) {
//     for (let j = 0; j < letra.length; j += 1) {
//       if (frase[i] === letra[j]) {
//         frase = frase.replace(frase[i], numero[j]);
//       }
//     }
//   } return frase;
// }
function decode() {
  // seu código aqui
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