// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let makeArray = string.split(' ');
  return makeArray;
}

// Desafio 4
function concatName(array) {
  return `${array.pop()}, ${array.shift()}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins *= 3) + (ties *= 1);
  return result;
}

// Desafio 6
function highestCount(array) {
  let frequency = {};
  let biggestNumber = Math.max(...array);
  let maxFrequency = null;
  let mostRepeated = null;

  for (let value in array) {
    if ({}.hasOwnProperty.call(array, value)) {
      frequency[array[value]] = (frequency[array[value]] || null) + 1;

      if (array[value] === biggestNumber && frequency[array[value]] > maxFrequency) {
        maxFrequency = frequency[array[value]];
        mostRepeated = array[value];
      }
    }
  } return maxFrequency;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
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
