// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true){
    return true;
  }
  else {
    return false;
  }
};

// Desafio 2
function calcArea(base , height) {
  let area = (base*height)/2;
  return area;
};

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
};

// Desafio 4
function concatName(array) {
  let i = (array.length - 1);
    return array[i] + ", " + array[0];
};


// Desafio 5
function footballPoints(wins , ties) {
  let somaPontos = (wins*3 + ties);
  return somaPontos;
};

// Desafio 6
function highestCount(arrayNumerico) {
  let test = arrayNumerico[0];
  for(let i = 0; i < arrayNumerico.length; i += 1){
    if(test < arrayNumerico[i]){
      test = arrayNumerico[i];
    }
  }
  let count = 0
  for(let i2 = 0; i2 < arrayNumerico.length; i2 += 1){
    if (test == arrayNumerico[i2]){
      count += 1;
    }
  } return count;
};

// Desafio 7
function catAndMouse(mouse , cat1 , cat2) {
  let dist1 = (mouse - cat1);
  let dist2 = (mouse - cat2);
  if (dist1 < 0) {
    dist1 = dist1*(-1)
  }
  if (dist2 < 0) {
    dist2 = dist2*(-1)
  }
  if (dist1 > dist2) {
    return "cat2";
  }
  else if (dist1 < dist2){
    return "cat1";
  }
  else {
    return "os gatos trombam e o rato foge";
   }
}; 

// Desafio 8
function fizzBuzz(stringNumeros) {
  let array = []
  for (let i = 0; i < stringNumeros.length; i += 1){
    if((stringNumeros[i])%5 == 0 && (stringNumeros[i])%3 == 0) {
      array.push("fizzBuzz");
    }
    else if ((stringNumeros[i])%5 == 0){
      array.push("buzz");
    }
    else if ((stringNumeros[i])%3 == 0){
      array.push("fizz");
    }
    else {
      array.push("bug!");
    }
  } return array
};

// Desafio 9
function encode(stringTexto) {
  let novoTexto = stringTexto;
  let trocaa = novoTexto.replace(/a/g,"1");
  let trocaa2 = trocaa.replace(/e/g,"2");
  let trocaa3 = trocaa2.replace(/i/g,"3");
  let trocaa4 = trocaa3.replace(/o/g,"4");
  let trocaa5 = trocaa4.replace(/u/g,"5");
  // for(let i = 0; i < stringTexto.length; i += 1){
  //   if(stringTexto[i] === "a"){
  //     novoTexto.replace("a","1")
  //     console.log(novoTexto)
  //   };
  //   if(stringTexto[i] === "e"){
  //     novoTexto.replace("i","2")
  //     console.log(novoTexto)
  //   };    
  //   if(stringTexto[i] === "i"){
  //     novoTexto.replace("i","3")
  //   };
  //   if(stringTexto[i] === "o"){
  //     novoTexto.replace("o","4")
  //   };   
  //   if(stringTexto[i] === "u"){
  //     novoTexto.replace("u","5")
  //     console.log(novoTexto) 
  return trocaa5;
    };

function decode(stringCodificada) {
  let novoTexto = stringCodificada;
  let troca = novoTexto.replace(/1/g,"a");
  let troca2 = troca.replace(/2/g,"e");
  let troca3 = troca2.replace(/3/g,"i");
  let troca4 = troca3.replace(/4/g,"o");
  let troca5 = troca4.replace(/5/g,"u");
  return troca5;
};

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
