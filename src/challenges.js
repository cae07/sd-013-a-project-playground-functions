// Desafio 1
function compareTrue(bollean1,bollean2) {
  if(bollean1 == true && bollean2 == true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base,altura) {
  return ((base * altura)/2)
}

// Desafio 3
function splitSentence(sentenca) {
  return sentenca.split(" ")
}

// Desafio 4
function concatName(array) {
  return array[array.length -1].concat(", ",array[0])
}

// Desafio 5
function footballPoints(wins,ties) {
  return ((wins*3) + (ties*1))

  // seu código aqui
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = -99;
  let maiorNumeroSeRepete = 0;
  for(let i = 0 ; i<array.length ; i += 1){
    if(array[i]>maiorNumero){
      maiorNumero = array[i];
    } else {
    }
  }
  let contador = 0;
  for (let i = 0; i<array.length ; i += 1){
    if(maiorNumero == array[i]){
      contador += 1;
    } else {

    }
    maiorNumeroSeRepete = contador;
  }


  return(maiorNumeroSeRepete)
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if(cat1 - mouse > cat2 - mouse){
    return "cat2"
  } else if (cat2 - mouse > mouse - cat1){
    return "cat1"
  } else if (cat2 - cat1 == mouse*2){
    return "os gatos trombam e o rato foge"
  } else {

  }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  
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

splitSentence("go trybe")