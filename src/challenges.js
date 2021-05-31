// Desafio 1
function compareTrue(valor1,valor2) {
  if (valor1==true && valor2==true){
    return true;

  } else {
     return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let area = (base * height) / 2
  return area
}
 // Desafio 3
function splitSentence(palavra) {
  let split = palavra.split(" ");

  return split
} 
// Desafio 4
function concatName(array) {
  
  let concatenacao = array[array.length -1] + "," + " " + array[0]
  
    return concatenacao
} 

// Desafio 5
function footballPoints(vitoria, empate) {
  let wins = vitoria * 3
  let ties = empate *1
  let resultadoDoCampeonato = (wins+ties)
  return resultadoDoCampeonato
}

// Desafio 6
function highestCount(array) {
let maiorNumero = 0;
let contador = 0;
for(let i = 0; i<= array.length; i +=1){
   if(array[i]>maiorNumero){
     maiorNumero = array [i];
   }
}
for (let i = 0; i<= array.length; i +=1){
  if (array[i]===maiorNumero){
    contador +=1
  }
    }  return contador 
}
console.log(highestCount([-2 , -2, -3]))
// Desafio 7
function catAndMouse(mouse, distGato1, distGato2) {
  mouse = mouse
  if(distGato1<distGato2){
    return "cat1";
  }else if(distGato2<distGato1){
    return "cat2";
  }else if(distGato1===distGato2) {
    return "os gatos trombam e o rato foge";
  } 
} 

// Desafio 8
function fizzBuzz(array) {
 let arrayNovo=[]
  for(let i=0; i < array.length; i+=1){
   if (array[i] % 15 === 0){
   arrayNovo[i] = "fizzBuzz";}
   else if (array[i] % 3 === 0){
     arrayNovo[i] =  "fizz";
   } else if (array[i] % 5 === 0){
    arrayNovo[i] = "buzz";
   } else {
     arrayNovo[i] = "bug!";
   }
 } return arrayNovo;
}

// Desafio 9
function encode(string) {
let palavra = string
let outraPalavra =""
  for (let index = 0; index < palavra.length; index++) {
    if(palavra[index] === "a"){
      outraPalavra = outraPalavra + "1";
    }else if(palavra[index] === "e") {
      outraPalavra = outraPalavra + "2";
    }else if(palavra[index] === "i" ){
      outraPalavra = outraPalavra + "3";    
    }else if(palavra[index] === "o"){
      outraPalavra = outraPalavra + "4";
    }else if(palavra[index] === "u"){
      outraPalavra = outraPalavra + "5";
    }else{
      outraPalavra = outraPalavra + palavra[index]
    }
    
  } return outraPalavra
 
}
function decode(string) {
  let palavra=string
  outraPalavra=""
  for (let index = 0; index < palavra.length; index++) {
    if(palavra[index] === "1"){
      outraPalavra = outraPalavra + "a";
    }else if(palavra[index] === "2") {
      outraPalavra = outraPalavra + "e";
    }else if(palavra[index] === "3" ){
      outraPalavra = outraPalavra + "i";    
    }else if(palavra[index] === "4"){
      outraPalavra = outraPalavra + "o";
    }else if(palavra[index] === "5"){
      outraPalavra = outraPalavra + "u";
    }else{
      outraPalavra = outraPalavra + palavra[index]
    }
    
  } return outraPalavra
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
