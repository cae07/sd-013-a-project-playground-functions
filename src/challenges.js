// Desafio 1
function compareTrue(value, value1) {

  if(value ===true && value1 === true ){
    return true;
  } else {
    return false;
  }

}
// console.log(compareTrue(true, true));

// Desafio 2

function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}
// console.log(calcArea(51, 1));

// Desafio 3

function splitSentence(string) {
  let split = string.split(" "); 
  return split;
}
// console.log(splitSentence("go Trybe"));

// Desafio 4

function concatName(string1) {
  let concat = string1[string1.length-1] + ", " + string1[0];
  return concat;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5

function footballPoints(wins, ties) {
  let winspoints = 3*wins;
  let tiespoints = 1*ties;
  let points = winspoints + tiespoints;
  return points;
}
// console.log(footballPoints(14,8));

// Desafio 6

function highestCount(array1) {
  let nmaior = array1[0];
  let value  = 0;

  for(let i = 0; i < array1.length; i += 1){
    if (array1[i] > nmaior){
      nmaior = array1[i]
    }
  }

  for(let ii = 0; ii <array1.length; ii+=1){
    if(array1[ii] === nmaior){
      value += 1;
    }
  }

  return value;
}
// console.log(highestCount([-2,-2,-1]));

// Desafio 7

function catAndMouse(mouse,cat1,cat2) {
let dist1 = cat1 - mouse; 
let dist2 = cat2 - mouse;
  if(dist1 < 0){
    dist1 = dist1*(-1);
  }
  if(dist2 < 0){
    dist2 = dist2*(-1);
  }

  if(dist1 > dist2){
    return "cat2";
  }
  else if(dist2 > dist1){
    return "cat1";
  }
  else{
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(0,-3,3));


// Desafio 8

function fizzBuzz(array2) {
  for(let i = 0; i < array2.length; i += 1){
    if((array2[i] % 3) == 0 && (array2[i] % 5) != 0){
      array2[i] = "fizz";
    }
    else if((array2[i] % 5) == 0 && (array2[i] % 3) != 0){
      array2[i] = "buzz";
    }
    else if((array2[i] % 3) == 0 && (array2[i] % 5) == 0){
      array2[i] = "fizzBuzz";
    }

    else{
      array2[i] = "bug!";
    }
    
  }
return array2;
}

console.log(fizzBuzz([9,5]));


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
