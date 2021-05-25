// Desafio 1
function compareTrue(x, y) {
  same = false;
  
  if (x && y) {
    same = true;
  }

  return same;
}

// Desafio 2
function calcArea(base, height) {
  return 0.5 * base * height
}

// Desafio 3
function splitSentence(string) {
  child = "";
  splitArray = [];
  for (let c of string) {
    if (c != " ") {
      child += c;
      string = string.substring(1)
    } if ((string.indexOf(c) == string.length - 1) || (c == " ")) {
      splitArray.push(child);
      child = "";
    }
  }
  return splitArray
}

// Desafio 4
function concatName() {
  // seu código aqui
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
