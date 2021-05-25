// Desafio 1
function compareTrue(valor1, valor2) {
  let result = valor1 && valor2;
  return result;
  
}


// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  
}

// Desafio 3
function splitSentence(string) {
  let newArray=[];
  let aux=0;
  //for para preencher o array com algo, para ele não ficar como não idenficado 
  for (let index = 0; index < string.length; index+=1) {
    newArray[aux]=""; 
    if (string[index]==" ") {
      aux+=1;        
    }        
  }
  aux=0;
  for (let index = 0; index < string.length; index+=1) {   
    if (string[index]==" ") {      
      aux+=1;        
    }    
    else{
      newArray[aux]=newArray[aux] + string[index];
    }
  }
  return newArray;
}


// Desafio 4
function concatName(array=[]) {
  let concatValue="";  
  for (let index = array.length-1; index >= 0; index-=1) {
    if (index == 0 || index == array.length-1) {
      concatValue=concatValue + " " + array[index];
      if (index == 0) {
        concatValue=concatValue;
      }
      else {
        concatValue=concatValue + ",";
      }
    }    
  }
  return concatValue;
  
}


// Desafio 5
function footballPoints(wins,ties) {
  let result= (3*wins) + (1*ties);
  return result;
}


// Desafio 6
function highestCount(num=[]) {
  let highValue=0;
  let count=0;
  for (let index = 0; index < num.length; index+=1) {
    if (highValue < num[index]){
      highValue = num[index];
    }    
  }
  for (let index = 0; index < num.length; index++) {
    if (highValue == num[index]){
      count+=1;
    }    
  }
  return count;
}


// Desafio 7
function catAndMouse() {

  
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
