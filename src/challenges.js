// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
   }
    else {
    return false;
   }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}
 
// Desafio 3
function splitSentence(gildo) {
  return gildo.split (" ");
}

// Desafio 4
function concatName(array) {
    return array [array.length -1]
  + "," + " " + array[0];
 } 

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6                              /Para resolver este desafio tive o auxilio da colega de turma Aline Roxino.
function highestCount (arrayRecebido) {   // exemplo de parâmetros: (9, 1, 2, 3, 9, 5, 7)
  let contagem =  0                       //parte 1: descobrir qual maior numero - usando for, apartir do índice 0 do Array recebido-
  let maiorNumero = arrayRecebido [0]
  for ( index = 0;  index < arrayRecebido.length; index += 1) {   // procurando nos numeros, a cada volta, uma por uma
    if (
      arrayRecebido [index] >= maiorNumero) {    // aqui, caso ele ache um numero maior, ele substiuti e atualiz no index.
      maiorNumero = arrayRecebido [index];     
      }
    }
    for ( index = 0; index < arrayRecebido.length; index += 1) {
        if ( 
      maiorNumero === arrayRecebido [index]) {
      contagem +=1;
     }
    }
      return contagem;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distancia1 = Math.abs(mouse - cat1);
  distancia2 = Math.abs(mouse -cat2);
  if ( distancia1 < distancia2){
    return "cat1";
  }
  if ( distancia1 > distancia2){
    return "cat2";
  }
 else {
    return "os gatos trombam e o rato foge"
 }
}

// Desafio 8
function fizzBuzz(arrey) {
 let nome = []
 for (index= 0; index < arrey.length; index += 1){
    if ( arrey [index] % 3 === 0 && arrey [index] % 5 === 0){
    nome.push("fizzBuzz");
  } 
    else  if ( arrey [index] % 3 === 0){
   nome.push("fizz"); 
   }
    else if ( arrey [index] % 5 === 0) {
     nome.push("buzz");
   }
    else {
    nome.push("bug!");
   }
  }
    return nome;
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
