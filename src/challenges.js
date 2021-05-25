// Desafio 1
function compareTrue(value1, value2) {

  if (value1 == true && value2 == true){
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
};

// Desafio 3
function splitSentence(phrase) {
  let word = "";
  let myArray = [];

  for (let i = 0; i <= phrase.length; i += 1) {
    if (i < phrase.length){
      if(phrase[i] != " ") {
        word = word + phrase[i];
      } else {
        myArray.push(word);
        word = "";
      };
    } else {
      myArray.push(word);
      word = "";   
    };  
  };
  return myArray; 
};

// Desafio 4
function concatName(myArray) {
  phrase = `${myArray[myArray.length-1]}, ${myArray[0]}`
  return phrase;
};

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  wins = wins * 3;
  ties = ties * 1;
  points = wins + ties;
  return points;
};


// Desafio 6

function highestCount(myArray) {
  let contUm = 0;
  let contDois = 0;
  let numMaior = -1000;
  let numAtual = 0;
 
  for (let i = 0; i < myArray.length; i += 1) {
    numAtual = myArray[i];
      for (let j = 0; j < myArray.length; j += 1) {
        if(numAtual == myArray[j]){
          contUm += 1;
        };   
      };
      if (numAtual > numMaior){
        numMaior = numAtual;
        contDois = contUm;
      };    
    contUm = 0;  
  };
  return contDois;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  mouse = Math.abs(mouse);
  cat1 = Math.abs(cat1);
  cat2 = Math.abs(cat2);
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let res = "";
  

  if (distCat1 < distCat2){
    res = "cat1";
  } else if (distCat1 > distCat2){
    res = "cat2";
  } else {
    res = "os gatos trombam e o rato foge";
  };
 return res;
};

// Desafio 8
function fizzBuzz(myArray) {
  let res = [];
  
  for (let i = 0; i < myArray.length; i += 1) {
    if (myArray[i] % 3 == 0 && myArray[i] % 5 == 0) {
      res.push("fizzBuzz");
    } else if (myArray[i] % 3 == 0) {
      res.push("fizz");
    } else if (myArray[i] % 5 == 0) {
      res.push("buzz");
    } else {
      res.push("bug!");
    };
  };
  return res;
};

// Desafio 9
function encode(phrase) {
  let a = 1;
  let e = 2;
  let i = 3;
  let o = 4;
  let u = 5;
  let letraAtual = "";
  let res = "";

  for (let ind = 0; ind < phrase.length; ind += 1) {
    letraAtual = phrase[ind];
    if (letraAtual == 'a'){
      res = res + a;
    } else if (letraAtual == 'e'){
      res = res + e;
    } else if (letraAtual == 'i'){
      res = res + i;
    } else if (letraAtual == 'o'){
      res = res + o;
    } else if (letraAtual == 'u'){
      res = res + u;
    } else {
      res = res + letraAtual;
    }
  }   
  return res;
};

function decode(phrase) {
  
  let um = "a";
  let dois = "e";
  let tres = "i";
  let quatro = "o";
  let cinco = "u";
  let numAtual = "";
  let res = "";

  for (let i = 0; i < phrase.length; i += 1) {
    numAtual = phrase[i];
    if (numAtual == 1){
      res = res + um;
    } else if (numAtual == '2'){
      res = res + dois;
    } else if (numAtual == 3){
      res = res + tres;
    } else if (numAtual == 4){
      res = res + quatro;
    } else if (numAtual == 5){
      res = res + cinco;
    } else {
      res = res + numAtual;
    };
  };  
  return res;
};


// Desafio 10
vetor = ["React", "Jest", "HTML", "CSS", "JavaScript"];

function techList(myArray, name) {
  
  msg = "Vazio!"

  if (techList(myArray.length) == 0) {
    return msg;    
  } else {

    let ordem = myArray.sort();
    let newArray = [];
    let obj;
  
    for (let i = 0; i < ordem.length; i += 1) {
      obj = {
      tech: ordem[i],
      name: name
      };
      newArray.push(obj)
     };
    return newArray;
  }
} 

console.log(techList(vetor, "Felipe"))

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
