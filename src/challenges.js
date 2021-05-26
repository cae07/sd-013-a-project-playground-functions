// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  }
  else {
    return false;
  }
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
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (highestNumber < array[index]) {
      highestNumber = array[index];
    }
  }

  let times = 0;
  for (index = 0; index < array.length; index += 1) {
    if (highestNumber === array[index]) {
      times += 1;
    }
  }

  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 < distCat2) {
    return 'cat1';
  }
  else if (distCat1 > distCat2) {
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {

    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      result.push('fizz');
    }
    else if (array[index] % 3 !== 0 && array[index] % 5 === 0) {
      result.push('buzz');
    }
    else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');
    }
    else {
      result.push('bug!');
    }

  }

  return result;
}

// Desafio 9
function encode(string) {
  let separate = string.split('');

  for (let index = 0; index < separate.length; index += 1) {

    if (separate[index] === 'a') {
      separate[index] = '1';
    }
    else if (separate[index] === 'e') {
      separate[index] = '2';
    }
    else if (separate[index] === 'i') {
      separate[index] = '3';
    }
    else if (separate[index] === 'o') {
      separate[index] = '4';
    }
    else if (separate[index] === 'u') {
      separate[index] = '5';
    }

  }

  return separate.join('');
}



function decode(string) {
  let separate = string.split('');

  for (let index = 0; index < separate.length; index += 1) {

    if (separate[index] === '1') {
      separate[index] = 'a';
    }
    else if (separate[index] === '2') {
      separate[index] = 'e';
    }
    else if (separate[index] === '3') {
      separate[index] = 'i';
    }
    else if (separate[index] === '4') {
      separate[index] = 'o';
    }
    else if (separate[index] === '5') {
      separate[index] = 'u';
    }

  }

  return separate.join('');
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
