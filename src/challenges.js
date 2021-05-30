// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true
  } else return false
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
    let res = (base * height) / 2;
    return res;
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  let res = string.split(' ');
  return res;
  // seu código aqui
}

// Desafio 4
function concatName() {
  let firstName = concatName.length[0]
  let lastName = concatName.length[-1]
  let res = firstName," "lastName"."
  return res
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  pointsWins = wins * 3;
  pointsTies = ties * 1;
  let res = pointsWins + pointsTies
  return res
  // seu código aqui
}

// Ajuda atravez do link:https://www.youtube.com/watch?v=pkJXwPvselI
// Desafio 6
function highestCount(valor) {
  let maiorNumero = valor[0];
  let cont = 0;
  for (let index = 0; index < valor.length; index += 1) {
    if (valor[index] > maiorNumero) {
      maiorNumero = valor[index];
      cont = 0;
    }
    if (valor[index] === maiorNumero) {
      cont += 1;
    }
  }
  return cont;
  // seu código aqui


// Desafio 7
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
    let cat1Distance = Math.abs(cat1 - mouse);
    let cat2Distance = Math.abs(cat2 - mouse);

    if (cat1Distance < cat2Distance) {
        return 'cat1';
    } else if (cat2Distance < cat1Distance) {
        return 'cat2';
    } else {
        return 'os gatos trombam e o rato foge';
    }
}
  // seu código aqui
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
