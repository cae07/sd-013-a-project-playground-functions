// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(str) {
  let primeiroItem = str[0];
  let ultimoItem = str[str.length - 1];
  let teste = `${ultimoItem}, ${primeiroItem}`;
  return teste;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function findMax(array) {
  let maior = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= maior) {
      maior = array[i];
    }
  }
  return maior;
}

function highestCount(array) {
  let maior = findMax(array);
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = (mouse - cat1) ** 2;
  let dist2 = (mouse - cat2) ** 2;
  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist2 < dist1) {
    return 'cat2';
  }
}

// Desafio 8

function makeString(number) {
  let convertedText;
  if (number % 3 === 0 && number % 5 === 0) {
    convertedText = 'fizzBuzz';
  } else if (number % 3 === 0) {
    convertedText = 'fizz';
  } else if (number % 5 === 0) {
    convertedText = 'buzz';
  } else {
    convertedText = 'bug!';
  }
  return convertedText;
}

function fizzBuzz(array) {
  let aux = [];
  for (let i = 0; i < array.length; i += 1) {
    aux.push(makeString(array[i]));
  }
  return aux;
}

// Desafio 9
function encode(str) {
  let newStr = '';
  let letra = '';
  let letras = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i = 0; i < str.length; i += 1) {
    letra = str[i];
    if (letra in letras) {
      newStr += letras[letra];
    } else {
      newStr += letra;
    }
  }
  return newStr;
}

function decode(str) {
  let newStr = '';
  let letra = '';
  let letras = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let i = 0; i < str.length; i += 1) {
    letra = str[i];
    if (letra in letras) {
      newStr += letras[letra];
    } else {
      newStr += letra;
    }
  }
  return newStr;
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
