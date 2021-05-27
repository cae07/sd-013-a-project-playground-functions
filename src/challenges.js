function retornaMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(retornaMax([1, 222, 5, 9]));
// Desafio 1 - se ambos os valores forem true...
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(1, 0));
// Desafio 2 - calcula a área de um triangulo!
function calcArea(base, height) {
  const calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(frase) {
  const splitedArray = frase.split(' ');
  return splitedArray;
}

// Desafio 4
function concatName(nomes) {
  let ultimo = nomes.length - 1;
  let lastOne = [nomes[ultimo], nomes[0]].join(', ');
  return String(lastOne);
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5 - ...
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let contador = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === retornaMax(array)) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

// eslint-disable-next-line complexity
function fizzBuzz(array) {
  let list = [];
  // eslint-disable-next-line no-undef
  for (i in array) {
    // eslint-disable-next-line no-undef
    if (array[i] % 3 === 0 && array[i] % 5 === 0) list[i] = 'BuzzFizz';
    // eslint-disable-next-line no-undef
    else if (array[i] % 3 === 0) list[i] = 'fizz';
    // eslint-disable-next-line no-undef
    else if (array[i] % 5 === 0) list[i] = 'Buzz';
    // eslint-disable-next-line no-undef
    else list[i] = 'bug!';
  }
  return list;
}
console.log(fizzBuzz([9, 25]));
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

console.log(Math.abs(-1));
