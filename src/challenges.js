// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 && valor2 === true){
    return true;
  } else{
    return false;
  }
}
console.log(compareTrue(true, true))
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(51,1))
// Desafio 3
function splitSentence(myString) {
let array = myString.split(/[\s,]+/);  
return array;
}
let myString = "foguete"
console.log(splitSentence(myString))

// Desafio 4
function concatName(array) {
 let soma = array[array.length -1] + ", " + array[0] 
 return soma
}
console.log(concatName(['Lucas','Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + (1 * ties);
  return pontos;
}
console.log(footballPoints(1 ,2))
// Desafio 6
function highestCount(array) {
  let maior = array[0]; 
  let count = 0;
  for (let index = 0; index < array.length;index+=1){
    if (array[index] > maior ){
     maior = array[index];
   }
}
for (let index2 =0; index2 < array.length; index2 += 1){
 if (array[index2] == maior)
 count+=1;
}
return count;
  
}
console.log(highestCount([0, 0, 0]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let vencedor;
if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
  vencedor = "cat2";
} else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
  vencedor ="cat1";
} else {
    vencedor = "os gatos trombam e o rato foge";
}
  return vencedor;
}
console.log(catAndMouse(0, 3, 3));
// Desafio 8
function fizzBuzz(rogerio) {
  let myString = [] ;
  for( let index = 0; index < rogerio.length; index += 1){
  if( rogerio[index] % 3 == 0 && rogerio[index] % 5 == 0){
    myString.push("fizzBuzz");  
  }else if(rogerio[index] % 3 == 0){    
    myString.push("fizz");
  } else if (rogerio[index] % 5 == 0){    
    myString.push("buzz");
  }else{
    myString.push("bug!");    
   }
 }
  return myString
}
console.log(fizzBuzz ([2, 15, 7, 9, 45]))
// Ajuda do Josue Lobo e Rogério P. da Silva
// Desafio 9
function encode(value) {
  let value2 =""

  for (let i in value)
  if(value[i] == "a"){
    value2 += 1;
  }else if (value[i] == "e"){
    value2 += 2;
  } else if (value[i] == "i"){
    value2 += 3;
  } else if (value[i] == "o"){
    value2 += 4;
  }else if (value[i] == "u") {
    value2 += 5;
  }else {
    value2 += value[i];
  }
  return value2;
}
function decode(value) {
  let value2 =""

  for (let i in value)
  if(value[i] == 1){
    value2 += "a";
  }else if (value[i] == 2){
    value2 += "e";
  } else if (value[i] == 3){
    value2 += "i";
  } else if (value[i] == 4){
    value2 += "o";
  }else if (value[i] == 5) {
    value2 += "u";
  }else {
    value2 += value[i];
  }
  return value2;
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
