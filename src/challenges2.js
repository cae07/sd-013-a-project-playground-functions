/* eslint-disable max-len */
/* eslint-disable sonarjs/no-duplicated-branches */
/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
// Desafio 10
function techList() {
  // seu código aqui
  let arrayTecnologias = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
  let name = 'Lucas';
  let resultado = {};
  for (let key in arrayTecnologias) {
    resultado += [{
      name: name,
      tech: arrayTecnologias[key]
    }]
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
  let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
  let resultado = '';
  let auxiliar = 0;
  if (arrayNumeros.length !== 11) {
    resultado = 'Array com tamanho incorreto';
  }
  if (resultado === '') {
    for (let index = 0; index < arrayNumeros.length; index += 1) {
      if (auxiliar === index + 1 && auxiliar === index + 2) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
        return resultado;
      } if (arrayNumeros[index] < 0 || arrayNumeros[index] > 9) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
        return resultado;
      } if (index <= 0) {
        resultado += '(';
      } if (index === 2) {
        resultado += ')';
      } if (index === 7) {
        resultado += '-';
      }
      resultado += arrayNumeros[index];
    }
  }
  return resultado;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
  let lineA = 6;
  let lineB = 2;
  let lineC = 2;
  let resultado = false;
  if (lineA < lineB + lineC && lineA > lineA - Math.abs(lineB + lineC) && lineB < lineA + lineC && lineB > lineB - Math.abs(lineA + lineC) && lineC < lineA + lineB && lineC > lineC - Math.abs(lineA + lineB)) {
    resultado = true;
  }
  return resultado;
}

// Desafio 13
function hydrate() {
  // seu código aqui
  let stringRecebida = '2 cerveja, 5 doses de tequila';
  let resultado = stringRecebida.match(/\d/g);
  resultado = resultado.join('');
  if (resultado === 1) {
    resultado += ' copo de água';
  }
  resultado += ' copos de água';
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
