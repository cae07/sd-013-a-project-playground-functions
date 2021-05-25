// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) { return true; } else { return false; }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];
  return last.concat(', ', first);
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (3 * wins) + ties;
  return total;
}

// Desafio 6
function highestCount(array) {
  let repetidos = 0;
  let maiorNumero = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero < array[index]) {
      maiorNumero = array[index];
      repetidos = 0;
    }

    if (maiorNumero === array[index]) {
      repetidos += 1;
    }
  }

  return repetidos;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // depois de bater a cabeça, percebi que 
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 > distanceCat2) return 'cat2'; 
  if (distanceCat2 > distanceCat1) return 'cat1'; 
  if (distanceCat1 === distanceCat2) return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let newArr = [];
  
  for (let index in numbers) {
    let div3 = numbers[index] % 3 === 0;
    let div5 = numbers[index] % 5 === 0;
    let div3and5 = numbers[index] % 5 === 0 && numbers[index] % 3 === 0;

    if (div3and5) {
      newArr.push('fizzBuzz');
    } else if (div3) {
      newArr.push('fizz');
    } else if (div5) {
      newArr.push('buzz');
    } else {
      newArr.push('bug!');
    }
  }

  return newArr;
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
