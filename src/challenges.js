// Desafio 1
function compareTrue(value, value1) {
  if (value === true && value1 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2

function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3

function splitSentence(string) {
  let split = string.split(' ');
  return split;
}

// Desafio 4

function concatName(string1) {
  let concat = string1[string1.length - 1] + ', ' + string1[0];
  return concat;
}

console.log(concatName("go Trybe"));

// Desafio 5

function footballPoints(wins, ties) {
  let winspoints = 3 * wins;
  let tiespoints = 1 * ties;
  let points = winspoints + tiespoints;
  return points;
}

// Desafio 6

function highestCount(array1) {
  let nmaior = array1[0];
  let value = 0;

  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] > nmaior) {
      nmaior = array1[i];
    }
  }

  for (let ii = 0; ii < array1.length; ii += 1) {
    if (array1[ii] === nmaior) {
      value += 1;
    }
  }
  return value;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  if (dist1 < 0) {
    dist1 = dist1 * -1;
  }
  if (dist2 < 0) {
    dist2 = dist2 * -1;
  }

  if (dist1 > dist2) {
    return 'cat2';
  } else if (dist2 > dist1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8

function fizzBuzz(array2) {
  for (let i = 0; i < array2.length; i += 1) {
    if (array2[i] % 3 === 0 && array2[i] % 5 !== 0) {
      array2[i] = 'fizz';
    } else if (array2[i] % 5 === 0 && array2[i] % 3 !== 0) {
      array2[i] = 'buzz';
    } else if (array2[i] % 3 === 0 && array2[i] % 5 === 0) {
      array2[i] = 'fizzBuzz';
    } else {
      array2[i] = 'bug!';
    }
  }
  return array2;
}

// Desafio 9

function encode(string) {
  for (let x = 0; x <= string.length; x += 1) {
    string = string.replace('a', 1);
    string = string.replace('e', 2);
    string = string.replace('i', 3);
    string = string.replace('o', 4);
    string = string.replace('u', 5);
  }
  return string;
}

function decode(string2) {
  for (let x = 0; x <= string2.length; x += 1) {
    string2 = string2.replace(1, 'a');
    string2 = string2.replace(2, 'e');
    string2 = string2.replace(3, 'i');
    string2 = string2.replace(4, 'o');
    string2 = string2.replace(5, 'u');
  }
  return string2;
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
