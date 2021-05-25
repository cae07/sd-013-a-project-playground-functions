/* 
  Project: Playgorund Functoions
  Author: Wallacy Francis 
  Portfolio: https://wallacyfrancis.github.io/
*/

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 == true && value2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let finalStr = str.split(" ");
  return finalStr;
}

// Desafio 4 - In Revisão
function concatName(name) {
  let sapareteName = name.split(",")
  let firstName = sapareteName[0];
  let lastName = sapareteName[sapareteName.length - 1];
  let resultName = lastName + ', ' + firstName 
  return resultName;
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(1, 2));

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
