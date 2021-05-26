// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splitString = string.split(' ');
  return splitString;
}

// Desafio 4
function concatName(stringsArray) {
  let concatStrings = stringsArray[stringsArray.length - 1] + ', ' + stringsArray[0];
  return concatStrings;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let biggerValue = arrayOfNumbers[0];
  let countBigger = 0;

  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] > biggerValue) {
      biggerValue = arrayOfNumbers[i];
    } else {
      biggerValue = biggerValue;
    }
  }
  for (let iBig = 0; iBig < arrayOfNumbers.length; iBig += 1) {
    if (biggerValue === arrayOfNumbers[iBig]) {
      countBigger += 1;
    }
  }
  return countBigger;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  if (distCat1 < 0) {
    distCat1 *= -1;
  }
  let distCat2 = cat2 - mouse;
  if (distCat2 < 0) {
    distCat2 *= -1;
  }
  if (distCat1 > distCat2) {
    return 'cat2';
  } else if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat1 = distCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(myArray) {
  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] % 3 == 0 && myArray[index] % 5 == 0) {
      myArray[index] = 'fizzBuzz';
    }
  }
  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] % 3 == 0) {
      myArray[index] = 'fizz';
    }
  }
  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] % 5 == 0) {
      myArray[index] = 'buzz';
    }
  }
  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] % 3 != 0 && myArray[index] % 5 != 0) {
      if (typeof myArray[index] === 'number') {
        myArray[index] = 'bug!';
      }
    }
  }
  return myArray;
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
