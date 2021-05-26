// Desafio 1
function compareTrue(key1,key2) {
  return (key1 && key2);
}
// Desafio 2
function calcArea(base,altura) {
  let area = (base * altura)/2;
  return area;
}
// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(" ");
  return fraseSeparada;
}

// Desafio 4
function concatName(arrayString) {
  return(arrayString[arrayString.length - 1]+", "+arrayString[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return(wins*3 + ties * 1);
}

// Desafio 6
function highestCount(numArray) {
  if (numArray.length > 1){
    let count = 1;
    let maior = numArray[0];
    for(let i = 1; i < numArray.length;i++){
      if(maior < numArray[i]){
        maior = numArray[i];
        count = 1;
      } 
      else if(maior == numArray[i]){
        count ++;
      }
    }
    return count;
  }
  return (numArray.length);
}
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
