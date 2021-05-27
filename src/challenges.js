// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(str) {
  let splitStr = str.split(' ');
  return splitStr;
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrayStr) {
  let firstItem = arrayStr[0];
  let lastItem = arrayStr[arrayStr.length -1];
  let concatStr = `${lastItem}, ${firstItem}`;
  return concatStr;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + (1 * ties);
  return pontos;
}

console.log(footballPoints(14, 8))

// Desafio 6
function highestCount(arrayNum) {
  let highestNumber = arrayNum[0];
  let count = 0;
  for (let index = 0; index < arrayNum.length; index += 1) { 
    if (arrayNum[index] > highestNumber) {
      highestNumber = arrayNum[index];
    }
    }
    for (index = 0; index < arrayNum.length; index += 1) {
      if (arrayNum[index] === highestNumber) {
        count += 1;
    }
    }
  return count;
}

console.log(highestCount([5, 8, 4, 8, 7, 4]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
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
