// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return ;
}

// Desafio 2
function calcArea(base,height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(stringRecebida) {
  let splits = stringRecebida.split(' ');
  return splits;
}

// Desafio 4
function concatName(arrayStrings) {
  let newArray = arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0]; 
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTime = (wins * 3) + ties;
  return pontosTime;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maior = arrayNumbers[0];
  let maiorRepete = 0;

  for (let pickedNumber of arrayNumbers) {
      if (pickedNumber >= maior) {
          maior = pickedNumber;
      }
  };

  for (let selectedNumber of arrayNumbers) {
      if (selectedNumber == maior) {
          maiorRepete += 1;
      }
  };
  return maiorRepete;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let mouseToCat1 = 0;
  let mouseToCat2 = 0;

  if (mouse >= cat1) {
      mouseToCat1 = mouse - cat1;
  } else if (mouse < cat1) {
      mouseToCat1 = cat1 - mouse;
  }

  if (mouse >= cat2) {
      mouseToCat2 = mouse - cat2;
  } else if (mouse < cat2) {
 mouseToCat2 = cat2 - mouse;
  }

  if (mouseToCat1 < mouseToCat2) {
      return 'cat1';
  } else if (mouseToCat1 > mouseToCat2) {
      return 'cat2';
  } else {
      return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let fizzBuzzArray = [];

  for (let pegaNumero of arrayDeNumeros) {
      if (pegaNumero %3 === 0 && pegaNumero %5 === 0){
          fizzBuzzArray.push("fizzBuzz");
      } else if (pegaNumero %3 === 0) {
          fizzBuzzArray.push("fizz");
      } else if (pegaNumero %5 === 0) {
          fizzBuzzArray.push("buzz");
      } else {
          fizzBuzzArray.push("bug!");
      }
  };
  return fizzBuzzArray;
}

// Desafio 9
function encode(mensagem) {
  let encoding = {
    a: /a/gi,
    e: /e/gi,
    i: /i/gi,
    o: /o/gi,
    u: /u/gi
  };
  let codificada = mensagem;

  codificada = codificada.replace(encoding.a, '1');
  codificada = codificada.replace(encoding.e, '2');
  codificada = codificada.replace(encoding.i, '3');
  codificada = codificada.replace(encoding.o, '4');
  codificada = codificada.replace(encoding.u, '5');

  return codificada; 
}
function decode(mensagemCodificada) {
  let decoding = {
    '1': /1/gi,
    '2': /2/gi,
    '3': /3/gi,
    '4': /4/gi,
    '5': /5/gi
 };
 let decodificada = mensagemCodificada;

 decodificada = decodificada.replace(decoding['1'], 'a');
 decodificada = decodificada.replace(decoding['2'], 'e');
 decodificada = decodificada.replace(decoding['3'], 'i');
 decodificada = decodificada.replace(decoding['4'], 'o');
 decodificada = decodificada.replace(decoding['5'], 'u');
 
 return decodificada;
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
