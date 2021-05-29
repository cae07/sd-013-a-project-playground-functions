// Desafio 1
function compareTrue(a, b) {
  return (a === true && b === true);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return (string.split(' '));
}

// Desafio 4
function concatName(arrayString) {
  let stringReturn = '';
  const commaSpace = ', ';

  for (let index = arrayString.length - 1; index >= 0; index -= 1) {
    if (index === arrayString.length - 1) {
      stringReturn = arrayString[index] + commaSpace;
    } else if (index === 0) {
      stringReturn += stringReturn + arrayString[index];
    }
  }
  return (stringReturn);
}

// Desafio 5
function footballPoints(wins, ties) {
  let winningPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winningPoints + tiesPoints;

  return (totalPoints);
}

// Desafio 6
function highestCount(arrayNumbers) {
  const maxNumber = Math.max(...arrayNumbers);
  let timesItAppears = 0;
  for (let secondIndex = 0; secondIndex < arrayNumbers.length; secondIndex += 1) {
    if (arrayNumbers[secondIndex] === maxNumber) {
      timesItAppears += 1;
    }
  }
  return (timesItAppears);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs (cat1 - mouse);
  let distanceCat2 = Math.abs (cat2 - mouse);
  if (distanceCat1 === distanceCat2) {
    return ('os gatos trombam e o rato foge');
  } if (distanceCat1 > distanceCat2) {
    return ('cat2');
  } return ('cat1');
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let newArray = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if ((arrayNumbers[index] % 3 == 0) && (arrayNumbers[index] % 5 == 0)) {
      newArray.push('fizzBuzz');      
    } else if (arrayNumbers[index] % 5 == 0) {
        newArray.push('buzz');
      } else if (arrayNumbers[index] % 3 == 0) {
          newArray.push('fizz');
        } else {
            newArray.push('bug!');
          }
  }
  return (newArray);
}

// Desafio 9
function encode(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] == 'a') {
      newString = newString + '1';  
    } else if (string[index] == 'e') {
        newString = newString + '2';
      } else if (string[index] == "i") {
          newString = newString + '3';
        } else if (string[index] == 'o') {
            newString = newString + '4';
          } else if (string[index] == 'u') {
              newString = newString + '5';
            } else {
              newString = newString + string[index];
            }
  }
  return(newString);
}

function decode(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] == '1') {
      newString = newString + 'a';  
    } else if (string[index] == '2') {
        newString = newString + 'e';
      } else if (string[index] == '3') {
          newString = newString + 'i';
        } else if (string[index] == '4') {
            newString = newString + 'o';
          } else if (string[index] == '5') {
              newString = newString + 'u';
            } else {
              newString = newString + string[index];
            }
  }
  return(newString);
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
