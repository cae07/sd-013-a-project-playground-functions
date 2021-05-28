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
    let numeroMaior = param1[0];
    let contador = 0;
    let contador2 = 0;

    for (let indice = 0; indice < param1.length; indice +=1) {
    if (param1[indice] > numeroMaior){
        numeroMaior = param1[indice]
       
        
    }
    
        for (let indice = 0; indice < param1.length; indice +=1){
          contador2 = 1;
          if (numeroMaior === param1[indice]) {
              contador +=1;
              if (contador == 2){
                contador = contador2;
              }
            return contador2;
          }
        else {
          contador1;
        }
      } 
        }
    
      }
  



  [1, 9, 2, 3, 9, 5, 7]
    


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let string = "os gatos trombam e o rato foge";
 if (Math.abs(mouse - cat1) < Math(mouse - cat2)) {
   return 'cat1';   
 }
 else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
   return 'cat2'; 
 }
else if (Math.abs(cat1 - mouse)  === Math.abs(cat2 - mouse) ) {
  return "os gatos trombam e o rato foge";
}
}

// Desafio 8
function fizzBuzz(value1) {
  let fizz = " fizz";
  let buzz = " buzz ";
  let bug = " bug!";
  let fizzbuz1 = "fizzBuzz "
  let caixa= [];
    for (let index in value1){
    if (value1[index]% 3 == 0 && value1[index]%5 !== 0) {
      caixa.push("fizz");
      
    }
    else if (value1[index]% 5 == 0 && value1[index]%3 !== 0){
      caixa.push("buzz");
      
    }
    else if ((value1[index]% 3 == 0) && (value1[index]% 5 == 0)) {
      caixa.push("fizzBuzz");
      
    }
    else if ((value1[index]% 3 !== 0) && (value1[index]% 5 !== 0)) {
      caixa.push("bug!");
      
  }
  
}
return caixa;
}
// Desafio 9
function encode(string) {
    let mostrar = string.split('');

     for (let key = 0; key < mostrar.length; key +=1){
     if (mostrar[key] === "a") {
       mostrar[key] = 1;       
     }
    else if (mostrar[key] === "e") {
      mostrar[key] = 2;
    }
    else if (mostrar[key] ==="i") {
      mostrar[key] = 3;
    }
    else if (mostrar[key] === "o") {
      mostrar[key] = 4;
    }
    else if (mostrar[key] ==="u") {
      mostrar[key] = 5;
    }
    return mostrar.join('');
  }
  
  }
function decode(string2) {
  let mostrar2 = string2.split('');
  for(let key = 0; key < mostrar2.length; key +=1){
  if (mostrar2[key] == "1") {
    mostrar2[key] = "a";       
  }
 else if (mostrar2[key] == "2") {
  mostrar2[key] = "e"; 
 }
 else if (mostrar2[key] == "3") {
  mostrar2[key] = "i"; 
 }
 else if (mostrar2[key] == "4") {
  mostrar2[key] = "o"; 
 }
 else if (mostrar2[key] == "5") {
  mostrar2[key] = "u"; 
 }
return mostrar2.join('');
  }
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
