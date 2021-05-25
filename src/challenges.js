// Desafio 1 - Compara se dois valores são true
function compareTrue(num1, num2) {
  let compare = false;
  if (num1 && num2 === true) {
    compare = true;
  }

  return compare;
}

// Desafio 2 - calcula a área de um triângulo
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3 - cria um array com as strings separadas de uma frase
function splitSentence(stringSentence) {
  let array = stringSentence.split(' ');
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
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6 - Crie uma função que calcule a repetição do maior número
function highestCount(array) {
  let big = 0;
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > big) {
      big = array[i];
      count = 0;
      count += 1;
    } else if (array[i] === big) {
      big = array[i];
      count += 1;
    }
  }
  return count;
}

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
function fizzBuzzAux(num){
  let aux2 = '';
    if ((num % 3 === 0) && (num % 5 != 0)) {
      aux2 = 'fizz';
    } else if ((num % 3 != 0) && (num % 5 === 0)) {
      aux2 = 'buzz';
    } else if ((num % 3 === 0) && (num % 5 === 0)) {
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
  } return newArray;
}

let test = [2, 15, 7, 9, 45];
console.log(fizzBuzz(test));

// Desafio 9 - 
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
