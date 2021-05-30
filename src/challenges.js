// Desafio 1
function compareTrue(input1, input2) {
  if (input1 === true && input2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(inputToSplit) {
  return inputToSplit.split(' ');
}

// Desafio 4
function concatName(inputConcat) {
  let concated = [inputConcat.slice(-1)] + [', '] + [inputConcat.slice(0, 1)];

  return concated;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;

  return points;
}

// Desafio 6
function highestCount(numberArray) {
  let hNum = numberArray[0];

  let count = 0;

  for (let i = 0; i < numberArray.length; i += 1) {
    if (hNum < numberArray[i]) {
      hNum = numberArray[i];
      count = 0;
    }
    if (hNum === numberArray[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let relPosCat1 = Math.abs((cat1 > mouse) ? (cat1 - mouse) : (mouse - cat1));
  let relPosCat2 = Math.abs((cat2 > mouse) ? (cat2 - mouse) : (mouse - cat2));
  if (relPosCat1 < relPosCat2) {
    return 'cat1';
  }
  if (relPosCat1 > relPosCat2) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // let numbers = nArray;
  // let fizzBuzzString = [];
  // for (let i = 0; i < numbers.length; i += 1) {
  //   let calc3 = numbers[i] / 3;
  //   let calc5 = numbers[i] / 5;
  //   if (Number.isInteger(calc5) === true && Number.isInteger(calc3) === true) {
  //     fizzBuzzString.push('fizzbuzz');
  //   } else if (Number.isInteger(calc3) === true) {
  //     fizzBuzzString.push('fizz');
  //   } else if (Number.isInteger(calc5) === true) {
  //     fizzBuzzString.push('buzz');
  //   } fizzBuzzString.push('bug!');
  // }
  // return fizzBuzzString;
}

// Desafio 9
function encode(toEcode) {
  let replace = toEcode.replace(/a/g, 1);
  replace = replace.replace(/e/g, 2);
  replace = replace.replace(/i/g, 3);
  replace = replace.replace(/o/g, 4);
  replace = replace.replace(/u/g, 5);
  return replace;
}
function decode(toDecode) {
  let decoding = toDecode.replace(/1/g, 'a');
  decoding = decoding.replace(/2/g, 'e');
  decoding = decoding.replace(/3/g, 'i');
  decoding = decoding.replace(/4/g, 'o');
  decoding = decoding.replace(/5/g, 'u');
  return decoding;
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
