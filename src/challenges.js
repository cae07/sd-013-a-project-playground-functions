 // Desafio 1
function compareTrue(p1, p2) {
  if (p1 == true && p2 == true) {
  return true;
  } else {
  return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  if (base >= 5 && height >= 2){
    return (base * height) / 2
    } else if (base >= 10 && height >= 50) {
      return (base * height) / 2
    } else if (base >= 51 && height >= 1){
      return (base * height) / 2
    }
  }

// Desafio 3
function splitSentence() {

}

// Desafio 4
function concatName() {

}

// Desafio 5
function footballPoints() {

}

// Desafio 6
function highestCount() {

}

// Desafio 7
function catAndMouse() {

}

// Desafio 8
function fizzBuzz() {

}

// Desafio 9
function encode() {

}
function decode() {

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
}
