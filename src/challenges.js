// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3 - Ajudado por jackson pires no zoom
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(value) {
  let result = [];
  for (let index = 0; index < value.length; index += 1) {
  }
  result = value[value.length - 1] + ', ' + value[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let win = wins * 3;
  let tie = ties * 1;
  let result = win + tie;
  return result;
}

// Desafio 6
function highestCount(value) {
  let number = -10;
  let highNumber = 0;
  for (let index = 0; index < value.length; index += 1) {
    if (number < value[index]) {
      number = value[index];
    }
  }
  for (let count = 0; count < value.length; count += 1) {
    if (value[count] === number) {
      highNumber += 1;
    }
  }
  return highNumber;
}

// // Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;
  if (distCat1 < 0) {
    distCat1 *= -1;
  }
  if (distCat2 < 0) {
    distCat2 *= -1 ;
  }
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat1 > distCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(value) {
  let result = [];
  for (let counter = 0; counter < value.length; counter += 1) {
    if (value[counter] % 3 === 0 && value[counter] % 5 === 0) {
      result.push('fizzBuzz');
    }
    else if (value[counter] % 3 === 0) {
      result.push('fizz');
    }
    else if (value[counter] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let separa = string.split('');
  let code = '';
  for (let index = 0; index < string.length; index += 1) {
    if (separa[index] === 'a') {
      code += 1;
    } else if (separa[index] === 'e') {
      code += 2;
    } else if (separa[index] === 'i') {
      code += 3;
    } else if (separa[index] === 'o') {
      code += 4;
    } else if (separa[index] === 'u') {
      code += 5;
    } else {
      code += separa[index];
    }
  }
  return code;
}
(console.log(encode('os alemaes sao foda')))
function decode(code) {
  let decodeCode = '';
  for (let index = 0; index < code.length; index += 1) {
    if (code[index] === '1') {
      decodeCode += 'a';
    } else if (code[index] === '2') {
      decodeCode += 'e';
    } else if (code[index] === '3') {
      decodeCode += 'i';
    } else if (code[index] === '4') {
      decodeCode += 'o';
    } else if (code[index] === '5') {
      decodeCode += 'u';
    } else {
      decodeCode += code[index];
    }
  }
  return decodeCode;
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
