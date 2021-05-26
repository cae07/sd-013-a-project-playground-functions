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
console.log(calcArea(51, 1));

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
console.log(footballPoints(0,0));

// Desafio 6
function highestCount(arrayNum) {
 let maiorNum = arrayNum[0];
 let contaVezes = 0;
    
  for( index = 0; index < arrayNum.length; index += 1){   
    if( arrayNum[index] > maiorNum ){
      maiorNum = arrayNum[index];
      contaVezes = 1;
    } else if (arrayNum[index] == maiorNum){
      contaVezes = contaVezes + 1;
    }
  }  return contaVezes; 
}

console.log(highestCount([-2,-2,-1,-1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distGato1 = cat1 - mouse ;
    if (distGato1 < 0 ){
      distGato1 == (distGato1 * -1);
    }
  let distGato2 = cat2 - mouse ;
  if (distGato2 < 0) {
    distGato2 == (distGato2 * -1);
  }

if( distGato1 < distGato2){
      return "cat1";
    } else if ( distGato2 < distGato1){
      return "cat2";
    } else if ( distGato2 == distGato1){
      return "os gatos trombam e o rato foge"
    } 
}console.log(catAndMouse(10,4,22));

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
