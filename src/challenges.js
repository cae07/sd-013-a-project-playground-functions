// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true ) {
    return true;
  } else {
    return false;
  }
};

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area
};

// Desafio 3
function splitSentence(frase) {
  let split = frase.split(" ");
  return split
};

// Desafio 4
function concatName(array) {
  let concat = array[array.length - 1] + ', ' + array[0];
  return concat;
}
console.log(concatName(['Rafael', 'Carlos', 'Araujo']));

// Desafio 5
function footballPoints() {
  // seu código aqui
}











// Desafio 6
function highestCount() {
  // seu código aqui
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
