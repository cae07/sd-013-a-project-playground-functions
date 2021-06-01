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
  let arrayA = parametro
  return (arrayA[arrayA.lenght - 1] + ', ' + arrayA[0]);
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
function fizzBuzz(numbers) {
  let novoArray = [];

  for (let i = 0; i < numbers.lenght; i += 1) {
    if ((numbers[i] % 3) === 0 && (numbers[i] % 5) === 0) {
      novoArray.push('fizzBuzz');
    } else if ((numbers[i] % 5) === 0) {
      novoArray.push('buzz');
    } else if ((numbers[i] % 3) === 0) {
      novoArray.push('fizz');
    } else {
      novoArray.push('bug!');
    }
  }
  return novoArray;
}

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
