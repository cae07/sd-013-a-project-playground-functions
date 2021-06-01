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
  let sentenceArray = sentence.split(" ")
    return sentenceArray
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
  
  if (distCat1 <0){
    distCat1=-distCat1
  }
  
  if (distCat2 <0){
    distCat2=-distCat2
  }
  
  
  let winner
  if (distCat1 < distCat2){
    winner = "cat1"
  } else if(distCat2 < distCat1){ 
    winner = "cat2"
  }else{
    winner = "os gatos trombam e o rato foge"
  }
  return winner
}

// Desafio 8
function fizzBuzz(param8_1) {
  let fizzBuzzArray =[]
  for(var i=0 ; i < param8_1.length; i++){
    if (param8_1 [i]%3 === 0 && param8_1 [i]%5 === 0){
      fizzBuzzArray.push("fizzBuzz")
    }else if(param8_1 [i]%3 === 0){
      fizzBuzzArray.push("fizz")

    }else if(param8_1 [i]%5 === 0){
      fizzBuzzArray.push("buzz")

    } else {
      fizzBuzzArray.push("bug!")
    }
  }
  return fizzBuzzArray
}

// Desafio 9
function encode(param9_1) {
  let encodeArray = param9_1
  for (var i=0 ; i< param9_1.length; i++){
    switch (param9_1 [i]){
      case "a" :
      encodeArray[i] = "1";
      break;
      case "e":
      encodeArray[i] = "2";
      break;
      case "i":
      encodeArray[i] = "3";
      break;
      case "o":
      encodeArray[i] = "4";
      break;
      case "u":
      encodeArray[i] = "5";
      break;
      default:
      encodeArray[i]= param9_1 [i]  
    }
    return encodeArray
  }
}
function decode() {

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
