// Desafio 1
function compareTrue(value1, value2) {
  if(value1 == true && value2 == true){
    return true;
    } else {
    return false;
    }
}
// Desafio 2
function calcArea(base, height) {
  let result = parseFloat((base * height)/2);
  return result
}
// Desafio 3
function splitSentence(string) {
 let array = [];
 for(i = 0; i <string.lenght; i += 1) {
   return string.split(" ")
 }
}

// Desafio 4
function concatName(array) {
  let primeiroItem = array[0];
  let ultimoItem = array[array.lenght - 1];
    return ultimoItem + " " + primeiroItem
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
