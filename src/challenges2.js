// Desafio 10
function techList(techsList, nome) {
  let techToNameLearn = [];

  for (let technology of techsList.sort()) {
    techToNameLearn.push({
      tech: technology,
      name: nome,
    });
  }
  if (techsList.length > 0) {
    return techToNameLearn;
  }
  return 'Vazio!';
}

// Desafio 11

let mensagemImpossivel = 'não é possível gerar um número de telefone com esses valores';
let mensagemTamanho = 'Array com tamanho incorreto.';

function checaTamanho (phoneNumbersArray) {
  if (phoneNumbersArray.length !== 11) {
    return true;
  }
}

function checaNumeros (phoneNumbersArray) {
  for (let digito of phoneNumbersArray) {
    if (digito < 0 || digito > 9) {
      return true;
    }
  }
}

function contaRepeticao (phoneNumbersArray) {
  let repetiu = 0;

  for (let comparaRepetido of phoneNumbersArray) {
    for (let repetidoComparar of phoneNumbersArray) {
      if (repetidoComparar === comparaRepetido) {
        repetiu += 1;
      }
      if (repetiu >= 3) {
        return true;
      }
    }
    repetiu = 0
  }
}

function mountPhone (phoneNumbersArray) {
  phoneNumberString = phoneNumbersArray.join('');
  let ddd = phoneNumberString.slice(0, 2);
  let prefixo = phoneNumberString.slice(2, 7);
  let sufixo = phoneNumberString.slice(7, 11);
  return `(${ddd}) ${prefixo}-${sufixo}`;
}

function generatePhoneNumber(phoneNumbersArray) {
 if (checaTamanho(phoneNumbersArray)) {
  return mensagemTamanho;
 } if (checaNumeros(phoneNumbersArray)) {
  return mensagemImpossivel;
 } if (contaRepeticao(phoneNumbersArray)) {
  return mensagemImpossivel;
 } 
  return mountPhone(phoneNumbersArray);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA > Math.abs(lineB - lineC)
    && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)
  ) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(barString) {
  let regularExp = /\d+/g;
  let stringBebedeira = 0;
  let somatorio = 0;
  for (let drinks of barString) {
    if (drinks.match(regularExp) !== null) {
      stringBebedeira += drinks.match(regularExp);
    }
  }
  for (let somador of stringBebedeira) {
    somatorio += parseInt(somador, 10);
  }
  if (somatorio > 1) {
    return `${somatorio} copos de água`;
  }
  return `${somatorio} copo de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
