// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}
console.log(calcArea(50, 3));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('O bicho tá pegando"'));

// Desafio 4
function concatName(nome) {
  let resultado = `${nome[nome.length - 1]}, ${nome[0]}`;
  // let resultado = nome[nome.length -1] + ', ' + nome[0];
  return resultado;
}
console.log(concatName(['Fulano', 'Beltrano', 'Cicrano', 'De tal']));

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}
console.log(footballPoints(5, 2));

// Desafio 6
function highestCount(array) {
  let maiorNum = array[0];
  let numMaiorRepete = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNum) {
      numMaiorRepete = 0;
      maiorNum = array[index];
    }
    if (maiorNum === array[index]) {
      numMaiorRepete += 1;
    }
  }
  return numMaiorRepete;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      result.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
