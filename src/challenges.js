// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let res = (base * height) / 2;
  return res;
}

// Desafio 3
/* Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
function splitSentence(myArray) {
  const myFrase = myArray.split(' ');
  return myFrase;
}

// Desafio 4
function concatName(myArray) {
  let result = `${myArray[myArray.length - 1]}, ${myArray[0]}`;
  return result;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
