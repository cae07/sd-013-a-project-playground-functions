// Desafio 1
function compareTrue(value1,value2) {
  if(value1==true && value2==true){
    return true;
  }else{
    return false;
  }

}

// Desafio 2
function calcArea(base,height) {
  return (base*height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[array.length-1] + ", " + array[0] ;
}

// Desafio 5
function footballPoints(wins,ties) {
  points= (3*wins) + (1*ties);
  return points;

}

// Desafio 6
function highestCount(numeros) {
 let maior=numeros[0];
 let contador=0;
 for(i=0;i<numeros.length;i+=1){
   if(numeros[i]>maior){
     maior=numeros[i]
   }
  }for(i=0;i<numeros.length;i+=1){
     if(maior===numeros[i]){
       contador+=1
     }
   }return contador;
 }

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distcat1= Math.abs(mouse-cat1);
  let distcat2=Math.abs(mouse-cat2);
  if(distcat1<distcat2){ 
    return "cat1";
  }else if (distcat2<distcat1){
    return "cat2";
  }else{
    return "os gatos trombam e o rato foge"
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
