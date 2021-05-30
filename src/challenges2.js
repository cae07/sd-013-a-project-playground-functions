// Desafio 10
function techList(list, name) {
  let arrayobj = [];
  let listOr = list.sort();
  for (let i = 0; i < list.length; i += 1) {
    arrayobj.push({
      tech: listOr[i],
      name,
    });
  }
  if (arrayobj.length < 1) {
    return 'Vazio!';
  }
  return arrayobj;
}

function checarComprimeto(numero) {
  if (numero.length !== 11) {
    return true;
  }
}

function checarNumeroValido(numero) {
  for (let i = 0; i < numero.length; i += 1) {
    if (numero[i] < 0 || numero[i] > 9) {
      return true;
    }
  }
}

function contaRepeticao(numero, elemento) {
  let contador = 0;
  for (let index2 = 0; index2 < numero.length; index2 += 1) {
    if (numero[index2] === elemento) {
      contador += 1;
    }
  }
  return contador;
}

function validaRepeticao(numero) {
  for (let index = 0; index < numero.length; index += 1) {
    let repete = contaRepeticao(numero, numero[index]);
    if (repete >= 3) {
      return true;
    }
  }
}

function montaNumero(numero) {
  let phoneMontado = numero.join('');

  let ddd = phoneMontado.slice(0, 2);

  let prefixNumber = phoneMontado.slice(2, 7);

  let sufixNumber = phoneMontado.slice(7);

  return `(${ddd}) ${prefixNumber}-${sufixNumber}`;
}

// Desafio 11 Matheus Duarte e Matheus Camillo me ajudaram a fazer o exercicio
function generatePhoneNumber(numero) {
  if (checarComprimeto(numero)) {
    return 'Array com tamanho incorreto.';
  }

  if (checarNumeroValido(numero)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  if (validaRepeticao(numero)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return montaNumero(numero);
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
