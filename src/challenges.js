// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true;
  }
  else {
    return false;
  }

}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;

}
// Desafio 3
function splitSentence(string) {
  return string.split([" "]);

  
}

// Desafio 4
function concatName(string) {
  let ultimoItem = 0;
  let primeiroItem = 0;

  primeiroItem = string[primeiroItem]
  ultimoItem = string[string.lenght-1]

  return primeiroItem + ultimoItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  pontos = (wins*3) + ties*1;
  return pontos;
}
// Desafio 6
function highestCount(param1) {
    let contN = 0;
    let contRepetidoMaior = 0;
    let contRepetidoMaior2 = 0;
    for (let indice in param1) {
    if (param1[indice] >= param1[contN+1]){
    contRepetidoMaior ++;
    
    }
    if (param1[contN+1]>=param1[indice]) {
      contRepetidoMaior2 ++;
    }
    if (contRepetidoMaior2 >= contRepetidoMaior ){
      return contRepetidoMaior2;
    }
    else {
      return contRepetidoMaior;
    }
  }
}
    
    
  
  
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let string = "os gatos trombam e o rato foge";
 if (mouse + cat1 < mouse + cat2) {
   return 'cat1';   
 }
 else if (mouse + cat2 < mouse + cat1) {
   return 'cat2'; 
 }
else if((mouse + cat2 === mouse + cat1) || (mouse + cat1 === mouse + cat2) ) {
  return string;
}
}

// Desafio 8
function fizzBuzz(value1) {
  let fizz = "fizz";
  let buzz = "buzz";
  let bug = "bug!";
  let fizzbuz1 = "fizzBuzz"
  let caixa;;
  for (let index in value1){
    if (value1[index]% 3 == 0) {
      caixa += fizz.splitSentence();
      
    }
    else if (value1[index]% 5 == 0){
      caixa += buzz.splitSentence();
      
    }
    else if ((value1[index]% 3 == 0) && (value1[index]% 5 == 0)) {
      caixa += fizzbuz1.splitSentence();
      
    }
    else if ((value1[index]% 3 ==! 0) && (value1[index]% 5 ==! 0)) {
      caixa += bug.splitSentence();
      
  }
  return value1=caixa;
}
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
}
