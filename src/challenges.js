// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
/* Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
function splitSentence(myArray) {
  return myArray.split(' ');
}

// Desafio 4
function concatName(myArray) {
  return `${myArray[myArray.length - 1]}, ${myArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let ptsWins = 3;
  let ptsTies = 1;
  let result = ((wins * ptsWins) + (ties * ptsTies));
  return result;
}

// Desafio 6
function highestCount(myArray) {
  let biggerNumber = myArray[0];
  let counter = 0;

  for (let index of myArray) {
    if (index > biggerNumber) {
      biggerNumber = index;
      counter = 0;
    }
    if (index === biggerNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceOneCat = Math.abs(cat1 - mouse);
  let distanceTwoCat = Math.abs(cat2 - mouse);
  let result;

  if (distanceOneCat < distanceTwoCat) {
    result = 'cat1';
  } else if (distanceOneCat > distanceTwoCat) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  } return result;
}

// Desafio 8
function fizzBuzz(myArray) {
  let newArray = [];
  for (let counter of myArray) {
    let newString = 'bug!';
    if (counter % 15 === 0) {
      newString = 'fizzBuzz';
    } else if (counter % 3 === 0) {
      newString = 'fizz';
    } else if (counter % 5 === 0) {
      newString = 'buzz';
    }
    newArray.push(newString);
  }
  return newArray;
}

// Desafio 9
function encode(myString) {
  myString = myString.replace(/a/g, '1');
  myString = myString.replace(/e/g, '2');
  myString = myString.replace(/i/g, '3');
  myString = myString.replace(/o/g, '4');
  myString = myString.replace(/u/g, '5');
  return myString;
}
function decode(myString) {
  myString = myString.replace(/1/g, 'a');
  myString = myString.replace(/2/g, 'e');
  myString = myString.replace(/3/g, 'i');
  myString = myString.replace(/4/g, 'o');
  myString = myString.replace(/5/g, 'u');
  return myString;
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
