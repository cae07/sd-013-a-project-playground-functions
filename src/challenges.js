// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(value) {
  return value.split(' ');
}

// Desafio 4
function concatName(value) {
  let v1 = value.shift();
  let v2 = value.pop();
  let v3 = `${v2}, ${v1}`;
  return v3;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vit = 3 * wins;
  let emp = 1 * ties;
  let result = vit + emp;
  return result;
}

// Desafio 6
function highestCount(value) {
  let higherNumber = value[0];
  let cont = 0;

  for (let index = 0; index < value.length; index += 1) {
    if (higherNumber < value[index]) {
      higherNumber = value[index];
      cont = 1;
    } else if (value[index] === higherNumber) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
