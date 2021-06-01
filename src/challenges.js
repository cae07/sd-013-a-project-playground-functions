// Desafio 1
function compareTrue(param1_1,param1_2) {
 if (param1_1 === true && param1_2 === true){
   return true;
 } else {
   return false;
 }
}

// Desafio 2
function calcArea(base,height) {
  let area = (base*height)/2; 
  return area
}

// Desafio 3
function splitSentence(sentence) {
  let y =0;
  for (let i=0; i < sentence.length; i++){
    
      
    }
  }
}

// Desafio 4
function concatName(param4_1) {
  return param4_1[param4_1.length-1]+", "+param4_1[0]
}

// Desafio 5
function footballPoints(wins,ties) {
 return wins*3+ties*1
}

// Desafio 6
function highestCount(param6_1) {
  let max_number =0;
  let sumMaxNumber=0;
  
    for (i = 0; i < param6_1.length; i++){
      if (param6_1[i]>max_number){
        max_number = param6_1 [i];
      }
    }


    for (y = 0; y < param6_1.length; y++){
      if (param6_1[y] === max_number){
        sumMaxNumber = sumMaxNumber +1;
      }
    }
    return sumMaxNumber
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
