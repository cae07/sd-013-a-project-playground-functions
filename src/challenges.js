// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceArray = sentence.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(anyArray) {
  let concatArray = `${anyArray[anyArray.length - 1]}, ${anyArray[0]}`;
  return concatArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function findTheHighestNumber(numbersArray) {
  let highestNumber = numbersArray[numbersArray.length - 1];
  for (let index = 1; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > highestNumber) {
      highestNumber = numbersArray[index];
    }
  }
  return highestNumber;
}
function highestCount(numbersArray) {
  let countHighestNumber = 0;
  for (let index2 = 0; index2 < numbersArray.length; index2 += 1) {
    if (findTheHighestNumber(numbersArray) === numbersArray[index2]) {
      countHighestNumber += 1;
    }
  }
  return countHighestNumber;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let whoGetsTheMouse;
  if (distCat1 === distCat2) {
    whoGetsTheMouse = 'os gatos trombam e o rato foge';
  } else if (distCat1 < distCat2) {
    whoGetsTheMouse = 'cat1';
  } else {
    whoGetsTheMouse = 'cat2';
  }
  return whoGetsTheMouse;
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
