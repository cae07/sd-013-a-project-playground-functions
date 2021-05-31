// Desafio 1
function compareTrue(acabouPandemia, tenhoDinheiro) {
  let vouViajar;
 
  vouViajar = acabouPandemia === true && tenhoDinheiro === true
 
  return vouViajar;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) /2;

  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}

// Desafio 4
function concatName(nomeCompleto) {
  let primeiroNome = nomeCompleto[0];
  let ultimoNome = nomeCompleto[nomeCompleto.length - 1];
  
  return ultimoNome + ", " + primeiroNome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWin = wins * 3;
  
  return pontosWin + ties;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = Number.MAX_VALUE * -1;
  let repeticoes = 0;

  for(let number of arrayDeNumeros){
    if(number > maiorNumero){
      maiorNumero = number;
    }
  }

  for(let number of arrayDeNumeros){
    if (number === maiorNumero){
      repeticoes += 1;
    }
  }

  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(mouse - cat1); 
  let distanciaGato2 = Math.abs(mouse - cat2);

  if(distanciaGato1 < distanciaGato2) {
    return "cat1"
  } else if (distanciaGato2 < distanciaGato1) {
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
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
