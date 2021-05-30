// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}
let value = calcArea(10, 50);
console.log(value);

// Desafio 3
function splitSentence(string1) {
  let result = string1.split(' ');
  return result;
}
console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(array) {
  let bothNames = `${array[array.length -1]}, ${array[0]}`;
  return bothNames;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins,ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  return (winsPoints * wins) + (tiesPoints * ties);
}

// Desafio 6
function highestCount(listNumbers) {
  let high = 0;
  let count = 0;
  for (let index = 0; index <listNumbers.length; index += 1) {
    if(listNumbers[index] > high) {
      high = listNumbers[index];
    }
    if (listNumbers[index] === high) { 
      count += 1;
    }
    return count;
  }

  }
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);
  if (gato1 < gato2) {
    return 'cat1';
  }
  if (gato2 < gato1) {
    return 'cat2'
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(returnDeArray) {
  let fizzBuzzArray = [];
  for (let index = 0; index < returnDeArray.length; index +=1) {
    if (returnDeArray[index] % 3 === 0 && returnDeArray[index] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (returnDeArray[index] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (returnDeArray[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug');
    }
  }
  return fizzBuzzArray;
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
