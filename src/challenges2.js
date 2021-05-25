// Desafio 10
function techList(arrayNomesTecnologias, name) {
  arrayNomesTecnologias = arrayNomesTecnologias.sort();
  let resultado = '';
  let novoArrayNomesTecnologias = [];
  for (let indexD10 = 0; indexD10 < arrayNomesTecnologias.length; indexD10 += 1) {
    let objetoAAdicionar = {
      tech: arrayNomesTecnologias[indexD10],
      name,
    };
    novoArrayNomesTecnologias.push(objetoAAdicionar);
  }
  if (arrayNomesTecnologias.length === 0) {
    resultado = 'Vazio!';
  } else {
    resultado = novoArrayNomesTecnologias;
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber(arrayDeNumeros) {
  let numeroTelefone = '';
  let telefoneFormatado = '';
  let stringDoArray = ""
  let repetiu = 0;
  if (arrayDeNumeros.length == "") {
    numeroTelefone = 'Array com tamanho incorreto.';
  } else {
    for (let indexD11_1 = 0; indexD11_1 < arrayDeNumeros.length; indexD11_1 += 1) {
      for (let indexD11_2 = 0; indexD11_2 < arrayDeNumeros.length; indexD11_2 += 1) {
        if (arrayDeNumeros[indexD11_1] === arrayDeNumeros[indexD11_2]) {
          repetiu += 1;
        }
      }
      if (repetiu === 3) {
        numeroTelefone = 'não é possível gerar um número de telefone com esses valores';
      }
      if (arrayDeNumeros.length === 11) {
        for (indexD11_3 = 0; indexD11_3 < arrayDeNumeros.length; indexD11_3 += 1) {
          if ((arrayDeNumeros[indexD11_3] < 0) || (arrayDeNumeros[indexD11_3] > 9) || (repetiu === 3)) {
            numeroTelefone = 'não é possível gerar um número de telefone com esses valores';
          }  
        }
      } else if (arrayDeNumeros.length != 11) {
        numeroTelefone = 'Array com tamanho incorreto.';
      }
      repetiu = 0;
      stringDoArray = stringDoArray + arrayDeNumeros[indexD11_1];
    }
    //(12) 34567-8901
    if ((numeroTelefone != 'não é possível gerar um número de telefone com esses valores') && (numeroTelefone != 'Array com tamanho incorreto.')) {
      telefoneFormatado = "(" + stringDoArray.slice(0,2) + ") " + stringDoArray.slice(2,7) + "-" + stringDoArray.slice(7,11)
      numeroTelefone = telefoneFormatado
    }
  }
  return numeroTelefone;
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
