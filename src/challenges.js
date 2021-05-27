// Desafio 1
function compareTrue(val1, val2) {
  
  if (val1 === true && val2 === true) {
    return true;
  } else {
    return false;
  };

};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
};

// Desafio 4

function concatName(arrayDeStrings) {

  let palavras = ("");
  palavras = (arrayDeStrings[arrayDeStrings.length - 1] + ", " + arrayDeStrings[0]);
  return palavras;
  
};

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties); 
};

// Desafio 6
function highestCount(numeros) {

  let contagem = 0;
  let atual = numeros[0];

  for (let i = 0; i < numeros.length; i += 1) {
    
    if (atual === numeros[i]) {
      contagem += 1;
    };

    if (numeros[i] > atual) {
      atual = numeros[i];
      contagem = 1;
    };

  };

  return contagem;

};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  let gatoDist1 = cat1 - mouse;
  let gatoDist2 = cat2 - mouse;
  let cat10 = 0;
  let cat20 = 0;
  let mouse10 = 0;
  let resposta = "";

  if (cat1 < 0) {
    cat10 = cat1 * (-1);
  } else {
    cat10 = cat1;
  };

  if (cat2 < 0) {
    cat20 = cat2 * (-1);
  } else {
    cat20 = cat2;
  };

  if (mouse < 0) {
    mouse10 = mouse * (-1);
  } else {
    mouse10 = mouse;
  };

  if (mouse10 < cat10) {
    gatoDist1 = cat10 - mouse10;
  } else if (mouse10 > cat10) {
    gatoDist1 = mouse10 - cat10;
  }

  if (mouse10 < cat20) {
    gatoDist2 = cat20 - mouse10;
  } else if (mouse10 > cat20) {
    gatoDist2 = mouse10 - cat20;
  }

  if (gatoDist1 > gatoDist2) {
    resposta = ("cat2");
  } else if (gatoDist1 < gatoDist2) {
    resposta = ("cat1");
  } else if (gatoDist1 === gatoDist2) {
    resposta = ("os gatos trombam e o rato foge");
  }

  return resposta;

};

// Desafio 8
function fizzBuzz(entrada) {
  
  let resultado = [];
  let indice = [];

  for (let i in entrada) {
    
    if (entrada[i] % 3 === 0 && entrada[i] % 5 !== 0) {
      indice.push("fizz");
    } else if (entrada[i] % 5 === 0 && entrada[i] % 3 !== 0) {
      indice.push("buzz");
    } else if (entrada[i] % 3 === 0 && entrada[i] % 5 === 0) {
      indice.push("fizzBuzz");
    } else if (entrada[i] % 3 !== 0 && entrada[i] % 5 !== 0) {
      indice.push("bug!");
    };

  };

  return indice;

};

// Desafio 9
function encode(entrada) {

  let a = entrada;
  for (let i = 0; i < a.length; i+= 1) {

    let b = a.replace("a", "1");
    let c = b.replace("e", "2");
    let d = c.replace("i", "3");
    let e = d.replace("o", "4");
    let f = e.replace("u", "5");
    a = f;

  };

  return a;

};

function decode(entrada) {

  let a = entrada;
  for (let i = 0; i < a.length; i+= 1) {

    let b = a.replace("1", "a");
    let c = b.replace("2", "e");
    let d = c.replace("3", "i");
    let e = d.replace("4", "o");
    let f = e.replace("5", "u");
    a = f;

  };
  
  return a;

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
