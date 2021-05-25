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
console.log(highestCount([-1, -1, 10]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
