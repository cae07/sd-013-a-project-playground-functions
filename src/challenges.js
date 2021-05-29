// Desafio 1
function compareTrue(val1, val2) {
  if(val1 == true && val2 == true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area
}

// Desafio 3
function splitSentence(word) {
  let arrayWord = word.split(' ');
  return arrayWord
}


// Desafio 4
function concatName(nome) {
  let concatVar = nome[nome.length-1];
  concatVar += ', ' + nome[0]; 
  return concatVar
}


// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  return winsPoints + tiesPoints
}

// Desafio 6
function highestCount(highestCount) {
  let count = 0;
  let biggerNumber = (-2)**1023;

  for(let num of highestCount){
    if(biggerNumber <= num){
      biggerNumber = num     
    }    
  }

  for(let num of highestCount){
    if(biggerNumber == num){
      count += 1;
    }
  }

  return count
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;  

  if(Math.abs(distanceCat1) === Math.abs(distanceCat2)){
    return "os gatos trombam e o rato foge"    

  }else if(Math.abs(distanceCat1) < Math.abs(distanceCat2)){
    return "cat1"

  }else{
    return "cat2"
  }
}


// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
