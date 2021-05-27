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

  ultimoItem = string[primeiroItem]
  primeiroItem = string[string.length - 1];

  return primeiroItem+"," +" " +ultimoItem;
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
  let fizz = " fizz ";
  let buzz = " buzz ";
  let bug = " bug! ";
  let fizzbuz1 = " fizzBuzz "
  let caixa= [];
    for (let index in value1){
    if (value1[index]% 3 == 0 && value1[index]%!3 ==! 0) {
      caixa.push("fizz");
      
    }
    else if (value1[index]% 5 == 0 && value1[index]%!5 ==! 0){
      caixa.push("buzz");
      
    }
    else if ((value1[index]% 3 == 0) && (value1[index]% 5 == 0)) {
      caixa.push("fizzBuzz");
      
    }
    else if ((value1[index]% 3 ==! 0) && (value1[index]% 5 ==! 0)) {
      caixa.push("bug!");
      
  }
  
}
return caixa;
}
// Desafio 9
function encode(string) {
    let tamanho = string.length;
     for (let key = 0; key > string.length; key +=1){
     if (string.substring(key,key+1) === "a") {
       string.length[key] = 1;       
     }
    else if (string.substring(key,key+1) === "e") {
      string.length[key] = 2;
    }
    else if (string.substring(key,key+1) ==="i") {
      string.length[key] = 3;
    }
    else if (string.substring(key,key+1) === "o") {
      string.length[key] = 4;
    }
    else if (string.substring(key,key+1) === "u") {
      string.length[key] = 5;
    }
    return string;
  }
  }
function decode(string2) {
  for (let key in string2.length)
  if (string2.length == "1") {
    string2.length[key] = "a";       
  }
 else if (string2.length == "2") {
   string2.length[key] = "b";
 }
 else if (string2.length == "3") {
   string2.length[key] = "i";
 }
 else if (string2.length == "4") {
   string2.length[key] = "o";
 }
 else if (string2.length == "5") {
   string2.length[key] = "u";
 }
return string2;
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
