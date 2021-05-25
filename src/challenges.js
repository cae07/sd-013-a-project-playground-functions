// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ")
}

// Desafio 4
function concatName(array) {
  for (const key in array) {
    return array[array.length - 1] + ", " + array[0];
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let hightNumber = array[0];
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= hightNumber) {
      hightNumber = array[index];
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === hightNumber) {
      count += 1
    }
  }
  return count;
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