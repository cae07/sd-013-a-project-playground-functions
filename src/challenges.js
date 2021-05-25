// Desafio 01
function compareTrue(x, y) {

  if (x === true && y === true) {
    return true;
  } else {
    return false;
  }

}

// Desafio 2
function calcArea(base, height) {

  area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(str) {
  
  return str.split(' ');
}

// Desafio 4
function concatName(arrStr) {

  let firstName = arrStr[0];
  let lastIndex = arrStr.length -1;
  let lastName = arrStr[lastIndex];
  
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {

  let totalPoints = 0;
  totalPoints = (wins * 3) + (ties * 1);

  return totalPoints;
}

// Desafio 6
function highestCount(numbersArr) {

  let high = -999;
  let howManyHigh = [];

  for (let i = 0; i < numbersArr.length; i += 1) {
    if (numbersArr[i] > high) {
      high = numbersArr[i];
    }
  }

  for (let j = 0; j < numbersArr.length; j += 1) {
      if (high === numbersArr[j]) {
        howManyHigh.push(j);
      }
  }

  return howManyHigh.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distanceCat1 = cat1 - mouse
  let distanceCat2 = cat2 - mouse

  if (distanceCat1 < 0) {
    distanceCat1 = distanceCat1 * (-1);
  } else if (distanceCat2 < 0) {
    distanceCat2 = distanceCat2 * (-1);
  }

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }

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
