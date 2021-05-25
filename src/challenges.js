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

  if(modCat1 > modMouse){
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
