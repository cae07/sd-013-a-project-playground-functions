// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let sum = (base * height) / 2;
  return sum;
}

// Desafio 3
function splitSentence(stringtosplit) {
  let splits = stringtosplit.split(' ');
  return splits;
}

// Desafio 4
function concatName(string) {
  let orderString = string[string.length - 1] + ', ' + string[0];
  return orderString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winspoints = 3 * wins;
  let tiespoints = 1 * ties;
  let pontos = winspoints + tiespoints;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let contNumero = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maior) {
      maior = numeros[index];
    }
  }
  for (let index2 = 0; index2 < numeros.length; index2 += 1) {
    if (numeros[index2] === maior) {
      contNumero += 1;
    }
  }
  return contNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1position = Math.abs(cat1 - mouse);
  let cat2position = Math.abs(cat2 - mouse);
  
  if (cat1position < cat2position) {
    return 'cat1';
   }
  else if (cat1position === cat2position) {
    return 'os gatos trombam e o rato foge';
   }
  else {
    return 'cat2';
   }
}

// Desafio 8
function fizzBuzz(string) {
  for (let index in string) {
    if (string[index] % 5 === 0 && string[index] % 3 === 0) {
      string[index] = 'fizzBuzz';
     }
    else if (string [index] % 5 === 0) {
      string[index] = 'buzz';
     }
    else if (string[index] % 3 === 0) {
      string[index] = 'fizz';
     }
    else {
      string[index] = 'bug!';
     }
  }
  return string;
}

// Desafio 9
function encode(stringcod) {
  stringcod = stringcod.replace(/a/g,"1");
  stringcod = stringcod.replace(/e/g,"2");
  stringcod = stringcod.replace(/i/g,"3");
  stringcod = stringcod.replace(/o/g,"4");
  stringcod = stringcod.replace(/u/g,"5");
  return stringcod;
}
function decode(stringcod) {
  stringcod = stringcod.replace(/1/g,"a");
  stringcod = stringcod.replace(/2/g,"e");
  stringcod = stringcod.replace(/3/g,"i");
  stringcod = stringcod.replace(/4/g,"o");
  stringcod = stringcod.replace(/5/g,"u");
  return stringcod; 
}
console.log(decode('h3 th2r2!'))

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
