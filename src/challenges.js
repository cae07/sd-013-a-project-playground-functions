// Desafio 1
function compareTrue(booleano1, booleano2){
  return booleano1 && booleano2;
}

compareTrue(true, false);

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}



// Desafio 3
function splitSentence(string) {
  return string.splitSentence[' '];
}



// Desafio 4
function concatName(arrayNomes) {
  let primeiroNome = arrayNomes[0];
  let ultimoNome = arrayNomes[arrayNomes.length - 1];
  return ultimoNome + ' ,' + primeiroNome;
};



// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

let maiorNumero = [9, 1, 2, 3, 9, 5, 7];
let contador = 0;

// Desafio 6
  function highestCount(maiorNumero){

    for(let index = 0; index < maiorNumero.length; index += 1){
      for(let contador = 0; contador < maiorNumero.length; contador += 0)
      if(maiorNumero[index] === maiorNumero[contador]){
        contador += 1;
      }
      return contador;
  }
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dis2 = mouse - cat2;

  if(dist1 < dis2){
    return cat1;
  } else if (dis2 < dist1) {
    return cat2;
  } else if (dist1 === dist2) {
    return "os gatos trobam e o rato foge";
  }
};

// Desafio 8
function fizzBuzz() {
  let arrayFizzBuzz = [2, 15, 7, 9, 45];
  for(let index = 0; index < arrayFizzBuzz.length; index +=1){
    arrayFiiz = 'bug';
   } if(arrayFizzBuzz[index] % 15 === 0) {
      arrayFiiz[index] = 'fizzBuzz';
   } else if(arrayFizzBuzz[index] % 5 === 0){
      arrayFiiz[index] = 'buzz';
   } else if(arrayFizzBuzz[index] % 3 === 0){
     arrayFiiz[index] = 'fizz';
   }
   return arrayFiiz;
}

// Desafio 9
function encode() {


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
