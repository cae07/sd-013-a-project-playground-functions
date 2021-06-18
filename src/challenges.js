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

//console.log(calcArea(base * height) /2 );

// Desafio 3
function splitSentence(string) {
  return string.splitSentence[' , '];
}

//https://www.devmedia.com.br/javascript-concat-concatenando-arrays-e-strings/37964

// Desafio 4
function concatName(array) {
  let concat = array[array.length - 1] + '' + ',' + array[0];
  return concat;
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}
//console.log(footbalPoints((wins * 3) + ties));

// Desafio 6
  let maiorNumero = [9, 1, 2, 3, 9, 5, 7];
  let contador = 0;

  function highestCount(maiorNumero)
  for(let index = 0; index <= maiorNumero.length; index += 1){

  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dis2 = mouse - cat2;

  if(dist1 < cat1){
    return cat1;
  }
   else if (dis2 < cat2) {
    return cat2;
  }
   else (dis1 === dist2) {
     return "os gatos trobam e o rato foge";
   }
};

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [2, 15, 7, 9, 45];

  for(let index = 0; index < arrayFizzBuzz.length; index +=1){

  }
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
