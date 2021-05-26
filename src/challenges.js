// Desafio 1
function compareTrue(value1,value2) {
  if(value1 == true && value2 == true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(list) {
  let first = list[list.length-1];
  let last = list[0];
  return first + ", " + last;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3*wins) + (1*ties)
}


// Desafio 6
function highestCount(list) {
  biggest = 0;
  for (let index = 0; index < list.length; index += 1) {
    if (Math.abs(list[index]) > biggest){
      biggest = list[index]; 
    }
  }
    let cont = 0
    for (let index = 0; index < list.length; index += 1) {
      if (biggest == list[index]){
        cont = cont + 1;
    }
  }return cont;
}
console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let situation1 = Math.abs(cat1 - mouse);
  let situation2 = Math.abs(cat2 - mouse);
  if (situation1 < situation2){
    return "cat1";
  }else if(situation1 > situation2){
    return "cat2";
  }else if (situation2 == situation1){
    return "os gatos trombam e o rato foge"
  }
}console.log(catAndMouse(1,0,2));

// Desafio 8
function fizzBuzz(list) {
  for (let index = 0; index < list.length; index += 1) {
    resto3 = list[index]%3;
    resto5 = list[index]%5;
    if (resto3 == 0 && resto5 == 0){
      list[index] = "fizzBuzz";
    }else if (resto3 == 0 ){
      list[index] = "fizz";
    }else if (resto5 == 0 ){
      list[index] = "buzz";
    }else{
      list[index] = "bug!";
    }
  }return list
}



// Desafio 9
function encode(name) {
  let newstring = ''
  let list = name.split('')  

  for (let index = 0; index < name.length; index += 1) {
    if(list[index] == "a"){
      list[index] = 1;
      newstring = newstring + list[index];
    }else if(list[index] == "e"){
      list[index] = 2;
      newstring = newstring + list[index];
    }else if(list[index] == "i"){
      list[index] = "3";
      newstring = newstring + list[index];
    }else if(list[index] == "o"){
      list[index] = "4";
      newstring = newstring + list[index];
    }else if(list[index] == "u"){
      list[index] = "5";
      newstring = newstring + list[index];
    }else{
      newstring = newstring + list[index];
    }
  }return newstring;
}
console.log(encode("hi there"))

function decode(name) {
  let newstring = ''
  let list = name.split('')  

  for (let index = 0; index < name.length; index += 1) {
    if(list[index] == "1"){
      list[index] = "a";
      newstring = newstring + list[index];
    }else if(list[index] == "2"){
      list[index] = "e";
      newstring = newstring + list[index];
    }else if(list[index] == "3"){
      list[index] = "i";
      newstring = newstring + list[index];
    }else if(list[index] == "4"){
      list[index] = "o";
      newstring = newstring + list[index];
    }else if(list[index] == "5"){
      list[index] = "u";
      newstring = newstring + list[index];
    }else{
      newstring = newstring + list[index];
    }
  }return newstring;
}
console.log(decode("h3 th2r2!"))


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
