// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(str) {
  primeiroItem = str[0];
  ultimoItem = str[str.length-1]
  teste = `${ultimoItem}, ${primeiroItem}`
  return teste
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + ties
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let counter = 0;
  for (let i = 0; i < array.length; i += 1){
    if (array[i] >= maior){
      maior = array[i];
    }
  }
  for (let index = 0; index < array.length; index += 1){
    if (array[index] === maior){
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = (mouse - cat1)**2;
  let dist2 = (mouse -cat2)**2;
  if (dist1 === dist2){
    return 'os gatos trombam e o rato foge';
  } else if (dist1 < dist2){
    return 'cat1';
  }else{
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let aux = [];
  for (let i = 0; i < array.length; i += 1){
    if (array[i] % 3 == 0 && array[i] % 5 == 0){
      aux.push('fizzBuzz');
    } else if (array[i] % 3 == 0){
      aux.push('fizz');
    } else if (array[i] % 5 == 0){
      aux.push('buzz');
    } else{
      aux.push('bug!');
    }
  }
  return aux;
}

// Desafio 9
function encode(str) {
  let newStr = '';
  let letra = '';
  let letras = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  for (let i = 0; i < str.length; i += 1){
    letra = str[i];
    if (letra in letras){
      newStr += letras[letra];
    } else{
      newStr += letra;
    }
  }
  return newStr;
}

function decode(str) {
  let newStr = '';
  let letra = '';
  let letras = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  }
  for (let i = 0; i < str.length; i += 1){
    letra = str[i];
    if (letra in letras){
      newStr += letras[letra];
    } else{
      newStr += letra;
    }
  }
  return newStr;
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
