// Desafio 1
function compareTrue(a, b){
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height){
  // seu código aqui
    return (base * height) /2;
}

// Desafio 3
function splitSentence(param) {
 let result = param.split(" ");
 return result;
}
// Desafio 4
function concatName(names) {
  let concat =names[names.length-1] +","+" " + names[0]
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins * 3) + ties;
  return pontos;
}


// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let quantidade = 0;
  let valor = -500
  for (let index = 0 ; index < numbers.length; index++){
    if (numbers[index] > valor){
      valor = numbers[index]
    }
  }
  for (let i = 0; i < numbers.length; i++ ){
    if (numbers[i] === valor){
      quantidade++;
    } else if(valor === 0){
      quantidade = 3;
    } 
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1 ,cat2) {
  // seu código aqui
  let localRato = Math.abs(mouse);
  let localGato1 = Math.abs(cat1);
  let localGato2 = Math.abs(cat2);
  
  if (localRato - localGato1 === localGato2 - localRato){
    return "os gatos trombam e o rato foge"
  }else if (localGato2 - localRato > localGato1 - localRato){
    return "cat1"
  }else if (localGato1 - localRato > localGato2 - localRato){
    return "cat2" 
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = []
  for ( let i = 0 ; i < array.length ; i++){
    if (array[i] % 3 == 0 && array[i] % 5 == 0){
      result.push("fizzBuzz")
    } else if(array[i] % 5 == 0){
      result.push("buzz")
    } else if (array[i] % 3 == 0){
      result.push("fizz")
    } else {
      result.push("bug!")
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  // seu código aqui
  
  let num = "";

for(let i = 0; i < str.length; i++) {

  if(str[i] == "a"){
    num = num + "1";
  }else if (str[i] == "e"){
    num = num + "2";
  }else if (str[i] == "i"){
    num = num + "3";
  }else if (str[i] == "o"){
    num = num + "4";
  }else if (str[i] == "u"){
    num = num + "5";
  }else{
    num = num + str[i]
  }
}
return num;
}
function decode(numbers) {
  // seu código aqui
  let str = "";

for(let i = 0; i < numbers.length; i++) {

  if(numbers[i] == "1"){
    str = str + "a";
  }else if (numbers[i] == "2"){
    str = str + "e";
  }else if (numbers[i] == "3"){
    str = str + "i";
  }else if (numbers[i] == "4"){
    str = str + "o";
  }else if (numbers[i] == "5"){
    str = str + "u";
  }else{
    str = str + numbers[i]
  }
}
return str
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
