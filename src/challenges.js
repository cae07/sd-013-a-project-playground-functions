// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}
console.log(compareTrue('1', 'false'));
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
let sum = calcArea(10, 50);
let sum2 = calcArea(5, 2);
let sum3 = calcArea(51, 1);

console.log(sum, sum2, sum3);
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go trybe vamo que vamo foguete'));
// Desafio 4
function concatName(phrase) {
  let concatenacao = `${phrase[phrase.length - 1]}, ${phrase[0]}`;
  return concatenacao;
}
let name = concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
let trybe = concatName(['foguete', 'não', 'tem', 'ré']);
let pirate = concatName(['captain', 'my', 'captain']);
console.log(name, trybe, pirate);
// Desafio 5
function footballPoints(wins, ties) {
  let vitory = 3 * wins;
  let empate = 1 * ties;
  let result = vitory + empate;
  return result;
}
let soma = footballPoints(14, 8);
let soma2 = footballPoints(1, 2);
let soma3 = footballPoints(0, 0);
console.log(soma, soma2, soma3);
// Desafio 6
let array1 = [9, 1, 2, 3, 9, 5, 7];
let array2 = [0, 4, 4, 4, 9, 2, 1];
let array3 = [0, 0, 0];
function highestCount(array1) {
  let maiorNumero = array1[0];
  let counter = 0;
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] >= maiorNumero) {
      maiorNumero = array1[i];
    }
  }
  for (let j = 0; j < array1.length; j += 1) {
    if (array1[j] === maiorNumero) {
      counter++;
    }
  }
  return counter;
}
let totalSoma = highestCount(array1);
let totalSoma2 = highestCount(array2);
let totalSoma3 = highestCount(array3);
console.log(totalSoma, totalSoma2, totalSoma3);
// Bianca Caetano me ajudou!
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gatoA = Math.abs(cat1 - mouse);
  let gatoB = Math.abs(cat2 - mouse);

  if (gatoA < gatoB) {
    return 'cat1';
  } if (gatoB < gatoA) {
    return 'cat2';
  } if (gatoA === gatoB) {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
let buzzArray = [2, 15, 7, 9, 45];
function fizzBuzz(buzzArray) {
  let somaTudo = [];
  for (let index = 0; index < buzzArray.length; index += 1) {
    if (buzzArray[index] % 15 === 0 ) {
      somaTudo.push('fizzBuzz');
    } else if (buzzArray[index] % 5 === 0) {
      somaTudo.push('buzz');
    } else if (buzzArray[index] % 3 === 0) {
      somaTudo.push('fizz');
    } else {
      somaTudo.push('bug!');
    }
  }
  return somaTudo;
}

// Desafio 9

function encode(nome) {
  let saida = '';
  let obje = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i = 0; i < nome.length; i += 1) {
    if (obje[nome[i]]) {
      saida += obje[nome[i]];
    } else {
      saida += nome[i];
    }
  }
  return saida;
}
console.log(encode('Hello! hello!'));

function decode(string) {
  let saida = '';
  let obje = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (const chaveValor of string) {
    if (obje[chaveValor]) { /* verifica se existe */
      saida += obje[chaveValor]; /* adiciona o valor da chave */
    } else {
      saida += chaveValor; /* letra */
    }
  }

  return saida;
}
console.log(decode('H2ll4!'));
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
