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
  let ultimo = names[names.length - 1];
  let primeiro = names[0];
  return `${ultimo}, ${primeiro}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  let gamesWins = wins * 3;
  let gamesTies = ties * 1;
  return gamesWins + gamesTies;
}
// Desafio 6
function highestCount(meuArray) { // 1- encontrar o maior valor do array; 2- contar quantas vezes ele se repete
  let maior = 0;
  for (let i = 0; i < meuArray.length; i++) {
      if (meuArray[i] > maior) {
      maior = meuArray[i];
    }
  }
}
console.log(meuArray(11,12,11,4,5,6,8,));
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
  splitSentence,}