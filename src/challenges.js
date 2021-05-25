// Desafio 1
function compareTrue(valor1, valor2){
  if(valor1 == true && valor2 == true){
    return true;
    }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calcArea = (base * height)/2;
  return calcArea; 
}
console.log(calcArea(10,50));

// Desafio 3
function splitSentence(splitSentence){
  let separador = splitSentence.split(' ');
  return separador;
}

// Desafio 4
function concatName(array){
  for (let index = 0; index < array.length; index +=1) {
    concatName = array[array.length-1]+", "+array[0];    
  }
  return concatName;
}

// Desafio 5
function footballPoints(wins, ties){
  let totalPontos = (wins * 3) + (ties * 1);
  return totalPontos;
}


// Desafio 6
function highestCount(array){
  let maiorNumero = array[0];
  let numeroRepetido = 0;
  for (let index = 0; index < array.length; index +=1) {
    if(array[index] > maiorNumero){
      maiorNumero = array[index];
      numeroRepetido =1;
    }else if(array[index] == maiorNumero){
      numeroRepetido += 1;
    }
    
  }
    return(numeroRepetido);
  }

// Desafio 7
function catAndMouse() {
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
