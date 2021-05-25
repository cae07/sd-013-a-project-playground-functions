// Desafio 1
function compareTrue(par1, par2) {
  if (par1 == true && par2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
return (base*height)/2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(array) {
  return `${array[array.length -1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  highestnum = numbers[0];
  for (let indexhigh = 1; indexhigh < numbers.length; indexhigh += 1) {
    if (highestnum < numbers[indexhigh]) {
      highestnum = numbers[indexhigh];
    }
  }
  let countRepetition = 0;
  for (let indexrepetition = 0; indexrepetition < numbers.length; indexrepetition += 1) {
    if (highestnum == numbers[indexrepetition]) {
      countRepetition += 1;
    }
  }
  return countRepetition;
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
