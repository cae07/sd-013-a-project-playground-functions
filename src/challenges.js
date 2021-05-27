// Desafio 1
function compareTrue(input1, input2) {
  if (input1 === true && input2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(inputToSplit) {
  return inputToSplit.split(' ');
}

// Desafio 4
function concatName(inputConcat) {
  let concated = [inputConcat.slice(-1)] + [', '] + [inputConcat.slice(0, 1)];

  return concated;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;

  return points;
}

// Desafio 6
function highestCount(numberArray) {
  let hNum = numberArray[0];

  let count = 0;

  for (let i = 0; i < numberArray.length; i += 1) {
    if (hNum < numberArray[i]) {
      hNum = numberArray[i];
      count = 0;
    }
    if (hNum === numberArray[i]) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([0, 5, 4, 3, 2, 1]));

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
