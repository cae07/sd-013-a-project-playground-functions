// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) { return true; } else { return false; }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];
  return last.concat(', ', first);
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (3 * wins) + ties;
  return total;
}

// Desafio 6
function highestCount(array) {
  let repetido = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 <= array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        repetido += 1;
      }
    }
    return repetido;
  }
}
console.log(highestCount([1, 9, 2, 3, 9, 5, 7]))
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
console.log(highestCount([-2, -2, -1]))
console.log(highestCount([0, 0, 0]))

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
