// Desafio 1
function compareTrue(value1, value2) {
  if (value1 == true && value2 ==true) {
    return true;
  } else {
    return false;
  }
    
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  str = str.split(" ");
  return str
}

// Desafio 4
function concatName(array) {
  console.log(array[array.length-1]+','+' '+ array[0])
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = 3*wins + ties;
  return total;
}
console.log (footballPoints(1,2));
// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let maxcount=0;
  for(let i=0;i<array.length;i+=1){
      for (let j=1; j<array.length; j+=1){
          if(array[j]>maior) {
              maior = array[j];
          }
      }
  }            
  for(let k=0;k<array.length;k+=1){
      if(array[k]===maior){
          maxcount +=1;
      }
  }
return maxcount;
console.log(maxcount); 
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
