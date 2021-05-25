// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 == true) {
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(frase) {
  
  return frase.split(" ");
  
}

// Desafio 4
function concatName(conjunto) {
 
  let array = conjunto[conjunto.length-1]+", " + conjunto[0] ;

  return array;

}

// Desafio 5
function footballPoints(wins , ties) {
  return (wins*3) + ties; 
}
console.log(footballPoints(0,0));

// Desafio 6
function highestCount(numeros) {
  let maiorNumber = numeros[0];
  let cont =0;
  
  for(let i=0 ; i<numeros.length ; i+=1 ){

    if(numeros[i] > maiorNumber ){
      maiorNumber = numeros[i];
      cont=1;
    }
    else if(maiorNumber === numeros[i]){
      cont +=1;

  }  
}
  return cont;

}


// Desafio 7
function catAndMouse() {
  // seu código aqui
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
