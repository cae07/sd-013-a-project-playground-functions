// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
//fonte https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + 1 * ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  // ajuda do sumoyama
  let contar = 0;
  let maior = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      // [5,1,9,3]-5>5, não, 1>5 não, 9>5 sim!!! 3>5não.
      maior = array[index]; // maior passa a ser o indice 3, o maior deixa de ser array[0], passa a ser array[3]
      contar = 0; // reinicia a contagem para onde começou
    }
    if (maior === array[index]) {
      // checagem para ver se maior é igual a outros indices do array
      contar += 1;
    }
  }
  return contar;
}
// Desafio 7//math.abs foi uma dica do plantão do sumoyama para retornar valores inteiros
function catAndMouse(mouse, cat1, cat2) {
  let distcat1 = Math.abs(mouse - cat1);
  let distcat2 = Math.abs(mouse - cat2);
  if (distcat1 < distcat2) {
    return 'cat1';
  } if (distcat2 < distcat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8//Ajuda de Olávio Timóteo
function fizzBuzz(numeros) {
  let novoarray = []; // como é um novo array preciso criar um array vazio e ir add.
  for (const key in numeros) {
    if (numeros[key] % 15 === 0) {
      // igual a 0 para ter certeza que é divisivel.para o resto ser 0.
      novoarray.push('fizzBuzz');
    } else if (numeros[key] % 5 === 0) {
      novoarray.push('buzz');
    } else if (numeros[key] % 3 === 0) {
      novoarray.push('fizz');
    } else {
      novoarray.push('bug!');
    }
  }
  return novoarray;
}

// Desafio 9
//  consultei https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function encode(string) {
  string = string.replace(/a/gi, '1'); // g vem de global e i de ignore-ignora difer de maiuscula e minuscula
  string = string.replace(/e/gi, '2');
  string = string.replace(/i/gi, '3');
  string = string.replace(/o/gi, '4');
  string = string.replace(/u/gi, '5');
  return string;
}

function decode(string) {
  string = string.replace(/1/gi, 'a');
  string = string.replace(/2/gi, 'e');
  string = string.replace(/3/gi, 'i');
  string = string.replace(/4/gi, 'o');
  string = string.replace(/5/gi, 'u');
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
