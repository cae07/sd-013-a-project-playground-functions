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
    if (numeros > maiorNumero) maiorNumero = numeros;
  }
  return maiorNumero;
}

function highestCount(arrayNumero) {
  let contador = 0;
  let maiorNumero = maiorNumeroF(arrayNumero);

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
    ret = 'cat2';
  } else if (rgC2M > rgC1M) {
    ret = 'cat1';
  } else {
    ret = 'os gatos trombam e o rato foge';
  }
  return ret;
}

// Desafio 8
function retornoFizzBuzz(value) {
  let retorno = '';
  retorno = value % 3 === 0 ? 'fizz' : retorno;
  retorno = value % 5 === 0 ? 'buzz' : retorno;
  retorno = (value % 3 === 0 && value % 5 === 0) ? 'fizzBuzz' : retorno;
  return retorno;
}

function setFizzBuss(arrfizzBuzz) {
  let arrRet = [];
  let rtFB = '';
  for (let index = 0; index < arrfizzBuzz.length; index += 1) {
    rtFB = retornoFizzBuzz(arrfizzBuzz[index]);
    arrRet.push(rtFB.length === 0 ? 'bug!' : rtFB);
  }
  return arrRet;
}

function fizzBuzz(arFiz) {
  let arRet = setFizzBuss(arFiz);
  return arRet;
}

// Desafio 9
function encode(str) {
  let strReturn = '';
  strReturn = str.split('a').join('1');
  strReturn = strReturn.split('e').join('2');
  strReturn = strReturn.split('i').join('3');
  strReturn = strReturn.split('o').join('4');
  strReturn = strReturn.split('u').join('5');
  return strReturn;
}
function decode(str) {
  let strReturn = '';
  strReturn = str.split('1').join('a');
  strReturn = strReturn.split('2').join('e');
  strReturn = strReturn.split('3').join('i');
  strReturn = strReturn.split('4').join('o');
  strReturn = strReturn.split('5').join('u');
  return strReturn;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  setFizzBuss,
  retornoFizzBuzz,
  footballPoints,
  highestCount,
  maiorNumeroF,
  splitSentence,
};
