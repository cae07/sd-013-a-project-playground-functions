// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(' ');
  return arrayDeStrings;
}

console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let concatItens = `${lastItem}, ${firstItem}`;
  return concatItens;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let results = vitorias + empates;
  return results;
}

console.log(footballPoints(0, 0));

// Desafio 6

function highestCount(numeros) {
  let maiorValor = numeros[0];
  for (let indice in numeros) {
    if (numeros[indice] > maiorValor) {
      maiorValor = numeros[indice];
    }
  }
  let cont = 0;
  for (let indice in numeros) {
    if (numeros[indice] === maiorValor) {
      cont += 1;
    }
  }
  return cont;
}

console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = mouse - cat1;
  let d2 = mouse - cat2;
  if (Math.abs(d1) === Math.abs(d2)) {
    return 'os gatos trombam e o rato foge';
  } if (Math.abs(d1) < Math.abs(d2)) {
    return 'cat1';
  } return 'cat2';
}

console.log(catAndMouse(10, 4, 22));

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
