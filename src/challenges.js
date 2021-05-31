// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 == true && valor2 == true){
    return true;
} else {
    return false; 
}

} 

// Desafio 2
function calcArea(base, height) {
return(base * height)/2;
}


// Desafio 3
function splitSentence(frase) {
let array = []; 
let string = '';
if (frase.indexOf(' ') > -1){
for (let index = 0; index < frase.length; index +=1) {
 
 if (frase[index] !== ' ') {
   string += frase[index];
 } else {
   array.push(string);
   string = '';
 } 
} 
array.push(string);
  return array;
} else {
  array.push(frase);
  return array;
}
}

// Desafio 4
function concatName(nomes) {
return `${nomes[nomes.length - 1]}, ${nomes[0]}`;
}
let listadeNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(valores) {
  let conta = 0; 
  let numeroMaior = -1;
  for (let index = 0; index < valores.length-1; index+=1) {
    if ((valores[index] >= valores[index+1]) && (valores[index] !== numeroMaior)) {
      numeroMaior = valores[index];
      conta = 1;         
    }else if ((valores[index] >= valores[index+1]) && (valores[index] === numeroMaior)) {
      conta +=1
      if (valores[valores.length-2] === valores[valores.length-1]) {
      conta +=1
      }
    }
  } 
    return conta; 
}

//[9, 1, 2, 3, 9, 5, 7]

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let ratoGato1 = 0;
  let ratoGato2 = 0;
  if (mouse > cat1) {
    ratoGato1 = mouse - cat1;
  }else {
    ratoGato1 = cat1 - mouse;    
  }
  if (mouse > cat2) {
    ratoGato2 = mouse - cat2;
  }else {
    ratoGato2 = cat2 - mouse;
  }
  if (ratoGato1 < ratoGato2) {
    return 'cat1';
  }else if (ratoGato2 < ratoGato1) {
    return 'cat2';
  }else if (ratoGato1 === ratoGato2) {
    return 'os gatos trombam e o rato foge'   
  }
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
