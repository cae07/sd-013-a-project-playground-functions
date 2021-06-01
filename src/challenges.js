// Desafio 1
function compareTrue (number1, number2) {
  if (number1 && number2){
    return true;
  }
  return false;
}
console.log(compareTrue(1, 1));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let res = str.split(' ');
  return res;
}

// Desafio 4
function concatName(array) {
  let res = (array[array.length - 1] + ', ' + array[0]);
  return res;
}

// Desafio 5
function footballPoints(wins, ties) {
  let res = (wins * 3) + (ties);
  return res;
}

// Desafio 6
function highestCount(array) {
  let compare;
  if (array[0] > array[1]) {
    compare = array[0];
  } else {
    compare = array[1];
  }
  for (let index = 2; index < array.length; index += 1) {
    if (array[index] > compare) {
      compare = array[index];
    }
  }
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === compare) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  mouse = Math.abs(mouse);
  cat1 = Math.abs(cat1);
  cat2 = Math.abs(cat2);
  let dist1 = Math.max(mouse, cat1) - Math.min(mouse, cat1);
  let dist2 = Math.max(mouse, cat2) - Math.min(mouse, cat2);
  if (dist1 === dist2) {
    return ('os gatos trombam e o rato foge');
  } else if (dist1 < dist2){
    return ('cat1');
  } else {
    return ('cat2');
  }
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
