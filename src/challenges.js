// Desafio 1
function compareTrue(a, b) {
  return b && a;
}
// Desafio 2
function calcArea(base, height) {
  return (Number(base) && Number(height)) ? ((base * height) / 2) : 'Numero Invalido!!!';
}

// Desafio 3
function splitSentence(frase) {
  return frase.length > 0 ? frase.split(' ') : 'String Vazia!!!';
}

// Desafio 4
function concatName(meuArray) {
  return meuArray.length >= 1 && `${meuArray[meuArray.length - 1]}, ${meuArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return Number(wins) && Number(ties) && ((wins * 3) + (ties * 1));
}

// Desafio 6
function maiorNumeroF(arrayNumero) {
let maiorNumero = arrayNumero[0];
for (let numeros of arrayNumero) {
  if (numeros > maiorNumero) maiorNumero = numeros
}
return maiorNumero;
}

function highestCount(arrayNumero) {
  let contador = 0;
  let maiorNumero = maiorNumeroF(arrayNumero)

  for (let numeros of arrayNumero) {
    if (numeros === maiorNumero) contador += 1;
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let ret = '';
  let rgC1M = Math.abs((cat1 > mouse) ? (cat1 - mouse) : (mouse - cat1));
  let rgC2M = Math.abs((cat2 > mouse) ? (cat2 - mouse) : (mouse - cat2));

  if (rgC1M > rgC2M) {
    ret = "cat2";
  } else if (rgC2M > rgC1M) {
    ret = "cat1";
  } else {
    ret = "os gatos trombam e o rato foge";
  }
  return ret;
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
