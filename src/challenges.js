// Desafio 1
function compareTrue(bv1, bv2) {
  if (bv1 === true && bv2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}

// Desafio 3
function splitSentence(d3str) {
  return d3str.split(' ')
}

// Desafio 4
function concatName(d4arr) {
  let i = d4arr.length-1

  return '' + d4arr[i] + ', ' + d4arr[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  
  return wins + ties;
}

// Desafio 6
function highestCount(d6arr) {
  let maior = d6arr[0];

  for (let i = 0; i < d6arr.length; i++){
    if (d6arr[i] > maior){
      maior = d6arr[i];
    }
  }
  
  let contador = 0;

  for (let j = 0; j < d6arr.length; j++){
    if (d6arr[j] === maior){
      contador++
    }
  }

  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let c1 = cat1 - mouse;
  let c2 = cat2 - mouse;

  if (c1 < 0){
    c1 *= -1;
  }

  if (c2 < 0){
    c2 *= -1;
  }

  if (c1 < c2){
    return 'cat1';
  } else if (c2 < c1){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(d8arr){
  let fB = [];

  for (let i = 0; i < d8arr.length; i++){
    if (d8arr[i] % 5 === 0 && d8arr[i] % 3 === 0){
      fB.push('fizzBuzz');
    } else if (d8arr[i] % 5 === 0){
      fB.push('buzz');
    } else if (d8arr[i] % 3 === 0){
      fB.push('fizz');
    } else {
      fB.push('bug!')
    }
  }

  return fB;
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
