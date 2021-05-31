// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayStr) {
  return `${arrayStr[arrayStr.length - 1]}, ${arrayStr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(num) {
  return num.filter((number) => number === Math.max(...num)).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMousCat1 = Math.abs(mouse - cat1);
  let distMousCat2 = Math.abs(mouse - cat2);
  if (distMousCat1 < distMousCat2) return 'cat1';
  if (distMousCat2 < distMousCat1) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// Função para retornar uma string
function printBuzz(num) {
  if (((num % 3) === 0) && ((num % 5) === 0)) return 'fizzBuzz';
  if ((num % 3) === 0) return 'fizz';
  if ((num % 5) === 0) return 'buzz';
  return 'bug!';
}
function fizzBuzz(numeros) {
  let arrayStr = [];
  for (let num of numeros) arrayStr.push(printBuzz(num));
  return arrayStr;
}

// Desafio 9
function encode(str) {
  str = str.replace(/a/g, '1');
  str = str.replace(/e/g, '2');
  str = str.replace(/i/g, '3');
  str = str.replace(/o/g, '4');
  str = str.replace(/u/g, '5');
  return str;
}
function decode(str) {
  str = str.replace(/1/g, 'a');
  str = str.replace(/2/g, 'e');
  str = str.replace(/3/g, 'i');
  str = str.replace(/4/g, 'o');
  str = str.replace(/5/g, 'u');
  return str;
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
