// Desafio 1
function compareTrue(param1, param2) {
  let equal = false;
  if (param1 === true && param2 === true){
    equal = true;
  }
  else{
    equal = false;
  }
  return equal;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
// Fonte: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-3.php
function splitSentence(phrase) {
  return phrase.trim().split(" ");
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(input) {
  let str = input[[input.length-1]] + ", " + input[0];
  return str;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(win,ties) {
  let pontos = (win*3) + (ties);
  return pontos;
}
console.log(footballPoints(14,8));

// Desafio 6
function highestCount(input) {
  let contador = 0;
  let biggest = input[0];
  for (let index = 0; index < input.length; index += 1){
    if (biggest < input[index]){
      biggest = input[index];
    }
  }
  for (index = 0; index < input.length; index += 1){
    if (biggest === input[index]){
      contador += 1;
    }
  }
  return contador;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
// Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse,cat1,cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  let result = " "
  if (dist1 == dist2){
    result = "os gatos trombam e o rato foge"
  }
  else if (dist1 < dist2){
    result = "cat1"
  } 
  else {
    result = "cat2"
  }
  return result;
}
console.log(catAndMouse(0,3,2));

// Desafio 8
function fizzBuzz(input) {
  let array = [];
  for (index =0; index < input.length; index += 1){
    if (input[index]%3==0 && input[index]%5==0){
      array.push("fizzBuzz");
    }  
    else if (input[index]%3==0){
      array.push("fizz");
    }
    else if (input[index]%5==0){
      array.push("buzz");
    }
    else {
      array.push("bug!");
    }
  }
  return array;
}
console.log(fizzBuzz([9, 25]));

// Desafio 9
// Fonte: https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
function encode(input) {
  let encoded = input.replace(/a/gi,"1");
  encoded = encoded.replace(/e/gi,"2");
  encoded = encoded.replace(/i/gi,"3");
  encoded = encoded.replace(/o/gi,"4");
  encoded = encoded.replace(/u/gi,"5");
  return encoded;
}
console.log(encode("hi there!"));

function decode(input) {
  let decoded = input.replace(/1/gi,"a");
  decoded = decoded.replace(/2/gi,"e");
  decoded = decoded.replace(/3/gi,"i");
  decoded = decoded.replace(/4/gi,"o");
  decoded = decoded.replace(/5/gi,"u");
  return decoded;
}
console.log(decode("4l1 m5nd4!"));

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
