// Desafio 1 == OK, passou nos 3 testes
function compareTrue(veredito1, veredito2) {

  if( veredito1 == true && veredito2 == true){
    return true;
  }else {
    return false; }
}
console.log(compareTrue(false, false));

// Desafio 2 == OK, passou nos 3 testes
function calcArea(base, height) {

  let area = base * height / 2;
  return area;
}
console.log(calcArea(51, 1))

// Desafio 3 == OK, passou nos 3 testes
function splitSentence(string) {
  string = string.split(' ');
  return string;
}
  console.log(splitSentence('go trybe'));

// Desafio 4 == OK, passou nos 3 testes
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length-1];
  let result = ultimo + ', '+ primeiro;
  return result; 
}
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5 == OK, passou nos 3 testes.
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let result = vitoria + empate;
  return result;
}
console.log(footballPoints(0,0))

// Desafio 6
function highestCount() {
  /* let vezesAparece = 1;

  for(let index = 0; index < array.length; index += 1){
    if(array[index]>contador){
    contador = array[index]
  }else if(
    array[index] = contador ;
    vezeAparece = vezesAparece + 1;
    )
  }
  return vezesAparece;
} 
console.log(highestCount([9, 1, 2, 3, 9, 5, 7])) */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distGato1 = mouse - cat1 ;
  let distGato2 = mouse - cat2 ;
    if( distGato1 < distGato2){
      return "cat1";
    } else if ( distGato2 < distGato1){
      return "cat2";
    } else if ( distGato2 == distGato1){
      return "os gatos trombam e o rato foge"
    } 
}
console.log(catAndMouse(1,4,3));

// Desafio 8
function fizzBuzz(arrayNum) {
  
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
