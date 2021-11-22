// Desafio 1
function compareTrue(paramA, paramB) {
  return paramA && paramB;
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
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = -10;
  let answer = 0;

  array.forEach((number) => {
    if (number > highestNumber) {
      highestNumber = number;
      answer = 1;
    } else if (number === highestNumber) {
      answer += 1;
    } else {
      answer += 0;
    }
  });

  return answer;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Distance = Math.abs(mouse - cat1);
  const cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance < cat2Distance) return 'cat1';
  if (cat1Distance > cat2Distance) return 'cat2';
  if (cat1Distance === cat2Distance) return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  const answer = [];
  array.forEach((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      answer.push('fizzBuzz');
    } else if (number % 3 === 0) {
      answer.push('fizz');
    } else if (number % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  });

  return answer;
}

// Desafio 9
function encode() {
  // seu código aqui
}

encode('hi there');
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
