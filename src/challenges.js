// Desafio 1
function compareTrue(value1, value2) {
  if (value1 == true && value2 == true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  calcArea = (base * height) / 2;
  return calcArea;
}

// Desafio 3
function splitSentence(go) {
  let result = go.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let sum = (array[array.length - 1]) + ', ' + array[0];
  return sum;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  let numberWins = wins * winsPoints;
  let numberTies = ties * tiesPoints;
  return numberWins + numberTies;
}

// Desafio 6
function highestCount(array) {
  let contador = 0;
  let maiorNumero = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (maiorNumero < array[i]) {
      maiorNumero = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (maiorNumero === array[i]) {
      contador += 1;
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2,) {
  let distanciaCat1 = Math.abs(mouse - cat1)
  let distanciaCat2 = Math.abs(mouse - cat2)
  if (distanciaCat1 < distanciaCat2) {
    return "cat1"
  } else if (distanciaCat2 < distanciaCat1) {
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let array = [];
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      array.push("fizzBuzz");
    } else if (numeros[i] % 3 === 0) {
      array.push("fizz");
    } else if (numeros[i] % 5 === 0) {
      array.push("buzz");
    } else {
      array.push("bug!");
    }
  }
  return array;
}

// Desafio 9
function encode(array) {
  let criptografado = "";
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'a') {
      criptografado = criptografado + '1';
    } else if (array[i] === 'e') {
      criptografado = criptografado + '2';
    } else if (array[i] === 'i') {
      criptografado = criptografado + '3';
    } else if (array[i] === 'o') {
      criptografado = criptografado + '4';
    } else if (array[i] === 'u') {
      criptografado = criptografado + '5';
    } else {
      criptografado = criptografado + array[i];
    }
  }
  return criptografado;
}
function decode(array) {
  let descriptografando = "";
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '1') {
      descriptografando = descriptografando + 'a';
    } else if (array[i] === '2') {
      descriptografando = descriptografando + 'e';
    } else if (array[i] === '3') {
      descriptografando = descriptografando + 'i';
    } else if (array[i] === '4') {
      descriptografando = descriptografando + 'o';
    } else if (array[i] === '5') {
      descriptografando = descriptografando + 'u';
    } else {
      descriptografando = descriptografando + array[i];
    }
  }
  // Créditos ao Josué Lobo que me ajudou nesse desafio! http://github.com/RoyMusthang
  return descriptografando;
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
