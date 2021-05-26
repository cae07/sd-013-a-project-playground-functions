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
  let result = primeiroItem + ', ' + ultimoItem;
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
