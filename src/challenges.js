// Desafio 1
function compareTrue(par1, par2) {
  if (par1 == true && par2 == true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");  
}

// Desafio 4
function concatName(array) {
  for(let i = array.length-1; i = array.length-1; i++){
    resultado = [array[i] + ", " + array[0] ]
    resultado = resultado.toString();
  return resultado
  } 
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3 + ties;
  return points
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0
  let repeticao = 0
  for(let index in array){
    if(array[index] > maiorNumero){
      maiorNumero = array[index]      
    }
  }  
  for(let i=0; i < array.length; i++) {
    if (array[i] == maiorNumero){
      repeticao = repeticao + 1      
    }
  }
    return repeticao
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 == cat2 - mouse) {
    return "os gatos trombam e o rato foge"
  } else if (mouse + cat1 < cat2 + mouse){
    return "cat1"
  } else if (cat1 + mouse > cat2 + mouse){
    return "cat2"
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let resultado = [];
  for (let index in arrayNumeros){
    if(arrayNumeros[index] % 3 == 0 && arrayNumeros[index] % 5 == 0){
      resultado.push("fizzBuzz")
    } else if (arrayNumeros[index] % 3 == 0){
      resultado.push("fizz")
  }  else if (arrayNumeros[index] % 5 == 0){
    resultado.push("buzz")
} else {
  resultado.push("bug!")
}
 } return resultado
}
console.log(fizzBuzz([9, 25]));

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
