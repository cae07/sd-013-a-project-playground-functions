// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(b, h) {
  return (b * h) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numArray) {
  return [...numArray]
    .sort((a, b) => b - a)
    .filter((n, idx, array) => n === array[0])
    .reduce((t) => t + 1, 0);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = Math.abs(mouse - cat1);
  let d2 = Math.abs(mouse - cat2);
  return d1 === d2
    ? 'os gatos trombam e o rato foge'
    : `cat${d1 < d2 ? '1' : '2'}`;
}

// Desafio 8
function fizzBuzz(numArray) {
  return numArray.map((n) => {
    if (n % 3 === 0) {
      if (n % 5 === 0) {
        return 'fizzBuzz';
      }
      return 'fizz';
    }

    if (n % 5 === 0) {
      return 'buzz';
    }

    return 'bug!';
  });

  // **********************
}

// Desafio 9
function encode(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  return string
    .split('')
    .map((c) => {
      let foundIndex = vowels.indexOf(c);
      return foundIndex !== -1 ? foundIndex + 1 : c;
    })
    .join('');
}
function decode(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  return string
    .split('')
    .map((c) => (Number(c) ? vowels[c - 1] : c))
    .join('');
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
