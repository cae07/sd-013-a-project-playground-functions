// Desafio 1
function compareTrue(boolean1, boolean2) {
  return ((boolean1 === true) && (boolean2 === true));
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangle = (base * height) / 2;
  return areaTriangle;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let resultado = `${array[array.length - 1]}, ${array[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function findHighestNumber(param) {
  let highestNumber = param[0];
  for (let index = 1; index < param.length; index += 1) {
    if (param[index] > highestNumber) {
      highestNumber = param[index];
    }
  }
  return highestNumber;
}
function highestCount(array) {
  let highestNumber = findHighestNumber(array);
  let repetitions = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highestNumber) {
      repetitions += 1;
    }
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(mouse - cat1);
  let cat2Dist = Math.abs(mouse - cat2);
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  }
  if (cat1Dist > cat2Dist) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function testeFB3ou5(param3ou5) {
  if (param3ou5 % 3 === 0) {
    return 'fizz';
  }
  if (param3ou5 % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(array) {
  let resposta = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      resposta.push('fizzBuzz');
    } else {
      let tempString = testeFB3ou5(array[index]);
      resposta.push(tempString);
    }
  }
  return resposta;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, 1);
  string = string.replace(/e/g, 2);
  string = string.replace(/i/g, 3);
  string = string.replace(/o/g, 4);
  string = string.replace(/u/g, 5);
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
