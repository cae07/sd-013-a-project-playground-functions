// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let splitado = frase.split(' ');
  return splitado;
}

// Desafio 4
function concatName(parametro) {
  let arrayQuatro = parametro;
  return (arrayQuatro[arrayQuatro.length - 1]) + ", " + arrayQuatro[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(numbers) {
  let contador = 0;
  let maior = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
      maior = numbers[i];
    }
  }
  for (let i2 = 0; i2 < numbers.length; i2 += 1) {
    if (maior === numbers[i2]) {
      count = count + 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = (mouse - cat1);
  let dist2 = (mouse - cat2);

  if (dist1 < dist2) {
    return 'cat1';
  } else if (dist2 < dist1) {
    return 'cat2';
  } else {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz(numbers8) {
  let novoArray = [];

  for (let i = 0; i < numbers8.lenght; i += 1) {
    if ((numbers8[i] % 3) === 0 && (numbers8[i] % 5) === 0) {
      novoArray.push('fizzBuzz');
    } else if ((numbers8[i] % 5) === 0) {
      novoArray.push('buzz');
    } else if ((numbers8[i] % 3) === 0) {
      novoArray.push('fizz');
    } else {
      novoArray.push('bug!');
    }
  }
  return novoArray;
}

// Desafio 9
function encode(letras) {
  let words = letras.split('');

  for (let i = 0; i < words.length; i += 1) {
    switch (words[i]) {
    case 'a':
      words[i] = 1;
      break;
    case 'e':
      words[i] = 2;
      break;
    case 'i':
      words[i] = 3;
      break;
    case 'o':
      words[i] = 4;
      break;
    case 'u':
      words[i] = 5;
      break;
    default:
      break;
    }
  }
  return words.join('');
}
function decode(numeros) {
  let numbers9 = numeros.split('');

  for (let i = 0; i < numbers9.length; i += 1) {
    switch (numbers9[i]) {
    case '1':
      numbers9[i] = 'a';
      break;
    case '2':
      numbers9[i] = 'e';
      break;
    case '3':
      numbers9[i] = 'i';
      break;
    case '4':
      numbers9[i] = 'o';
      break;
    case '5':
      numbers9[i] = 'u';
      break;
    default:
      break;
    }
  }
  return numbers9.join('');
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
