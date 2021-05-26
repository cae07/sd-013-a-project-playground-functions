// Desafio 1
function compareTrue(key1,key2) {
  return (key1 && key2);
}
// Desafio 2
function calcArea(base,altura) {
  let area = (base * altura)/2;
  return area;
}
// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(" ");
  return fraseSeparada;
}

// Desafio 4
function concatName(arrayString) {
  return(arrayString[arrayString.length - 1]+", "+arrayString[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return(wins*3 + ties * 1);
}

// Desafio 6
function highestCount(numArray) {
  if (numArray.length > 1){
    let count = 1;
    let maior = numArray[0];
    for(let i = 1; i < numArray.length;i++){
      if(maior < numArray[i]){
        maior = numArray[i];
        count = 1;
      } 
      else if(maior == numArray[i]){
        count ++;
      }
    }
    return count;
  }
  return (numArray.length);
}
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  d1 = Math.abs(mouse - cat1);
  d2 = Math.abs(mouse - cat2);
  if(d1 > d2){
    return ("cat2");
  }
  else if ( d1 == d2){
    return("os gatos trombam e o rato foge");
  }
  return ("cat1");

}

// Desafio 8
function fizzBuzz(numArray) {
  var num;
  var fizzBuzzArray = new Array();
  for(let i=0; i < numArray.length ; i++){
    num = numArray[i];
    if((num%3 == 0) && (num%5 == 0)){
      fizzBuzzArray.push("fizzBuzz");
    }
    else if (num%3 == 0){
      fizzBuzzArray.push("fizz");
    }
    else if (num%5 == 0){
      fizzBuzzArray.push("buzz");
    }
    else {
      fizzBuzzArray.push("bug!")
    }
  }
  return fizzBuzzArray;
}
// Desafio 9
function encode(fraseToEncode) {
  var frase = fraseToEncode;
  for(let i=0;i<frase.length;i++){
    //console.log(frase[i],i,frase.length);
      switch(frase[i]){

        case "a":
          frase = frase.replace('a','1');
          break;
        case "e":
          frase = frase.replace('e','2');
          break;
        case "i":
          frase = frase.replace('i','3');
          break;
        case "o":
          frase = frase.replace('o','4');
          break;
        case "u":
          frase = frase.replace('u','5');
          break;
      }
  }
  return frase;
}

//console.log(encode("frase"));
function decode(fraseToDecode) {
  var frase = fraseToDecode;
  for(let i=0;i<frase.length;i++){
    //console.log(frase[i],i,frase.length);
      switch(frase[i]){

        case "1":
          frase = frase.replace('1','a');
          break;
        case "2":
          frase = frase.replace('2','e');
          break;
        case "3":
          frase = frase.replace('3','i');
          break;
        case "4":
          frase = frase.replace('4','o');
          break;
        case "5":
          frase = frase.replace('5','u');
          break;
      }
  }
  return frase;
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
