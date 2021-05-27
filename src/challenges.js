// Desafio 1
function compareTrue(pass1, pass2) {
  if (pass1 === true && pass2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  let result = text.split("");
  return result;
}

// Desafio 4
function concatName(name) {
  let completname = '${name[name.length - 1]} ${name[0]}';
  return completname;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) +  ties;
  return points;
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
