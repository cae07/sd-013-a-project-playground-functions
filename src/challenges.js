// Desafio 1
function compareTrue(key1, key2) {
  return (key1 && key2);
}
// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}
// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(' ');
  return fraseSeparada;
}

// Desafio 4
function concatName(arrayString) {
  let primeiro = arrayString[arrayString.length - 1];
  let ultimo = arrayString[0];
  return (`${primeiro}, ${ultimo}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6
function highestCount(numArray) {
  let count = 1;
  let maior = numArray[0];
  for (let i = 1; i < numArray.length; i += 1) {
    if (maior < numArray[i]) {
      maior = numArray[i];
      count = 1;
    } else if (maior === numArray[i]) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = Math.abs(mouse - cat1);
  let d2 = Math.abs(mouse - cat2);
  if (d1 > d2) {
    return ('cat2');
  }
  if (d1 === d2) {
    return ('os gatos trombam e o rato foge');
  }
  return ('cat1');
}
// Desafio 8
function fizzBuzz(numArray) {
  let fizzBuzzArray = [];
  for (let i = 0; i < numArray.length; i += 1) {
    let word = 'bug!';
    if (numArray[i] % 15 === 0) {
      word = 'fizzBuzz';
    } else if (numArray[i] % 3 === 0) {
      word = 'fizz';
    } else if (numArray[i] % 5 === 0) {
      word = 'buzz';
    }
    fizzBuzzArray.push(word);
  }
  return fizzBuzzArray;
}
// Desafio 9
function encode(fraseToEncode) {
  let dicionario = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let f = fraseToEncode.replace(/[aeiou]/g, (lambidaFunction) => dicionario[lambidaFunction]);
  return f;
}

function decode(fraseToDecode) {
  let dicionario = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let f = fraseToDecode.replace(/[1-5]/g, (lambidaFunction) => dicionario[lambidaFunction]);
  console.log(f);
  return f;
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
