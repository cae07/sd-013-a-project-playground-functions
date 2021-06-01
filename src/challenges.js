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
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumerico) {
  let fizzBuzzArray = [];

  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    fizzBuzzArray[i] = 'bug!';
    if (arrayNumerico[i] % 15 === 0) {
      fizzBuzzArray[i] = 'fizzBuzz';
    } else if (arrayNumerico[i] % 5 === 0) {
      fizzBuzzArray[i] = 'buzz';
    } else if (arrayNumerico[i] % 3 === 0) {
      fizzBuzzArray[i] = 'fizz';
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}
function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
