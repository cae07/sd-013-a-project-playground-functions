// Desafio 10
function techList(arrayTecnologias, name) {
  // seu código aqui
  let resultado = [];
  let aux = arrayTecnologias.sort();
  if (arrayTecnologias > [0]) {
    for (let index = 0; index < arrayTecnologias.length; index += 1) {
      let auxiliarResultado = {};
      auxiliarResultado.tech = aux[index];
      auxiliarResultado.name = name;
      resultado.push(auxiliarResultado);
    }
  } else {
    resultado = 'Vazio!';
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber(arrayNumeros) {
  // seu código aqui
  let resultado = '';
  let auxiliar = 0;
  if (arrayNumeros.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
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
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let resultado = false;
  if (lineA < lineB + lineC && lineA > lineA - Math.abs(lineB + lineC) && lineB < lineA + lineC && lineB > lineB - Math.abs(lineA + lineC) && lineC < lineA + lineB && lineC > lineC - Math.abs(lineA + lineB)) {
    resultado = true;
  }
  return resultado;
}

// Desafio 13
function hydrate(stringRecebida) {
  // seu código aqui
  let auxiliarResultado = stringRecebida.match(/\d/g);
  auxiliarResultado = auxiliarResultado.join('');
  let auxiliarResultado1 = auxiliarResultado;
  let resultado = 0;
  for (let index = 0; index < auxiliarResultado1.length; index += 1) {
    resultado += parseInt(auxiliarResultado1[index], 10);
  }
  if (resultado === 1) {
    resultado += ' copo de água';
  } else if (resultado > 1) {
    resultado += ' copos de água';
  }
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
