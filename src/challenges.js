// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if(v1 === true && v2 === true){
    return true;
  } else return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base*height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let lastIndex = (array.length - 1);
  let concat = array[lastIndex] + ', ' + array[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sum = (wins * 3) + ties;
  return sum;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maxNumber = array[0];
  let contador = 0;
  for(let i1 = 0; i1 < array.length; i1 +=1){
    if (maxNumber < array[i1]){
      maxNumber = array[i1];
    } 
  } for(let i2=0; i2 < array.length; i2 +=1){
      if (array[i2] === maxNumber){
        contador +=1;
      }
    } return contador;   
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let modCat1 = Math.abs(cat1); 
  let modCat2 = Math.abs(cat2);
  let modMouse = Math.abs(mouse);
  let distanceCat1 = 0;
  let distanceCat2 = 0;

  if(modCat1 > modMouse){// 30 - 40 = -10
    distanceCat1 = modCat1 - modMouse;
  } else {
    distanceCat1 = modMouse - modCat1;
  }
  if(modCat2 > modMouse){
    distanceCat2 = modCat2 - modMouse;
  } else {
    distanceCat2 = modMouse - modCat2;
  }
  if(distanceCat1 === distanceCat2){
    return "os gatos trombam e o rato foge";
  } 
  if (distanceCat2 > distanceCat1){
    return "cat1";
  } else return "cat2";  
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let newArray = [];
  for(let index=0; index < array.length; index +=1){
    if(array[index] % 3 !== 0 && array[index] % 5 !== 0){
      newArray.push("bug!");
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0){
      newArray.push("fizzBuzz");
    } else if(array[index] % 3 !== 0 && array[index] % 5 === 0){
      newArray.push("buzz");
    } else if(array[index] % 3 === 0 && array[index] % 5 !== 0){
      newArray.push("fizz");
    } 
  } return newArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  string = string.replace(/a/g, "1");
  string = string.replace(/e/g, "2");
  string = string.replace(/i/g, "3");
  string = string.replace(/o/g, "4");
  string = string.replace(/u/g, "5");
  return string;  
}

function decode(string) {
  // seu código aqui
  string = string.replace(/1/g, "a");
  string = string.replace(/2/g, "e");
  string = string.replace(/3/g, "i");
  string = string.replace(/4/g, "o");
  string = string.replace(/5/g, "u");
  return string;  
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
