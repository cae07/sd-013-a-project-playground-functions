// Desafio 1
function compareTrue(a,b) {
  if(a == true && b == true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let arrayFrase =[];
  arrayFrase = frase.split(" ");
  return arrayFrase;
}


// Desafio 4
function concatName(arrayPalavras) {
  let primeira = arrayPalavras[0];
  let segundo = arrayPalavras[0];
  for(let index = 0; index < arrayPalavras.length; index += 1){
    segundo = arrayPalavras[index];
  }
  let fullName = segundo +','+ ' ' + primeira;
  return fullName;
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins*3)+(ties*1);
  return points;
}

// Desafio 6
function highestCount(arrayNum) {
  let vezesMaior=0;
  let maior = arrayNum[0];

  for(let index = 0; index < arrayNum.length; index += 1){
      if(maior < arrayNum[index]){
       maior = arrayNum[index];
      }
  }
  for(let index = 0; index < arrayNum.length; index += 1){
    if(maior === arrayNum[index]){
      vezesMaior +=1;
    }
  }
  return vezesMaior;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 == cat2){
    return 'os gatos trombam e o rato foge';
  }else if((cat1 - mouse) == (mouse - cat2)){
    return 'os gatos trombam e o rato foge';
  }else if(cat2<cat1){
    return 'cat2';
  }else if(cat1<cat2){
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let teste;
  for(let index = 0; index < arrayNum.length; index +=1){
    if(arrayNum[index]%3==0 && arrayNum[index]%5==0){
      arrayNum.splice(index, 1, 'fizzBuzz');
    }else if(arrayNum[index]%3==0){
      arrayNum.splice(index, 1, 'fizz');
    }else if(arrayNum[index]%5==0){
      arrayNum.splice(index, 1, 'buzz');
  }else{
      arrayNum.splice(index, 1, 'bug!');
  }
  
  }
  return arrayNum;
}

// Desafio 9
function encode(frase) {
 for(let index = 0; index < frase.length; index +=1){
   if(frase.includes('a') ){
   frase = frase.replace('a',1);
   }

   if(frase.includes('e')){
   frase = frase.replace('e',2);
   }

   if(frase.includes('i')){
  frase = frase.replace('i',3);
  }

  if(frase.includes('o')){
  frase = frase.replace('o',4);
  }

  if(frase.includes('u')){
  frase = frase.replace('u',5);
  }
 }
 let resultado = frase;
 
return resultado;
}

console.log(encode('hi there!'));

function decode(frase) {
  for(let index = 0; index < frase.length; index +=1){
    if(frase.includes(1) ){
    frase = frase.replace(1,'a');
    }
 
    if(frase.includes(2)){
    frase = frase.replace(2,'e');
    }
 
    if(frase.includes(3)){
   frase = frase.replace(3,'i');
   }
 
   if(frase.includes(4)){
   frase = frase.replace(4,'o');
   }
 
   if(frase.includes(5)){
   frase = frase.replace(5,'u');
   }
  }
  let resultado = frase;
  
 return resultado;
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
}
