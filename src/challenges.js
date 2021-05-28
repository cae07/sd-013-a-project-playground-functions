// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// console.log(calcArea(10, 50));

// Desafio 3
// Desafio realizado com a ajuda do estudante Erick Santos :D
function splitSentence(texto) {
  return texto.split(' ');
}

console.log(splitSentence('vamo que vamo'));

// console.log("Ja, que, line".split(","))

// Desafio 4
// Desafio realizado com a ajuda da estudante Luiza Antiques :D
function concatName(array) {
  let text = `${array[array.length - 1]}, ${array[0]}`;
  return text;
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// console.log(footballPoints(0, 0));

// Desafio 6
// Desafio realizado com a ajuda da monitora Bianca Caetano e da estudante Débora Teodorico :D
function highestCount(array) {
  let maiorNum = array[0];
  let numMaiorRepete = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNum) {
      numMaiorRepete = 0;
      maiorNum = array[index];
    }
    if (maiorNum === array[index]) {
      numMaiorRepete += 1;
    }
  }
  return numMaiorRepete;
}
console.log(highestCount([0, 0, 0]));

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
