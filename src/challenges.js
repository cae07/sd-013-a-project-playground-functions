// Desafio 1
function compareTrue(booleano1, booleano2){
  return booleano1 && booleano2;
}

compareTrue(true, false);

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
};



// Desafio 3
function splitSentence(string) {
  let divisor = string.split(' ');
  return divisor;
};

// .split() divide uma String em uma lista ordenada de substrings.

// Desafio 4
function concatName(arrayNomes) {
  let primeiroNome = arrayNomes[0];
  let ultimoNome = arrayNomes[arrayNomes.length - 1];
  return ultimoNome + ', ' + primeiroNome;
};

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
};


// Desafio 6
  function highestCount(list){
    let maiorValor = Math.max.apply(null, list);
    let numbers = 0;
    for(let index = 0; index < list.length; index += 1){
      if(list[index] === maiorValor){
        numbers += 1;
      }
    }
    return numbers;
};
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
//Math.max() retorna o maior de um ou mais números.


// Desafio 7
 function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);

  if(dist1 < dist2){
    return 'cat1';
  } else if (dist2 < dist1) {
    return 'cat2';
  } else if (dist1 === dist2) {
    return "os gatos trombam e o rato foge";
  }
};
// Math.abs(x) retorna o valor absoluto de um número "x".

// Desafio 8
function fizzBuzz(array){
  let arrayFizz = [];
   for(let index = 0; index < array.length; index +=1){
      if((array[index] % 3 === 0 && array[index] % 5 === 0)){
        arrayFizz.push('fizzBuzz');
    } else if(array[index] % 3 === 0){
      arrayFizz.push('fizz');
    } else if(array[index] % 5 === 0){
      arrayFizz.push('buzz');
    } else arrayFizz.push('bug!')
  }
  return arrayFizz;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));
// === 0, para ter certeza que será divisível, para o resto ser 0.
//.push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array

// Desafio 9
function encode(name) {
  name = name.replace(/a/g, '1');
  name = name.replace(/e/g, '2');
  name = name.replace(/i/g, '3');
  name = name.replace(/o/g, '4');
  name = name.replace(/u/g, '5');
  return name;
}



function decode(nameReverse) {
  nameReverse = nameReverse.replace(/1/g, 'a');
  nameReverse = nameReverse.replace(/2/g, 'e');
  nameReverse = nameReverse.replace(/3/g, 'i');
  nameReverse = nameReverse.replace(/4/g, 'o');
  nameReverse = nameReverse.replace(/5/g, 'u');
  return nameReverse;
};

// .replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres).

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
}
