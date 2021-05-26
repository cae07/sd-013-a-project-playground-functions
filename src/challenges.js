// Desafio 1
function compareTrue(boo1, boo2) {
  if (boo1 === true && boo2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2 ;
}

// Desafio 3
function splitSentence(phrases) {
  let array = [];
  let palavra = '';

  if (phrases.indexOf(' ') > -1) {
    for (let i = 0; i < phrases.length; i += 1 ) {
      if (phrases[i] !== ' ') {
          palavra += phrases[i];
      } else {
        array.push(palavra);
        palavra = '';
      }
    }
    array.push(palavra);
    return array;
  } else { 
    array.push(phrases);
    return array;
  }
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
  let higherNumber = -1;
  let greaterNumberCounts = 0;
  for(i = 0; i < array.length - 1; i += 1) {
    if (array[i] >= array[i + 1]) {
      if (array[i] !== higherNumber) {
        higherNumber = array[i];
        greaterNumberCounts = 1;
      } else {
        greaterNumberCounts += 1;
        if ( higherNumber === array[array.length - 1]) {
          greaterNumberCounts += 1;
        }
      }
    }
  }
  return greaterNumberCounts;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  distanciaCat1 = 0;
  distanciaCat2 = 0;
  if (mouse > cat1) {
     distanciaCat1 = mouse - cat1;
  } else if (mouse < cat1) {
     distanciaCat1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    distanciaCat2 = mouse - cat2;
  } else if (mouse < cat2) {
     distanciaCat2 = cat2 - mouse;
  }
  if ( distanciaCat1 < distanciaCat2 ) {
    return 'cat1';
  } else if ( distanciaCat2 < distanciaCat1 ) {
    return 'cat2';
  } else if ( distanciaCat1 == distanciaCat2 ) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] % 3 == 0) && (array[i] % 5 == 0)) {
      newArray.push('fizzBuzz');
    } else if (array[i] % 5 == 0) {
      newArray.push('buzz');
    } else if (array[i] % 3 == 0) {
      newArray.push('fizz');
    } else if ((array[i] % 3 !== 0) && (array[i] % 5 !== 0)) {
      newArray.push('bug!');
    }
  }
  return newArray;
}
array = [9, 25];
console.log(fizzBuzz(array));
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
