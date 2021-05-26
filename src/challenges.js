// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  for (const key in array) {
    return array[array.length - 1] + ', ' + array[0];
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let hightNumber = array[0];
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= hightNumber) {
      hightNumber = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === hightNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionC1, positionC2;
  if (cat1 <= mouse) {
    positionC1 = mouse - cat1;
  } else {
    positionC1 = cat1 - mouse;
  }
  if (cat2 <= mouse) {
    positionC2 = mouse - cat2;
  } else {
    positionC2 = cat2 - mouse;
  }
  if (positionC1 > positionC2) {
    return 'cat2';
  } else if (positionC2 > positionC1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  number = [];
  for (const key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      number.push('fizzBuzz')
    } else if (array[key] % 5 === 0) {
      number.push('buzz');
    } else if (array[key] % 3 === 0) {
      number.push('fizz');
    } else {
      number.push('bug!');
    }
  }
  return number;
}

// Desafio 9
function encode(str) {
  let par = str.split('');
  let par2 = [];
  for (const key in par) {
    if (par[key] === 'a') {
      par2 += '1';
    } else if (par[key] === 'e') {
      par2 += '2';
    } else if (par[key] === 'i') {
      par2 += '3';
    } else if (par[key] === 'o') {
      par2 += '4';
    } else if (par[key] === 'u') {
      par2 += '5';
    } else {
      par2 += par[key];
    }
  }
  return par2;
}

function decode(string) {
  let split = string.split("");
  let conc = [];
  for (const key in split) {
    if (split[key] === '1') {
      conc = conc + 'a';
    } else if (split[key] === '2') {
      conc = conc + 'e';
    } else if (split[key] === '3') {
      conc = conc + 'i';
    } else if (split[key] === '4') {
      conc = conc + 'o';
    } else if (split[key] === '5') {
      conc = conc + 'u';
    } else {
      conc += split[key];
    }
  }
  return conc;
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
