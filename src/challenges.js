// Desafio 1
function compareTrue(val1, val2) {
  if (val1 == true && val2 == true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue);

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(cat) {
  return cat[cat.length - 1] + ', ' + cat[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let win1 = wins * 3;
  let tie1 = ties * 1;
  let jn = win1 + tie1;
  return jn;
}

// Desafio 6
function highestCount(value) {
  let highnumber = value[0];
  let cont = 0;
  for (let i = 0; i < value.length; i += 1) {
    if (highnumber < value[i]) {
      highnumber = value[i];
      cont = 1;
    } else if (value[i] === highnumber) {
      cont += 1;
    }
  }
  return cont;
}
/*console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))*/

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)){
    return 'cat2';
  }
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(fizu) {
  let ara = [];

  for (let i = 0; i < fizu.length; i += 1) {
    ara[i] = 'bug!';
    if (fizu[i] % 15 === 0) {
      ara[i] = 'fizzBuzz';
    } else if (fizu[i] % 5 === 0) {
      ara[i] = 'buzz';
    } else if (fizu[i] % 3 === 0) {
      ara[i] = 'fizz';
    }
  }
  return ara;
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
