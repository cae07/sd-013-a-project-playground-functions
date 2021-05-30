// Desafio 1
function compareTrue(trybeA, trybeB) {
  if (trybeA === true && trybeB === true){
    return true;
} else {
  return false;
}
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
}

// Desafio 3
function splitSentence(declaration) {
  return declaration.length > 0 ? declaration.split(' ') : 'String Vazia!!!';
}

// Desafio 4
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
function concatName(meuArray) {
  return meuArray.length >= 1 && `${meuArray[meuArray.length - 1]}, ${meuArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let rankWin = 3;
  let rankTie = 1;

  return wins * rankWin + ties * rankTie;
}

// Desafio 6
function highestCount(numArray) {
  return [...numArray]
    .sort(descending)
    .filter((n, idx, array) => n === array[0])
    .reduce((t) => t + 1, 0);
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
