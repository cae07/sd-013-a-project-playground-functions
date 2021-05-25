// Desafio 1
function compareTrue(valueOne, valueTwo) {
  // seu código aqui
  if(valueOne && valueTwo){
    return true;
  }else{
    return false;
  }
} 

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(text) {
  // seu código aqui
  let stringText = [];
  return stringText = text.split(" ");  
}

// Desafio 4
function concatName(arrString) {
  // seu código aqui
  let lastPosition = arrString.length - 1;
  return arrString[lastPosition] + ', ' + arrString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let victories = wins * 3;
  if(wins === 0 && ties === 0){
    return victories;
  }else {
    return (victories+ties);
  }
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
