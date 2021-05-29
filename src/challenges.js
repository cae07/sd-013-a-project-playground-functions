// Desafio 1
function compareTrue(x,y) {
  if( (x === true) && (y === true)) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true,false));

// Desafio 2
function calcArea(base,heigh) {
  let area = (base * heigh) / 2;
  return area;
}
console.log(calcArea(10,50));
console.log(calcArea(5,2));
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(digite) {
  let separador = digite.split(' ');
  return separador;
}
console.log(splitSentence("Vamo que vamo go Trybe"));

// Desafio 4
function concatName(nomes) {
  let first = nomes[0];
  let last = nomes[nomes.length -1]
  let result = last + ", "+ first;
  return result;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins,ties) {
  vitoria = wins * 3;
  
  return vitoria + ties;
}
console.log(footballPoints(14,8));
console.log(footballPoints(1,2));
console.log(footballPoints(0,0));

// Desafio 6
function highestCount(nums) {
  
  let maior = Math.max(...nums);
  let count = 0;

  for(let j = 0; j < nums.length; j += 1) {
    if(maior == nums[j]) {
      count++;
    }
  }
  
  return count;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {

  if( (cat1 - mouse) > (cat2 - mouse)){
    return "cat2";
  }  else if ( (mouse - cat1) == (cat2 - mouse) ){
      return "os gatos trombam e o rato foge";
  } else  if ( (cat1 - mouse) < (cat2 - mouse)) {
    return "cat1";
  } 
  
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(10, 4, 22));
console.log(catAndMouse(5, 4, 6));

// Desafio 8
function fizzBuzz(nums) {
  let aux = [];
  for(let i = 0; i < nums.length; i += 1) {
    if( (nums[i] % 3 == 0) && (nums[i] % 5 == 0)) {
      aux.push('fizzBuzz')
    } else if(nums[i] % 5 == 0) {
      aux.push('buzz');
    } else if ( (nums[i] % 3 == 0) ) {
      aux.push('fizz');
    } else {
      aux.push('bug!');
    }
  }

  return aux;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(frase) {
  let letra = ['a','e','i','o','u'];
  let numero = [1,2,3,4,5];

  for(let i = 0; i < frase.length; i += 1) {
    for(let j = 0; j <  letra.length; j += 1) {
      if(frase[i] == letra[j]) {
        frase = frase.replace(frase[i],numero[j]);
        
      }
    }
  }
  return frase;
}
console.log(encode('Hello My Friend'))

function decode(frase) {
  let letra = ['a','e','i','o','u'];
  let numero = [1,2,3,4,5];

  for(let i = 0; i < frase.length; i += 1) {
    for(let j = 0; j <  numero.length; j += 1) {
      if(frase[i] == letra[j]) {
        frase = frase.replace(frase[i],letra[j]);
        
      }
    }
  }
  return frase;
}
console.log(decode('Hello My Friend'))

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
