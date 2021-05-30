// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let conta = (base * height) / 2;
  return conta;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let retorno;
  retorno = (`${array[array.length - 1]}, `);
  retorno += (array[0]);
  return retorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  pontos += wins * 3;
  pontos += ties * 1;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  let quantidade = array.filter((x) => x === maior).length;
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);
  if (gato1 < gato2) {
    return 'cat1';
  } if (gato2 < gato1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let string = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 15 === 0) {
      string.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      string.push('fizz');
    } else if (array[i] % 5 === 0) {
      string.push('buzz');
    } else {
      string.push('bug!');
    }
  }
  return string;
}

// Desafio 9 // UTILIZANDO ESSA THREAD(https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript) EU ADAPTEI O CODIGO
function encode(string) {
  let anum = {
    A: 1,
    B: 'B',
    C: 'C',
    D: 'D',
    E: 2,
    F: 'F',
    G: 'G',
    H: 'H',
    I: '3',
    J: 'J',
    K: 'K',
    L: 'L',
    M: 'M',
    N: 'N',
    O: '4',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: 'S',
    T: 'T',
    U: 5,
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: 'Z',
    '!': '!',
    '?': '?',
    '.': '.',
    a: 1,
    b: 'b',
    c: 'c',
    d: 'd',
    e: 2,
    f: 'f',
    g: 'g',
    h: 'h',
    i: '3',
    j: 'j',
    k: 'k',
    l: 'l',
    m: 'm',
    n: 'n',
    o: '4',
    p: 'p',
    q: 'q',
    r: 'r',
    s: 's',
    t: 't',
    u: 5,
    v: 'v',
    w: 'w',
    x: 'x',
    y: 'y',
    z: 'z',
  };
  if (string.length === 1) return anum[string] || ' ';
  return (string.split('').map(encode).join(''));
}

function decode(string) {
  let anum = {
    B: 'B',
    C: 'C',
    D: 'D',
    F: 'F',
    G: 'G',
    H: 'H',
    J: 'J',
    K: 'K',
    L: 'L',
    M: 'M',
    N: 'N',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: 'S',
    T: 'T',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: 'Z',
    '!': '!',
    '?': '?',
    '.': '.',
    b: 'b',
    c: 'c',
    d: 'd',
    f: 'f',
    g: 'g',
    h: 'h',
    j: 'j',
    k: 'k',
    l: 'l',
    m: 'm',
    n: 'n',
    p: 'p',
    q: 'q',
    r: 'r',
    s: 's',
    t: 't',
    v: 'v',
    w: 'w',
    x: 'x',
    y: 'y',
    z: 'z',
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  if (string.length === 1) return anum[string] || ' ';
  return (string.split('').map(decode).join(''));
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
