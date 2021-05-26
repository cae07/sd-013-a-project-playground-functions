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
function checkFizzBuzz(arrayNum, index) {
  let resultFizzBuzz = '';
  if (arrayNum[index] % 5 === 0 && arrayNum[index] % 3 === 0) {
    resultFizzBuzz = 'fizzBuzz';
  } else if (arrayNum[index] % 3 === 0) {
    resultFizzBuzz = 'fizz';
  } else if (arrayNum[index] % 5 === 0) {
    resultFizzBuzz = 'buzz';
  } else {
    resultFizzBuzz = 'bug!';
  }
  return resultFizzBuzz;
}
function fizzBuzz(arrayNum) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < arrayNum.length; index += 1) {
    arrayFizzBuzz.push(checkFizzBuzz(arrayNum, index));
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(sentenceToEncode) {
  sentenceToEncode = sentenceToEncode.replace(/a/gi, '1');
  sentenceToEncode = sentenceToEncode.replace(/e/gi, '2');
  sentenceToEncode = sentenceToEncode.replace(/i/gi, '3');
  sentenceToEncode = sentenceToEncode.replace(/o/gi, '4');
  sentenceToEncode = sentenceToEncode.replace(/u/gi, '5');
  return sentenceToEncode;
}
function decode(sentenceToDecode) {
  sentenceToDecode = sentenceToDecode.replace(/1/gi, 'a');
  sentenceToDecode = sentenceToDecode.replace(/2/gi, 'e');
  sentenceToDecode = sentenceToDecode.replace(/3/gi, 'i');
  sentenceToDecode = sentenceToDecode.replace(/4/gi, 'o');
  sentenceToDecode = sentenceToDecode.replace(/5/gi, 'u');
  return sentenceToDecode;
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
