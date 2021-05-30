// Desafio 1
function compareTrue(valueOne, valueTwo) {
  // seu código aqui
  if(valueOne && valueTwo) {
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(text) {
  // seu código aqui
  let stringText = [];
  return stringText = text.split(" ");
}

// Desafio 4
function concatName(arrString) {
  // seu código aqui
  let lastPosition = arrString.length - 1;
  return arrString[lastPosition] + ', ' + arrString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let victories = wins * 3;
  if(wins === 0 && ties === 0) {
    return victories;
  }else {
    return (victories+ties);
  }
}

// Desafio 6
function highestCount(arrNumbers) {
  // seu código aqui
  let sum = 0;
  let biggerNumber = Math.max(...arrNumbers)
  for(let index = 0; index <= arrNumbers.length; index += 1) {
      if(biggerNumber === arrNumbers[index]){
        sum += 1;
    }
  }return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = (cat1 - mouse);
  let distanceCat2 = (cat2 - mouse);
  if(distanceCat1 < 0){
    distanceCat1 = (distanceCat1 * (-1));
  }
  if(distanceCat2 < 0){
    distanceCat2 = (distanceCat2 * (-1));
  }
  if(distanceCat1 > distanceCat2) {
    return 'cat2';
  }else if(distanceCat2 > distanceCat1) {
    return 'cat1';
  }else if(distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrNumbers) {
  // seu código aqui
  let text = [];
  for(let index = 0; index < arrNumbers.length; index += 1) {

    if(arrNumbers[index] % 5 === 0 && arrNumbers[index] % 3 === 0) {
      text.push('fizzBuzz');
    }
    else if(arrNumbers[index] % 3 === 0) {
      text.push('fizz');
    }
    else if(arrNumbers[index] % 5 === 0) {
      text.push('buzz');
    }else {
      text.push('bug!');
    }
  }return text;
}

// Desafio 9
function encode(encode) {
  // seu código aqui
  let stringEncode1 = encode;
  for(let index = 0; index < encode.length; index += 1){
    let stringEncode = ["a", "e", "i", "o", "u"];
    let numberEnconde = ["1", "2", "3", "4", "5"];

    for(let index1 = 0; index1 < stringEncode.length; index1 += 1){
      stringEncode1 = stringEncode1.replace(stringEncode[index1], numberEnconde[index1]);
    }
  }return stringEncode1;
}

function decode(decode) {
  // seu código aqui
  let stringDecoded1 = decode;
  for(let index = 0; index < decode.length; index += 1){
    let stringEncode = ["a", "e", "i", "o", "u"];
    let numberEnconde = ["1", "2", "3", "4", "5"];

    for(let index1 = 0; index1 < stringEncode.length; index1 += 1){
      stringDecoded1 = stringDecoded1.replace(numberEnconde[index1], stringEncode[index1]);
    }
  }return stringDecoded1;
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
