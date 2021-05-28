// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}
// Desafio 4
function concatName(array) {
  let result = array[array.length-1]+ ", " + array[0]; 
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointswins = 3;
  let pointsties = 1;
  let sumWins = pointswins * wins;
  let sumTies = pointsties * ties;

  return sumTies + sumWins;

}

// Desafio 6
function highestCount(array) {
  let cont = 0;
  let numberHigh = array[0];

  for(i = 0; i < array.length; i++){
    if(array[i] >= numberHigh){
      numberHigh = array[i];
    }
  }
  for(i = 0; i < array.length; i++){
    if(array[i] === numberHigh){
      cont += 1;
    }
  }
  return cont;
}
console.log(highestCount([-2,-2,-1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs((mouse - cat1)) > Math.abs((mouse - cat2))){
    return "cat2";
  } else if(Math.abs((mouse - cat1)) < Math.abs((mouse - cat2))){
    return "cat1"
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let num = [];

  for (let i = 0; i < array.length; i++){
    if(array[i] % 3 === 0 && array[i] % 5 === 0){
      num[i] = "fizzBuzz";
    } else if(array[i] % 3 === 0){
      num[i] = "fizz";
    } else if(array[i] % 5 === 0){
      num[i] = "buzz";
    } else {
      num[i] = "bug!";
    }
  } return num;
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
