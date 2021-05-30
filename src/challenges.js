// Desafio 1
function compareTrue(val1, val2) {
  if(val1 == true && val2 == true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area
}

// Desafio 3
function splitSentence(word) {
  let arrayWord = word.split(' ');
  return arrayWord
}


// Desafio 4
function concatName(nome) {
  let concatVar = nome[nome.length-1];
  concatVar += ', ' + nome[0]; 
  return concatVar
}


// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  return winsPoints + tiesPoints
}

// Desafio 6
function highestCount(highestCount) {
  let count = 0;
  let biggerNumber = (-2)**1023;

  for(let num of highestCount){
    if(biggerNumber <= num){
      biggerNumber = num     
    }    
  }

  for(let num of highestCount){
    if(biggerNumber == num){
      count += 1;
    }
  }

  return count
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;  

  if(Math.abs(distanceCat1) === Math.abs(distanceCat2)){
    return "os gatos trombam e o rato foge"    

  }else if(Math.abs(distanceCat1) < Math.abs(distanceCat2)){
    return "cat1"

  }else{
    return "cat2"
  }
}


// Desafio 8
function fizzBuzz(numbers) {
  let arrayAux = [];

  for(let num of numbers){
    if(num % 3 == 0 && num % 5 == 0){
      arrayAux.push("fizzBuzz")
    }else if(num % 5 == 0){
      arrayAux.push("buzz")
    }else if(num % 3 == 0){
      arrayAux.push("fizz")
    }else {
      arrayAux.push("bug!")
    }
    
  }
  return arrayAux
}

// Desafio 9
function encode(vowels) {
  let arrayAux = '';
  for(let letter of vowels){
    if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
      switch(letter){
        case 'a':
          arrayAux += '1';
          break;
        case 'e':
          arrayAux += '2';
          break;
        case 'i':
          arrayAux += '3';
          break;  
        case 'o':
          arrayAux += '4';
          break;
        case 'u':
          arrayAux += '5';
          break;        
      } 
    }else{
      arrayAux += letter;
    }
  }
  
  return arrayAux
}

function decode(vowels) {
  let arrayAux = '';
  for(let letter of vowels){
    if(letter == '1' || letter == '2' || letter == '3' || letter == '4' || letter == '5'){
      switch(letter){
        case '1':
          arrayAux += 'a';
          break;
        case '2':
          arrayAux += 'e';
          break;
        case '3':
          arrayAux += 'i';
          break;  
        case '4':
          arrayAux += 'o';
          break;
        case '5':
          arrayAux += 'u';
          break;        
      } 
    }else{
      arrayAux += letter;
    }
  }
  
  return arrayAux
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
