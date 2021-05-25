// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
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
function splitSentence(word) {
  let sentence = [];
  sentence = word.split(' ');
  return sentence;
}

// Desafio 4
function concatName(names) {
  let newName = `${names[(names.length) - 1]}, ${names[0]}`;
  return newName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins * 3) + (ties * 1);
  return total;
}

// Desafio 6
function highestCount(numbers) {
  let ordered = numbers.sort();
  let highest = ordered[ordered.length - 1];
  let count = 0;
  for (const key in numbers) {
    if (highest === numbers[key]) {
      count += 1;
    }
  }
  return `${count}; ${highest}; ${ordered}`;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 > distCat2) {
    return 'cat2';
  } else if (distCat2 > distCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let phrase = [];
  for (const key in numbers) {
    if ((numbers[key] % 3) === 0 && (numbers[key] % 5) === 0) {
      phrase.push('fizzBuzz');
    } else if ((numbers[key] % 1) === 0 && (numbers[key] % 5) === 0) {
      phrase.push('buzz');
    } else if ((numbers[key] % 1) === 0 && (numbers[key] % 3) === 0) {
      phrase.push('fizz');
    } else { //((numbers[key] / 3) != 0 || (numbers[key] / 5) != 0)
      phrase.push('bug!');
    }
  }
  return phrase;
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
