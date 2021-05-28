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

// Desafio 8 ---consertar algo aqui... código funciona mas não.

// eslint-disable-next-line complexity
function fizzBuzz(array) {
  let list = [];
  // eslint-disable-next-line no-undef
  for (i in array) {
    // eslint-disable-next-line no-undef
    if (array[i] % 3 === 0 && array[i] % 5 === 0) list[i] = 'fizzBuzz';
    // eslint-disable-next-line no-undef
    else if (array[i] % 3 === 0) list[i] = 'fizz';
    // eslint-disable-next-line no-undef
    else if (array[i] % 5 === 0) list[i] = 'buzz';
    // eslint-disable-next-line no-undef
    else list[i] = 'bug!';
  }
  return list;
}
console.log(fizzBuzz([2, 3, 5, 15]));

// Desafio 9
function encode(texto) {
  // a -> 1
  // e -> 2
  // i -> 3
  // o -> 4
  // u -> 5
  for (let i = 0; i < texto.length; i += 1) {
    texto = texto
      .replace('e', '2')
      .replace('a', '1')
      .replace('i', '3')
      .replace('o', '4')
      .replace('u', '5');
  }
  return texto;
}
console.log(encode('hi there!'));

function decode(texto) {
  // a -> 1
  // e -> 2
  // i -> 3
  // o -> 4
  // u -> 5
  for (let i = 0; i < texto.length; i += 1) {
    texto = texto
      .replace('1', 'a')
      .replace('2', 'e')
      .replace('3', 'i')
      .replace('4', 'o')
      .replace('5', 'u');
  }
  return texto;
}
console.log(decode(encode('hi there!')));
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

