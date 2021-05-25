// Desafio 1
function compareTrue(bollean1, bollean2) {
  if (bollean1 === true && bollean2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return ((base * altura) / 2);
}

// Desafio 3
function splitSentence(sentenca) {
  return sentenca.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length -1].concat( ', ' ,array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));

  // seu código aqui
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = -99;
  let maiorNumeroSeRepete = 0;
  for (let i = 0 ; i<array.length ; i += 1){
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    } else {
    }
  }
  let contador = 0;
  for (let i = 0; i < array.length ; i += 1) {
    if (maiorNumero === array[i]) {
      contador += 1;
    } else {

    }
    maiorNumeroSeRepete = contador;
  }
  return(maiorNumeroSeRepete)
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 - mouse > cat2 - mouse){
    return 'cat2' ;
  } else if (cat2 - mouse > mouse - cat1){
    return 'cat1' ;
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let arrayDeResposta = []
  for (let index = 0; index < arrayDeNumeros.length ; index += 1) {
    let numero = arrayDeNumeros[index]
    if (divisivelPor3e5(numero) === true) {
      arrayDeResposta.push( 'fizzBuzz' )
    }
    else if (divisivelPor5(numero) === true) {
      arrayDeResposta.push( 'buzz' )
    }
    else if (divisivelPor3(numero) === true) {
      arrayDeResposta.push( 'fizz' )
    }
    else {
      arrayDeResposta.push( 'bug!' )
    }
  }
  return arrayDeResposta
  
  function divisivelPor3(numero){
    if (numero%3 == 0){
      return true
    } else {
    false
    }
  }

  function divisivelPor5(numero){
    if (numero%5 == 0){
      return true
    } else {
    false
    }
  }

  function divisivelPor3e5(numero) {
    if (numero%3 === 0 && numero%5 === 0){
      return true
    } else {
    false
    }
  }
}

// Desafio 9
function encode(string) {
  let decifrador = {
    a:1,
    e:2,
    i:3,
    o:4,
    u:5
  }
  palavraSaida = ''
  for (let index = 0; index < string.length ; index += 1) {
    let letraTeste = string[index]
    for (let key in decifrador){
      if (letraTeste === key) {
        letraTeste = decifrador[key]
      }
    }
    palavraSaida += letraTeste

  }

return palavraSaida

}

function decode(string) {
  let desdecifrador = {
    1:'a',
    2:'e',
    3:'i',
    4:'o',
    5:'u'
  }
  palavraSaida = ''
  for (let index = 0; index < string.length ; index += 1) {
    let letraTeste = string[index]
    for (let key in desdecifrador) {
      if (letraTeste === key){
        letraTeste = desdecifrador[key]
      }
    }
    palavraSaida += letraTeste

  }

return palavraSaida

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
