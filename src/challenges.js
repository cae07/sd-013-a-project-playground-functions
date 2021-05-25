// Desafio 1
function compareTrue(valueOne, valueTwo) {
  // seu código aqui
  if(valueOne && valueTwo) {
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(text) {
  // seu código aqui
  let stringText = [];
  return stringText = text.split(" ");
}

// Desafio 4
function concatName(arrString) {
  // seu código aqui
  let lastPosition = arrString.length - 1;
  return arrString[lastPosition] + ', ' + arrString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let victories = wins * 3;
  if(wins === 0 && ties === 0) {
    return victories;
  }else {
    return (victories+ties);
  }
}

// Desafio 6
function highestCount(arrNumbers) {
  // seu código aqui
  let sum = 0;
  let biggerNumber = Math.max(...arrNumbers)
  for(let i = 0; i <= arrNumbers.length; i++) {
      if(biggerNumber === arrNumbers[i]){
        sum += 1;
    }
  }return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = (cat1 - mouse);
  let distanceCat2 = (cat2 - mouse);
  if(distanceCat1 < 0){
    distanceCat1 = (distanceCat1 * (-1));
  }
  if(distanceCat2 < 0){
    distanceCat2 = (distanceCat2 * (-1));
  }
  if(distanceCat1 > distanceCat2) {
    return 'cat2';
  }else if(distanceCat2 > distanceCat1) {
    return 'cat1';
  }else if(distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrNumbers) {
  // seu código aqui
  let text = [];
  for(let i = 0; i < arrNumbers.length; i++) {

    if(arrNumbers[i] % 5 === 0 && arrNumbers[i] % 3 === 0) {
      text.push('fizzBuzz');
    }
    else if(arrNumbers[i] % 3 === 0) {
      text.push('fizz');
    }
    else if(arrNumbers[i] % 5 === 0) {
      text.push('buzz');
    }else {
      text.push('bug!');
    }
  }return text;
}fizzBuzz([2, 15, 7, 9, 45])

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
