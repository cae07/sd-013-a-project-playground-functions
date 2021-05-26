// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  let condition = true;
  if (val1 && val2) {
    condition = true;
  } else {
    condition = false;
  }
  return condition;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let fatia = frase.split(' ');
  return fatia;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let primeiroItem = arrayString[arrayString.length - 1];
  let ultimoItem = arrayString[0];
  let result = `${primeiroItem}, ${ultimoItem}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pointsWins = 3 * wins;
  let pointsTies = 1 * ties;
  return pointsWins + pointsTies;
}

// Desafio 6
function highestCount(arrayNum) {
  // seu código aqui
  let conta = 0;
  let max = Math.max.apply(null, arrayNum);
  for (let number of arrayNum) {
    if (number === max) {
      conta += 1;
    }
  }
  return conta;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result = ' ';
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 === dist2) {
    result = 'os gatos trombam e o rato foge';
  } else if (dist1 < dist2) {
    result = 'cat1';
  } else if (dist2 < dist1) {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(arrayNum) {
  // seu código aqui
  let conta = 0;
  for (let number of arrayNum) {
    if ((!(number % 3)) && (!(number % 5))) {
      arrayNum[conta] = 'fizzBuzz';
    } else if (!(number % 3)) {
      arrayNum[conta] = 'fizz';
    } else if (!(number % 5)) {
      arrayNum[conta] = 'buzz';
    } else {
      arrayNum[conta] = 'bug!';
    }
    conta += 1;
  }
  return arrayNum;
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let novaString = '';
  let array = frase.split('');
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 'a') {
      array[index] = '1';
    } else if (array[index] === 'e') {
      array[index] = '2';
    } else if (array[index] === 'i') {
      array[index] = '3';
    } else if (array[index] === 'o') {
      array[index] = '4';
    } else if (array[index] === 'u') {
      array[index] = '5';
    }
    novaString += array[index];
  }
  return novaString;
}

function decode(frase) {
  // seu código aqui
  let novaString = '';
  let array = frase.split('');
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === '1') {
      array[index] = 'a';
    } else if (array[index] === '2') {
      array[index] = 'e';
    } else if (array[index] === '3') {
      array[index] = 'i';
    } else if (array[index] === '4') {
      array[index] = 'o';
    } else if (array[index] === '5') {
      array[index] = 'u';
    }
    novaString += array[index];
  }
  return novaString;
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
