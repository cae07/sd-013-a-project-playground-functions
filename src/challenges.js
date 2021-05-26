// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  let calcAreaTriangulo = (base * height) / 2;
  return calcAreaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let indiceDoArray = `${arrayDeStrings[arrayDeStrings.length - 1]}, ${arrayDeStrings[0]}`;
  return indiceDoArray;
}
// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let qntpoints = vitorias + empates;
  return qntpoints;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = arrayDeNumeros[0];
  let contador = 0;
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    if (arrayDeNumeros[i] > maiorNumero) {
      contador = 0;
      maiorNumero = arrayDeNumeros[i];
    }
    if (maiorNumero === arrayDeNumeros[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat2 < distCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
