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
  let array = [];             // array vazia, criada para receber as palavras dividas pelo espaço da string original. Vai receber via .push.
  let letter = "";            //variável vazia, que vai receber as letras da string, para serem jogadas no array.

  for (let index = 0; index < string.length; index += 1) {
    if ((string[index] != " ") && (index != string.length - 1)) {
      letter = letter + string[index];
    } else if (index == string.length - 1) {
        letter = letter + string[index];
        array.push(letter);
      } else {    
          array.push(letter);
          letter = "";
        } 
  }
  return (array);
}

// Desafio 4
function concatName(arrayString) {
  let stringReturn = '';

  for (let index = arrayString.length - 1; index >= 0; index -= 1) {
    if (index === arrayString.length - 1) {
      stringReturn = arrayString[index] + ', ';
    } 
    else if (index == 0) {
      stringReturn = stringReturn + arrayString[index];
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
  let maxNumber = arrayNumbers[0];
  let timesItAppears = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > maxNumber) {
      maxNumber = arrayNumbers[index];
    }
  }
  for (let secondIndex = 0; secondIndex < arrayNumbers.length; secondIndex += 1) {
    if (arrayNumbers[secondIndex] == maxNumber) {
      timesItAppears += 1;
    }
  }
  return (timesItAppears);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs (cat1 - mouse);
  let distanceCat2 = Math.abs (cat2 - mouse);
  if (distanceCat1 == distanceCat2) {
    return ('os gatos trombam e o rato foge');
  } else if (distanceCat1 > distanceCat2) {
      return ('cat2');
    } else {
        return('cat1');
      }
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
