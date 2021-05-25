// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if(v1 === true && v2 === true){
    return true;
  } else return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base*height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let lastIndex = (array.length - 1);
  let concat = array[lastIndex] + ', ' + array[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sum = (wins * 3) + ties;
  return sum;
}
console.log(footballPoints(0,0));

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
