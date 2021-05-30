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
function highestCount(arrayNumbers) {
  let maiorNumero = 0;
  let repeticao = 0;

  for (let index = 0; index < arrayNUmbers.length; index += 1) {
    if (arrayNumbers[index] > maiorNumero) {
      maiorNumero = arrayNumbers[index];
    }
  }

  for (let index = 0; index < arrayNumbers.length; index +=1) {
    if (arrayNumbers[index] === maiorNumero) {
      repeticao += 1
    }
  }
  return repeticao;

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
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
// Desafio 9
function encode(string) {
  let newString = string.split('');
  for (let index = 0; index < string.length; index += 1){
    if (string[index] === 'a'){
      newString[index] = '1';
    } else if (string[index] === 'e'){
      newString[index] = '2';
    } else if(string[index] === 'i'){
      newString[index] = '3';
    } else if (string[index] === 'o'){
      newString[index] = '4';
    } else if (string[index] === 'u'){
      newString[index] = '5';
    }else {
      newString[index] = string[index];
    }
  }
  return newString.join('');
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
    } else{
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
