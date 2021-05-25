// Desafio 1
// corrigir--->
function compareTrue(value, value1) {

  if(value ===true && value1 === true ){
    return true;
  } else {
    return false;
  }

}
console.log(compareTrue());
// <---corrigir

// Desafio 2

function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}
console.log(calcArea(51, 1));

// console.log("vamo que vamo".split(" ").join(", "));

// Desafio 3
function splitSentence(string) {
  let split = string.split(" "); 
  return split;
}
console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(string1) {
  let concat = (string1[string1.length-1] + ", " + string1[0])
  return concat;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winspoints = 3*wins;
  let tiespoints = 1*ties;
  let points = winspoints + tiespoints;
  return points;
}
console.log(footballPoints(14,8));

// Desafio 6
function highestCount(array1) {
  

  
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
