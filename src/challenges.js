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
function highestCount(array) {
  let larger = 0;
  let result = 0;
  for(let index = 0; index < array.length; index += 1) {
    if (array[index] > larger) {
      larger = array[index];
    }
  }
  for (let index = 0; index < array.length; index +=1) {
    if (larger === array[index]) {
      result += 1;
    }
  }
  return result;
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
function encode(string) {
  let splitStringArray = string.split ('');
  for(let index in splitStringArray) {
    if (splitStringArray[index] === 'a') {
      splitStringArray[index] = 1;
    } else if (splitStringArray[index] === 'e') {
      splitStringArray[index] = 2;
    } else if (splitStringArray[index] === '1') {
      splitStringArray[index] = 3;
    } else if (splitStringArray[index] === 'o') {
      splitStringArray[index] = 4;
    } else if (splitStringArray[index] === 'u') {
      splitStringArray[index] = 5;
    }
  }
  return splitStringArray.join('');
}
function decode(code) {
  const numbers = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5 'u'};
  let decoded = '';
  for (let symbol in code) {
    if(numbers[code[symbol]]) {
      decoded += numbers[code[symbol]];
    } else {
      decoded += code[symbol];
    }
  }
  return decoded;
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
