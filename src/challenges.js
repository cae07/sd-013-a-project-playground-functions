// Desafio 1
function compareTrue(param1_1 , param1_2) {
 let comparison =false
  if (param1_1 === true && param1_2 === true){
    comparison = true;
 } else {
  comparison = false;
 }
 return comparison
}

// Desafio 2
function calcArea(base,height) {
  let area = (base*height)/2; 
  return area
}

// Desafio 3
function splitSentence(sentence) {
 
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
  let max_number ;
  let sumMaxNumber = 0;
  
    for (var i = 0; i < param6_1.length; i++){
      if (max_number === undefined) {
          max_number = param6_1[i]
      }else{
          if (param6_1[i]>max_number){
          max_number = param6_1 [i];
          }
      }
    }


    for (var y = 0; y < param6_1.length; y++){
      if (param6_1[y] === max_number){
        sumMaxNumber = sumMaxNumber +1;
      }
    }
    return sumMaxNumber
  }

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  distCat1 = mouse - cat1
  distCat2 = mouse - cat2
  let winner
  if (distCat1 > distCat2){
    winner = "cat1"
  } else { 
    winner = "cat2"
  }
  return winner
}

// Desafio 8
function fizzBuzz(param8_1) {
  let fizzBuzzArray
  for(var i=0 ; i < param8_1.length; i++){
    if (param8_1 [i]%3 === 0 && param8_1 [i]%5 === 0){
      fizzBuzzArray[i]= "fizzBuzz"
    }else if(param8_1 [i]%3 === 0){
      fizzBuzzArray[i] = "fizz"

    }else if(param8_1 [i]%5 === 0){
      fizzBuzzArray[i] = "buzz"

    } else {
      fizzBuzzArray[i] = "bug!"
    }
  }
  return fizzBuzzArray
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
