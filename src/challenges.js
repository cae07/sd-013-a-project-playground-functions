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
  for (let count = 0; count < array.length; count += 1) {
    if (array[count] === number) {
      highNumber += 1;
    }
  }
  return highNumber;
}

// // Desafio 7
// function catAndMouse(mouse, cat1, cat2) {
//   let result = 0;
//   if (mouse - cat1 > mouse - cat2) {
//     return 'cat1';
//   }
//   if (mouse - cat1 < mouse - cat2) {
//     return 'cat2';
//   } 
//   if ((mouse - cat2) < 0) {
//     result = mouse - cat2 * (-1);
//   }
//   if (result === mouse - cat1) {
//     return 'os gatos trombam e o rato foge';
//   }
// }

// Desafio 8
// function fizzBuzz(array) {
//   let result = [''];
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] % 3 === 0 && array[index] % 5 === 0) {
//       result = result + 'fizzBuzz';
//     }
//     else if (array[index] % 3 === 0) {
//       result = result + 'fizz';
//     }
//     else if (array[index] % 5 === 0) {
//       result = result + 'buzz';
//     }
//     result = result + 'bug!'
//   }
//   return result;
// }



// // Desafio 9
function encode(string) {
  let separa = string.split('');
  let code = '';
  for (let index = 0; index < string.length; index += 1) {
    if (separa[index] === 'a') {
      code = code + 1;
    }
    else if (separa[index] === 'e') {
      code = code + 2;
    }
    else if (separa[index] === 'i') {
      code = code + 3;
    }
    else if (separa[index] === 'o') {
      code = code + 4;
    }
    code = code + 5;
  }
  return code;
}
console.log(encode('aeiou'));
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
