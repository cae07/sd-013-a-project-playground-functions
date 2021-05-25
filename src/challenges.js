// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === value2 && value1 === true){
    return true
  }
  else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height/2
}

// Desafio 3
function splitSentence(string) {
  let sentence = "";
  let phrase = [];
  let n = 0;
  for(let index = 0; index < string.length; index += 1){
    if(string[index] !== " "){
      sentence += string[index];
      phrase[n] = sentence;
    }
    else{
    n += 1;
    sentence = "";
    }
  }
  return phrase
}
// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties
}
// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let number = numbers[0]
    for(let indexnum = 0; indexnum < numbers.length; indexnum += 1){
      if(numbers[indexnum] > number){
        count = 1;
        number = numbers[indexnum];
      }
      else if (numbers[indexnum] === number){
        count += 1;
      }
    }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 > cat2){
    return "cat2";
  }
  else if ((mouse-cat1)+(mouse-cat2) === 0){
    return "os gatos trombam e o rato foge";
  }
  else{
    return "cat1";
  }
}
// Desafio 8
function fizzBuzz(array) {
  let phrase = []; 
  for(let index = 0; index < array.length; index += 1){
    if(array[index] % 3 === 0 && array[index] % 5 === 0){
      phrase[index] = "fizzBuzz";
    }
    else if(array[index] % 3 === 0 && array[index] % 5 !== 0){
      phrase[index] = "fizz";
    }
    else if(array[index] % 5 === 0 && array[index] % 3 !== 0){
      phrase[index] = "buzz";
    }
    else{
      phrase[index] = "bug!";
    }
  }
  return phrase;
}
// Desafio 9
function encode(string) {
  let phrase = ""
 for(let index = 0; index < string.length; index+=1){
   if(string[index] === "a"){
     phrase += 1;
   }
   else if(string[index] === "e"){
     phrase += 2;
   }
   else if(string[index] === "i"){
    phrase += 3;
  }
  else if(string[index] === "o"){
    phrase += 4;
  }
  else if(string[index] === "u"){
    phrase += 5;
  }
  else{
    phrase += string[index]
  }
 }
 return phrase
}
function decode(string) {
  let phrase = ""
  for(let index = 0; index < string.length; index+=1){
    if(string[index] === "1"){
      phrase += "a";
    }
    else if(string[index] === "2"){
      phrase += "e";
    }
    else if(string[index] === "3"){
     phrase += "i";
   }
   else if(string[index] === "4"){
     phrase += "o";
   }
   else if(string[index] === "5"){
     phrase += "u";
   }
   else{
     phrase += string[index]
   }
  }
  return phrase
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
