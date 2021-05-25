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
function catAndMouse(num1,num2,num3) {
  // funcão q funciona - > Math.abs 
  
  let dist1 = num2 - num1;
  let dist2 = num3 - num1;
  if(dist1 <0){
    dist1*= -1;
  }
  if(dist2<0){
    dist2*= -1;
  }

  if(dist1 < dist2){
    return "cat1";
  }
  else if( dist2 < dist1){
    return "cat2";
  }
  else if(dist2 == dist1){
    return "os gatos trombam e o rato foge";
  }
}

function fizzBuzz(stringer) {
  let array=[];
  for(i=0 ; i<stringer.length; i+=1){
      if(stringer[i]%3==0 && stringer[i]%5==0){
       array.push("fizzBuzz");
      }
      else  if(stringer[i]%3==0){
        array.push("fizz");
      }
      else if(stringer[i]%5==0){
        array.push("buzz");
      }
      else{
        array.push("bug!");
      }
  }
  return array;
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
