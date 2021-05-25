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
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(str) {
  primeiroItem = str[0];
  ultimoItem = str[str.length-1]
  teste = `${ultimoItem}, ${primeiroItem}`
  return teste
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + ties
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let counter = 0;
  for (let i = 0; i < array.length; i += 1){
    if (array[i] >= maior){
      maior = array[i];
    }
  }
  for (let index = 0; index < array.length; index += 1){
    if (array[index] === maior){
      counter += 1;
    }
  }
  return counter;
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
