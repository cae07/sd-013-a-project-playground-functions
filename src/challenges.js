// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 && valor2 == true){
    return true;
  } else{
    return false;
  }
}
console.log(compareTrue(true, true))
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(51,1))
// Desafio 3
function splitSentence(myString) {
let array= myString.split(/[\s,]+/);  
return array;
}
let myString = "foguete"
console.log(splitSentence(myString))

// Desafio 4
function concatName(array) {
 let soma = array[array.length -1] + ", " + array[0] 
 return soma
}
console.log(concatName(['Lucas','Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + (1 * ties);
  return pontos;
}
console.log(footballPoints(1 ,2))
// Desafio 6
function highestCount(array) {
  let maior = array[0]; 
  let count = 0;
  for(let index = 0; index < array.length;index+=1){
    if (array[index] > maior ){
     maior = array[index];
   }
}
for(let index2 =0; index2 < array.length; index2 += 1){
 if(array[index2] == maior)
 count+=1;
}
return count
  
}
console.log(highestCount([0, 0, 0]))
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
