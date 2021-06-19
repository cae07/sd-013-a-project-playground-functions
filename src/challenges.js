// Desafio 1
function compareTrue(booleano1, booleano2){
  return booleano1 && booleano2;
}

compareTrue(true, false);

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
};



// Desafio 3
function splitSentence(string) {
  let divisor = string.split(' ');
  return divisor;
};

// Desafio 4
function concatName(arrayNomes) {
  let primeiroNome = arrayNomes[0];
  let ultimoNome = arrayNomes[arrayNomes.length - 1];
  return ultimoNome + ', ' + primeiroNome;
};



// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
};



// Desafio 6
  function highestCount(maiorNumero){
    let maiorNumero = [];
    let contador = 0;

    for(let index = 0; index < maiorNumero.length; index += 1){
      if(maiorNumero[index] === Math.max(contador)){
        contador += 1;
      }
    }
    return contador;
};


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;

  if(dist1 <= dist2){
    return cat1;
  } else if (dist2 <= dist1) {
    return cat2;
  } else if (dist1 === dist2) {
    return "os gatos trobam e o rato foge";
  }
};

// Desafio 8
//function fizzBuzz(arrayF){
  let arrayFizzBuzz = [];
   for(let index = 0; index < array.length; index +=1){
      if(arrayF[index] % 3 === 0 && arrayF[index] % 5 === 0){
      arrayFizzBuzz.push('fizzBuzz');
    } else if(arrayF[index] % 5 === 0){
      arrayFizzBuzz.push('buzz');
    } else if(arrayF[index] % 3 === 0){
      arrayFizzBuzz.push('fizz');
    } else  {
      arrayFizzBuzz.push = 'bug!';
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
