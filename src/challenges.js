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
function fizzBuzz(numberArray) {
  let output = []
  for (let i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] % 3 === 0 && numberArray[i] % 5 === 0) {
      output.push('fizzBuzz');
    } else if (numberArray[i] % 5 === 0) {
      output.push('buzz');
    } else if (numberArray[i] % 3 === 0) {
      output.push('fizz')
    } else {output.push('bug'); }
  }
  return output;
}
// Desafio 9
function encode(encodeString) {
  let splitedString = encodeString.split('');
  for (let index = 0; index < splitedString.length; index += 1) {
    if (splitedString[index] === 'a') {
      splitedString[index] = 1;
    } else if (splitedString[index] === 'e') {
      splitedString[index] = 2;
    } else if (splitedString[index] === '1') {
      splitedString[index] = 3;
    } else if (splitedString[index] === 'o') {
      splitedString[index] = 4;
    } else if (splitedString[índex] === 'u') {
      splitedString[index] = 5;
    } else {}
  }
  return splitedString.join('');
}
function decode(string) {
  let newString = string.split('');
  for (let index = 0; index < string.length; index += 1){
    if (string[index] = '1'){
      newString[index] = 'a';
    } else if (string[index] === '2'){
      newString[index] = 'e';
    } else if (string[index] === '3'){
      newString[index] = 'i';
    } else if(string[index] === '4'){
      newString [index] = 'o';
    } else if (string[index] === '5'){
      newString (string[index] = 'u');
    } else {
      newString[index] = string[index];
    }
  }
  return newString.join('');
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
