// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let arr = array[0];
  let arr2 = array[array.length - 1];
  let space = ' ';
  let comma = ',';
  let result = arr2 + comma + space + arr;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = 3;
  let empate = 1;
  return wins * vitoria + ties * empate;
}

// Desafio 6
function highestCount() {

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = mouse - cat1;
  let mouseCat2 = mouse - cat2;
  let cat;

  if (mouseCat1 < 0) {
    mouseCat1 *= -1;
  } else if (mouseCat2 < 0) {
    mouseCat2 *= -1;
  }

  if (mouseCat1 < mouseCat2) {
    cat = 'cat1';
  } else if (mouseCat2 < mouseCat1) {
    cat = 'cat2';
  } else {
    cat = 'os gatos trombam e o rato foge';
  }
  return cat;
}

// Desafio 8
function fizzBuzz() {
  // seu código
}

// Desafio 9
function encode(string2) {
  string2 = string2.replace(/a/g, '1');
  string2 = string2.replace(/e/g, '2');
  string2 = string2.replace(/i/g, '3');
  string2 = string2.replace(/o/g, '4');
  string2 = string2.replace(/u/g, '5');
  return string2;
  // Precisamos utilizar o 'g' após a barra devido ser a flag "Global"
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
  // Precisamos utilizar o 'g' após a barra devido ser a flag "Global"
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
