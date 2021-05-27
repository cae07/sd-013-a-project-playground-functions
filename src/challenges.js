// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
  // let verificator = " ";
  // let coma = ", ";
  // let array = [];
  // for (let index = 0; index < string.length; index += 1) {
  //   if (string[index] === verificator) {
  //     array.push(coma);
  //   } else {
  //     array.push(string[index]);
  //   }
  // }
  // let array = string.split(" ");
  // return array;
}

// Desafio 4
function concatName(array) {
  let arrayA = array[0];
  let space = ', ';
  let arrayB = array.pop();
  let arrayC = arrayB.concat(space, arrayA);
  return arrayC;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3 * wins;
  let tiesPoints = ties;
  let totalPoints = 0;
  totalPoints = winsPoints + tiesPoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numberList) {
  let highestNumber = Math.max(...numberList);
  let repeticao = 0;
  for (let number of numberList) {
    if (number === highestNumber) {
      repeticao += 1;
    }
  } return repeticao;
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
