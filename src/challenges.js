// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  let result = parseFloat((base * height) / 2);
  return result;
}
// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(names) {
  let x = names[names.lenght - 1];
  let y = names[0];
  return `${x}, ${y}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  let gamesWins = wins * 3;
  let gamesTies = ties * 1;
  return gamesWins + gamesTies;
}

// Desafio 6
function highestCount(x) {
  let y = x.sort();
  let resu = [];
  for (let i = 0; i < x.length; i = +1) {
    if (y[i] === i[i]) {
      resu.push(i[i]);
    }
  }
  return resu;
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
