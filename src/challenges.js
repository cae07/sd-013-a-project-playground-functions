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
function concatName(array) {
  let concat = array[array.length - 1] + ', ' + array[0];
  return concat;
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
  } else if (dis2 < dis1) {
    return cat2;
  } else if (dis1 === dist2) {
     return "os gatos trobam e o rato foge";
   }
};

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for(let index = 0; index < array.length; index +=1){
    arrayFizzBuzz = 'bug';
   } if(array[index] % 15 === 0) {
      arrayFizzBuzz[index] = 'fizzBuzz';
   } else if(array[index] % 5 === 0){
      arrayFizzBuzz[index] = 'buzz';
   } else if(array[index] % 3 === 0){
     arrayFizzBuzz[index] = 'fizz';
   }
   return arrayFizzBuzz;
};





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
