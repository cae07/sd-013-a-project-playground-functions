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
function concatName(...nomes) {
  let first = nomes[0];
  let last = nomes[nomes.length -1]
  let result = last + ", "+ first;
  return result;
}
console.log(concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo'));
console.log(concatName('foguete', 'não', 'tem', 'ré'));
console.log(concatName('captain', 'my', 'captain'));

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
 
  let maior = [];
  let count = 0;
  for(let i = 0; i < nums.length; i += 1) {
    if(nums[i] > maior) {
      maior = nums[i];
    }
  }

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
console.log(highestCount([-50,-20,-30,-10,-10]))

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {

  if( (cat1 > cat2) && (cat1 < mouse) && (cat2 < mouse) ) {
    console.log("cat2");
  } else if( (cat1 < cat2) && (cat1 < mouse) && (cat2 < mouse) ){
    console.log("cat1")
  } else if(cat1 == cat2){
    console.log('os gatos trombam e o rato foge');
  }
}
catAndMouse(0,3,2)
catAndMouse(0,6,12)
catAndMouse(2,6,6)

// Desafio 8
function fizzBuzz(...nums) {
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

console.log(fizzBuzz(2, 15, 7, 9, 45));
console.log(fizzBuzz(7, 9));
console.log(fizzBuzz(9, 25));

// Desafio 9
function encode() {
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
