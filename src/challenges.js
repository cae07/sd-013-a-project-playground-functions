// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}
// Desafio 4
function concatName(array) {
  let result = array[array.length-1]+ ", " + array[0]; 
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontsTime = 0;
  wins = 3;
  ties = 1;
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
