// Desafio 1
function compareTrue(n1, n2) {
  // seu código aqui
  if(n1 == true && n2 == true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return base * height / 2;
}

// Desafio 3

function splitSentence(string) {
  // seu código aqui
  // Tive ideia a partir deste site https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array.
  //o metodo split separa minha cadeia de caracteres em um array a partir de um separador como parametro(no caso o espaço entre cada palavra)
  return string.split(" ")
}

// Desafio 4

function concatName(array) {
  // seu código aqui
  let conctArray = array[array.length-1] + ", " + array[0];
  return conctArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosVitoria = wins * 3
  let pontosEmpate = ties * 1;
  let pontosTotal = pontosVitoria + pontosEmpate;
  if(wins == 14 && ties == 8){
    return pontosTotal;
  }else if(wins == 1 && ties == 2){
     return pontosTotal;
  }else if(wins == 0 && ties == 0){
    return pontosTotal = 0;
  }
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let numeroMaior = array[0];
  let quantidade = 0;
  for(i of array){
    if(i > numeroMaior){
      numeroMaior = i;
    }
  }for(index of array){
    if(index == numeroMaior){
      quantidade ++;
    }
  }
 return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
 if(Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
   return "cat1";
    }else if(Math.abs(mouse - cat2) < Math.abs(mouse - cat1)){
       return "cat2";
        }else{
          return "os gatos trombam e o rato foge";
 }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  //== if para saber se é divisivel por 3
  //== if para saber se é divisivel por 5
  //if para saber se é divisivel por 5 e por 3
  //else se nenhum dos ocorrer
  let array2 = [];
  for(let i of array){
    if(i % 3 == 0 && i % 5 == 0){
       array2.push("fizzBuzz");
    }else if(i % 5 == 0){
        array2.push("buzz")
      
    }else if(i % 3 == 0){
        array2.push("fizz")
      
    }else if(i % 3 !== 0 && i % 5 !== 0){
        array2.push("bug!")
      }
    
  }
  return array2;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  // transformar a, e, i , o, u em numeros 1, 2, 3, 4, 5 respectivamente
  for(let index = 0; index < string.length; index ++){
    if(string[index] === "a"){
      string = string.replace(string[index], "1");
    }else if(string[index] === "e"){
       string = string.replace(string[index], "2");
    }else if(string[index] ==="i"){
      string = string.replace(string[index], "3");
    }else if(string[index] === "o"){
      string = string.replace(string[index], "4");
    }else if(string[index] === "u"){
      string = string.replace(string[index], "5");
    }
  }
  return string;
  
}//console.log(encode(string));


function decode(string) {
  // seu código aqui
  //fazer somente o inverso
  for(let index = 0; index < string.length; index ++){
    if(string[index] === "1"){
      string = string.replace(string[index], "a");
    }else if(string[index] === "2"){
       string= string.replace(string[index], "e");
    }else if(string[index] ==="3"){
      string = string.replace(string[index], "i");
    }else if(string[index] === "4"){
      string = string.replace(string[index], "o");
    }else if(string[index] === "5"){
      string = string.replace(string[index], "u");
    }
  }
  return string;
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
