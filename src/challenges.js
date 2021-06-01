// Desafio 1
function compareTrue(p1, p2) {
  return p1 && p2;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3
function splitSentence(sentence) {
  let fraseSeparada = sentence.split(' ');
  return fraseSeparada;
}
splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

// Desafio 4
function concatName(arg) {
  let string = arg;
  let primeiroItem = string[0];
  let ultimoItem = string[string.length - 1];
  let concatenacao = `${ultimoItem}, ${primeiroItem}`;
  return concatenacao;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
concatName(['foguete', 'não', 'tem', 'ré']);
concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = (wins * 3);
  let pontosEmpate = (ties * 1);
  let pontosTotais = pontosVitoria + pontosEmpate;
  return pontosTotais;
}
footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 6
function highestCount(nums) {
  let maiorNum = nums[0];
  let cont = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > maiorNum) {
      maiorNum = nums[i];
      cont = 0;
    }
    if (nums[i] === maiorNum) {
      cont += 1;
    }
  }
  return cont;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);
highestCount([0, 4, 4, 4, 9, 2, 1]);
highestCount([0, 0, 0]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let felinoVencedor = 0;
  let dMouseCat1 = Math.abs(cat1 - mouse);
  let dMouseCat2 = Math.abs(cat2 - mouse);
  if (dMouseCat1 > dMouseCat2) {
    felinoVencedor = 'cat2';
  } else if (dMouseCat1 < dMouseCat2) {
    felinoVencedor = 'cat1';
  } else if (dMouseCat1 === dMouseCat2) {
    felinoVencedor = 'os gatos trombam e o rato foge';
  }
  return felinoVencedor;
}
catAndMouse(0, 3, 2);
catAndMouse(10, 4, 22);
catAndMouse(1, 0, 2);

// Desafio 8
function fizzBuzz(array) {
  let numeros = array;
  let resultado = [];
  for (let i = 0; i < numeros.length; i += 1) {
    if ((numeros[i] % 3 === 0) && (numeros[i] % 5 === 0)) {
      resultado[i] = 'fizzBuzz';
    } else if ((numeros[i] % 3) === 0) {
      resultado[i] = 'fizz';
    } else if ((numeros[i] % 5) === 0) {
      resultado[i] = 'buzz';
    } else {
      resultado[i] = 'bug!';
    }
  }
  return resultado;
}
fizzBuzz([2, 15, 7, 9, 45]);
fizzBuzz([7, 9]);
fizzBuzz([9, 25]);

// Desafio 9
function encode(stg) {
  let acesso = Array.from(stg);
  let codificado = [];
  for (let i = 0; i < acesso.length; i += 1) {
    if (acesso[i] === 'a' || acesso[i] === 'e' || acesso[i] === 'i' || acesso[i] === 'o' || acesso[i] === 'u') {
      if (acesso[i] === 'a') {
        codificado[i] = 1;
      }
      if (acesso[i] === 'e') {
        codificado[i] = 2;
      }
      if (acesso[i] === 'i') {
        codificado[i] = 3;
      }
      if (acesso[i] === 'o') {
        codificado[i] = 4;
      }
      if (acesso[i] === 'u') {
        codificado[i] = 5;
      }
    } else {
      codificado[i] = acesso[i];
    }
  }
  return (codificado.join(''));
}
function decode(stg) {
  let acesso = Array.from(stg);
  let decodificado = [];
  for (let i = 0; i < acesso.length; i += 1) {
    if (acesso[i] === '1' || acesso[i] === '2' || acesso[i] === '3' || acesso[i] === '4' || acesso[i] === '5') {
      if (acesso[i] === '1') {
        decodificado[i] = 'a';
      }
      if (acesso[i] === '2') {
        decodificado[i] = 'e';
      }
      if (acesso[i] === '3') {
        decodificado[i] = 'i';
      }
      if (acesso[i] === '4') {
        decodificado[i] = 'o';
      }
      if (acesso[i] === '5') {
        decodificado[i] = 'u';
      }
    } else {
      decodificado[i] = acesso[i];
    }
  }
  return (decodificado.join(''));
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
