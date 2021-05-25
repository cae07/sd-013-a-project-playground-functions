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
  let stringDoArray = '';
  let repetiu = 0;
  if (arrayDeNumeros.length == '') {
    numeroTelefone = 'Array com tamanho incorreto.';
  } else {
    for (let indexD111 = 0; indexD111 < arrayDeNumeros.length; indexD111 += 1) {
      for (let indexD112 = 0; indexD112 < arrayDeNumeros.length; indexD112 += 1) {
        if (arrayDeNumeros[indexD111] === arrayDeNumeros[indexD112]) {
          repetiu += 1;
        }
      }
      if (repetiu === 3) {
        numeroTelefone = 'não é possível gerar um número de telefone com esses valores';
      }
      if (arrayDeNumeros.length === 11) {
        for (let indexD113 = 0; indexD113 < arrayDeNumeros.length; indexD113 += 1) {
          if ((arrayDeNumeros[indexD113] < 0) || (arrayDeNumeros[indexD113] > 9) || (repetiu >= 3)) {
            numeroTelefone = 'não é possível gerar um número de telefone com esses valores';
          }
        }
      } else if (arrayDeNumeros.length !== 11) {
        numeroTelefone = 'Array com tamanho incorreto.';
      }
      repetiu = 0;
      stringDoArray = stringDoArray + arrayDeNumeros[indexD111];
    }
    if ((numeroTelefone !== 'não é possível gerar um número de telefone com esses valores') && (numeroTelefone !== 'Array com tamanho incorreto.')) {
      numeroTelefone = '(' + stringDoArray.slice(0 , 2) + ') ' + stringDoArray.slice(2 , 7) + '-' + stringDoArray.slice(7 , 11);
    }
  }
  return numeroTelefone;
}
console.log(generatePhoneNumber([0, 1, 6]));
console.log(generatePhoneNumber([]));
console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let ehtriangulo = false;
  if ((lineA < (lineB + lineC)) && (lineA > (lineB - lineC))) {
    if ((lineB < (lineC + lineA)) && (lineB > (lineC - lineA))) {
      if ((lineC < (lineA + lineB)) && (lineC > (lineA - lineB))) {
        ehtriangulo = true;
      }
    }
  }
  return ehtriangulo;
}

// Desafio 13
function hydrate(string) {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
