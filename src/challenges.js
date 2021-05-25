// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let result = [];
  result = string.split(" ");
  return result;
}

// Desafio 4
function concatName(array) {
  let guarda = array;
  return (guarda[guarda.length - 1]) + ", " + guarda[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let guarda = array;
  let count = 0;
  let maior = guarda[0];

  for (let i = 1; i < guarda.length; i += 1) {
    if (guarda[i] > maior) {
      maior = guarda[i];
    }
  }
  for (let i2 = 0; i2 < guarda.length; i2 += 1) {
    if (maior === guarda[i2]) {
      count = count + 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disCat1 = Math.abs(mouse - cat1);
  let disCat2 = Math.abs(mouse - cat2);

  if (disCat1 < disCat2) {
    return "cat1";
  }
  else if (disCat1 === disCat2) {
    return "os gatos trombam e o rato foge";
  }
  else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let guarda = array;
  let string = [];

  for (let i = 0; i < guarda.length; i += 1) {

    if ((guarda[i] % 3 === 0) && (guarda[i] % 5 === 0)) {
      string.push('fizzBuzz');
    }
    else if ((guarda[i] % 3 === 0)) {
      string.push('fizz');
    }
    else if ((guarda[i] % 5 === 0)) {
      string.push('buzz');
    }
    else {
      string.push('bug!');
    }
  }
  return string;
}

// Desafio 9
function encode(string) {
  let word = string.split('');

  for (let i = 0; i < word.length; i += 1) {
    switch (word[i]) {
      case 'a':
        word[i] = 1;
        break;
      case 'e':
        word[i] = 2;
        break;
      case 'i':
        word[i] = 3;
        break;
      case 'o':
        word[i] = 4;
        break;
      case 'u':
        word[i] = 5;
        break;
      default:
        break;
    }
  }

  return word.join('');
}

function decode(string) {
  let word = string.split('');

  for (let i = 0; i < word.length; i += 1) {
    switch (word[i]) {
      case '1':
        word[i] = 'a';
        break;
      case '2':
        word[i] = 'e';
        break;
      case '3':
        word[i] = 'i';
        break;
      case '4':
        word[i] = 'o';
        break;
      case '5':
        word[i] = 'u';
        break;
      default:
        break;
    }
  }

  return word.join('');
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
