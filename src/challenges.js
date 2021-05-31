// Desafio 1 - Compara se dois valores são true
function compareTrue(num1, num2) {
  let compare = true;
  if (num1 && num2 === true) {
    compare = true;
  } else if (num1 || num2 === true) {
    compare = false;
  } else { compare = false; }

  return compare;
}

// Desafio 2 - calcula a área de um triângulo
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3 - cria um array com as strings separadas de uma frase
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4 - concatenação de strings, retornando o primeiro item e o último item de um array
function concatName(arrayString) {
  let result = [];
  for (let i = 0; i < arrayString.length; i += 1) {
    if (i === 0) {
      result.push(arrayString[i]);
    }
    if (i === arrayString.length - 1) {
      result.push(arrayString[i]);
    }
  }
  result = result.reverse();
  return result.join(', ');
}

// Desafio 5 - calcule a quantidade de pontos no futebol
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6 - Crie uma função que calcule a repetição do maior número
function highestCount(array) {
  let big = Math.abs(array[0]);
  let count = 1;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > big) {
      big = array[i];
      count = 1;
    } else if (array[i] === big) {
      count += 1;
    } else if (array[i] < 0 && Math.abs(array[i]) > big) {
      big = Math.abs(array[i]);
      count = 1;
    }
  }
  return count;
}
// let arrayTest = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(arrayTest));

// Desafio 7 - função de Caça ao Rato
function catAndMouse(mouse, cat1, cat2) {
  let winner = '';
  let posCat1 = Math.abs(mouse - cat1);
  let posCat2 = Math.abs(mouse - cat2);

  if (posCat1 > posCat2) {
    winner = 'cat2';
  } else if (posCat1 < posCat2) {
    winner = 'cat1';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
  return winner;
}

// Desafio 8 - função FizzBuzz
function fizzBuzzAux(num) {
  let aux2 = '';
  if (num % 3 === 0 && num % 5 !== 0) {
    aux2 = 'fizz';
  } else if (num % 3 !== 0 && num % 5 === 0) {
    aux2 = 'buzz';
  } else if (num % 3 === 0 && num % 5 === 0) {
    aux2 = 'fizzBuzz';
  } else {
    aux2 = 'bug!';
  }
  return aux2;
}

function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(fizzBuzzAux(array[index]));
  }
  return newArray;
}

// Desafio 9 - função que Codifique e Decodifique
function encode(string) {
  let array = string.split('');
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'a') {
      array[i] = 1;
    } else if (array[i] === 'e') {
      array[i] = 2;
    } else if (array[i] === 'i') {
      array[i] = 3;
    } else if (array[i] === 'o') {
      array[i] = 4;
    } else if (array[i] === 'u') {
      array[i] = 5;
    }
  }
  let newString = array.join('');
  return newString;
}

function decode(string) {
  let array = string.split('');
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '1') {
      array[i] = 'a';
    } else if (array[i] === '2') {
      array[i] = 'e';
    } else if (array[i] === '3') {
      array[i] = 'i';
    } else if (array[i] === '4') {
      array[i] = 'o';
    } else if (array[i] === '5') {
      array[i] = 'u';
    }
  }
  let newString = array.join('');
  return newString;
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
