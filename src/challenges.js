// Desafio 01
function compareTrue(x, y) {

  if (x === true && y === true) {
    return true;
  } else {
    return false;
  }

}

// Desafio 2
function calcArea(base, height) {

  area = (base * height) / 2;
  return area;

}

// Desafio 3
function splitSentence(str) {
  
  return str.split(' ');

}

// Desafio 4
function concatName(arrStr) {

  let firstName = arrStr[0];
  let lastIndex = arrStr.length -1;
  let lastName = arrStr[lastIndex];
  
  return `${lastName}, ${firstName}`;

}

// Desafio 5
function footballPoints(wins, ties) {

  let totalPoints = 0;
  totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;

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
