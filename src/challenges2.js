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
  let stringDoArray = '';
  let repetiu = 0;
  const erroTelefone01 = 'não é possível gerar um número de telefone com esses valores';
  const erroTelefone02 = 'Array com tamanho incorreto.';
  if (arrayDeNumeros.length == '') {
    numeroTelefone = erroTelefone02;
  } else {
    for (let indexD111 = 0; indexD111 < arrayDeNumeros.length; indexD111 += 1) {
      repetiu = analiseRepeticao(arrayDeNumeros, indexD111, repetiu);
      if (repetiu >= 3) {
        numeroTelefone = erroTelefone01
      }
      if (arrayDeNumeros.length === 11) {
        for (let indexD113 = 0; indexD113 < arrayDeNumeros.length; indexD113 += 1) {
          if ((arrayDeNumeros[indexD113] < 0) || (arrayDeNumeros[indexD113] > 9)
          || (repetiu >= 3)) {
            numeroTelefone = erroTelefone01
          }
        }
      } else if (arrayDeNumeros.length !== 11) { numeroTelefone = erroTelefone02; }
      repetiu = 0;
      stringDoArray = stringDoArray + arrayDeNumeros[indexD111];
    }
    if ((numeroTelefone !== erroTelefone01) && (numeroTelefone !== erroTelefone02)) {
      numeroTelefone = '(' + stringDoArray.slice(0, 2) + ') ' + stringDoArray.slice(2, 7)
       + '-' + stringDoArray.slice(7, 11);
    }
  }
  return numeroTelefone;
}
function analiseRepeticao(arrayDeNumeros, indexD111, repetiunumeros) {
  for (let indexD112 = 0; indexD112 < arrayDeNumeros.length; indexD112 += 1) {
    console.log(arrayDeNumeros[indexD111] + " com " + arrayDeNumeros[indexD112])
    if (arrayDeNumeros[indexD111] == arrayDeNumeros[indexD112]) {
      repetiunumeros += 1;
    }
  }
  return repetiunumeros;
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let ehtriangulo = false;
  if (((lineA < (lineB + lineC)) && (lineA > (lineB - lineC))) && ((lineB < (lineC + lineA))
   && (lineB > (lineC - lineA))) && ((lineC < (lineA + lineB)) && (lineC > (lineA - lineB)))) {
        ehtriangulo = true;
  }
  return ehtriangulo;
}

// Desafio 13
function hydrate(string) {
  let numeros = string.match(/\d+/g).map(Number);
  let soma = 0;
  let recomendacao = '';
  for (let index13 = 0; index13 < numeros.length; index13 += 1) {
    soma += numeros[index13];
  }
  if (soma > 1) {
    recomendacao = (soma + ' copos de água');
  } else {
    recomendacao = (soma + ' copo de água');
  }
  return recomendacao;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
