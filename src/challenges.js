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
function highestCount(numbers) {
  let count = 0;
  let highestNumber = Math.max(...numbers);
  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
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
function fizzBuzz(Array) {
  let result = [];
  for(index in Array) {
    if(Array[index] % 3 == 0 && Array[index] % 5 == 0) {
      result.push('fizzBuzz');
    } else if (Array[index] % 3 == 0) {
      result.push('fizz');
    } else if (Array[index] % 5 == 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    };
  };
  return result;
};
// Desafio 9
function encode(phrase) {
  for (let letter = 0; letter < phrase.length; letter += 1) {
    phrase = phrase.replace('a', '1');
    phrase = phrase.replace ('e', '2');
    phrase = phrase.replace ('i', '3');
    phrase = phrase.replace ('o', '4');
    phrase = phrase.replace ('u', '5');
  }
  return (phrase);
}
function decode(phrase) {
  for (let letter = 0; letter < phrase.length; letter += 1) {
    phrase = phrase.replace('1', 'a');
    phrase = phrase.replace('2', 'e');
    phrase = phrase.replace('3', 'i');
    phrase = phrase.replace('4', 'o');
    phrase = phrase.replace('5', 'u');
  }
  return (phrase);
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
