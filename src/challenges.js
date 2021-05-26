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
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(value) {
  let arr = [];

  for (let i = 0; i < value.length; i += 1) {
    arr[i] = 'bug!';
    if (value[i] % 15 === 0) {
      arr[i] = 'fizzBuzz';
    } else if (value[i] % 5 === 0) {
      arr[i] = 'buzz';
    } else if (value[i] % 3 === 0) {
      arr[i] = 'fizz';
    }
  }
  return arr;
}

// Desafio 9
function encode(value) {
  let value2 = '';
  let obj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };

  for (let i of value) {
    if (obj[i]) {
      value2 += obj[i];
    } else {
      value2 += i;
    }
  }
  return value2;
}

function decode(value) {
  let value2 = '';
  let obj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  };

  for (let i of value) {
    if (obj[i]) {
      value2 += obj[i];
    } else {
      value2 += i;
    }
  }
  return value2;
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
