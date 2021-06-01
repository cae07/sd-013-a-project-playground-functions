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
    return "cat1";
  } else if (distanciaGato2 < distanciaGato1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}


// Desafio 8
//✕ Retorne as strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] quando é passado os parâmetros [2, 15, 7, 9, 45] para função fizzBuzz (9 ms)

function fizzBuzz(arrayDeNumeros) {
  let arrayDeStrings = [];

  for(let number of arrayDeNumeros){

    if (number % 3 === 0 && number % 5 === 0){
      arrayDeStrings.push("fizzBuzz");
    } else if (number % 5 === 0){
      arrayDeStrings.push("buzz");
    } else if  (number % 3 === 0) {
      arrayDeStrings.push("fizz");
    } else if (number % 3 > 0 && number % 5 > 0){
        arrayDeStrings.push("bug!");
    }
  }

  return arrayDeStrings;
}


// Desafio 9
function encode(frase) {
  let fraseCodificada = ""
  
  for(let letra of frase){
    if (letra === "a"){
      fraseCodificada = fraseCodificada + 1;
    } else if (letra === "e") {
      fraseCodificada = fraseCodificada + 2;
    } else if (letra === "i") {
      fraseCodificada = fraseCodificada + 3;
    } else if (letra === "o") {
      fraseCodificada = fraseCodificada + 4;
    } else if (letra === "u") {
      fraseCodificada = fraseCodificada + 5;
    } else {
      fraseCodificada = fraseCodificada + letra; 
    }
  }
  return fraseCodificada;
  
}
function decode(fraseCodificada) {
  let fraseDecodificada = ""
  
  for(let letra of fraseCodificada){
    if (letra === "1"){
      fraseDecodificada = fraseDecodificada + "a";
    } else if (letra === "2") {
      fraseDecodificada = fraseDecodificada + "e";
    } else if (letra === "3") {
      fraseDecodificada = fraseDecodificada + "i";
    } else if (letra === "4") {
      fraseDecodificada = fraseDecodificada + "o";
    } else if (letra === "5") {
      fraseDecodificada = fraseDecodificada + "u";
    } else {
      fraseDecodificada = fraseDecodificada + letra; 
    }
  }
  return fraseDecodificada;
  
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
