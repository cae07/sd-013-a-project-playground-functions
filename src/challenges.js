// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
    if(a && b === true){
      return true;
    }else{
      return false
    }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height)/2;
   return area;  

}

// Desafio 3
function splitSentence(s) {
  // seu código aqui
  r = s.split(" ", 10);
  return r;
}

// Desafio 4
function concatName(n) {
  // seu código aqui
   f = n[0];
   l = n[n.length - 1]
   
   return l + ", " + f;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(h) {

    // seu código aqui
    let aux = null;
    var high = null;
    // descobre maior valor
    for(let i = 0; i < h.length; i++){
      if(high < h[i]){
        high = h[i];
      }
    }
    //conta quantidade que maior valor aparece
    for(let j = 0;j < h.length; j++){
      if(h[j] === high){
        aux = aux +1;
      }
    }
    return aux;
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
