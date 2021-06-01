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
  return (parametro[parametro.lenght - 1] + ', ' + parametro[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(numbers) {
  let maior = Math.max(...numbers);
  let contador = 0;
  for (let i = 0; i < numbers.lenght; i += 1) {
    if (maior === numbers[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);

  if (dist1 < dist2) {
    return cat1;
  } else if (dist2 < dist1) {
    return cat2;
  } else if (dist2 === dist1) {
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
