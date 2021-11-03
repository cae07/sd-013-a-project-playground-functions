// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let splits = frase.split(' ');
  return splits;
}

// Desafio 4
function concatName(primeiraPalav) {
  let ultimaPalav = '';
  for (let index = 0; index < primeiraPalav.length; index += 1) {
    ultimaPalav = primeiraPalav[index];
  }
  let soma = `${ultimaPalav}, ${primeiraPalav[0]}`;
  return soma;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  let somaPoints = pointsWins + pointsTies;
  return somaPoints;
}

// Desafio 6
function highestCount(numbers) {
  let highNumber = numbers[0];
  let counter = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highNumber) {
      highNumber = numbers[index];
      counter = 0;
    }
    if (numbers[index] === highNumber) {
      counter += 1;
    }
  }

  // for (let index = 0; index < numbers.length; index += 1) {
  //   if (numbers[index] === highNumber) {
  //     counter += 1;
  //   }
  // }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mDistCat1 = mouse - cat1;
  let mDistCat2 = mouse - cat2;
  mDistCat1 = Math.abs(mDistCat1);
  mDistCat2 = Math.abs(mDistCat2);

  if (mDistCat1 <= 2 && mDistCat2 <= 2) {
    return 'os gatos trombam e o rato foge';
  }
  if (mDistCat1 < mDistCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
const calcFunction = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return ('fizzBuzz');
  } if (number % 5 === 0) {
    return ('buzz');
  } if (number % 3 === 0) {
    return ('fizz');
  }
  return ('bug!');
};
const fizzBuzz = (array) => {
  let arrayVazio = [];

  for (let index = 0; index < array.length; index += 1) {
    const atualNumber = array[index];
    arrayVazio.push(calcFunction(atualNumber));
  }
  return arrayVazio;
};

// Desafio 9
function encode(palav) {
  palav = palav.replaceAll('a', '1');
  palav = palav.replaceAll('e', '2');
  palav = palav.replaceAll('i', '3');
  palav = palav.replaceAll('o', '4');
  palav = palav.replaceAll('u', '5');
  return palav;
}

function decode(numbs) {
  numbs = numbs.replaceAll('1', 'a');
  numbs = numbs.replaceAll('2', 'e');
  numbs = numbs.replaceAll('3', 'i');
  numbs = numbs.replaceAll('4', 'o');
  numbs = numbs.replaceAll('5', 'u');
  return numbs;
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
