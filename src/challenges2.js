// Desafio 10
function techList(tech, nome) {
  let objTech = [];
  if (tech.length > 0) {
    tech.sort();
    for (let key of tech) {
      objTech.push({
        tech: key,
        name: nome,
      });
    }
  }
  return objTech.length > 0 ? objTech : 'Vazio!';
}

// Desafio 11
function formatNumberPhone(indexArray, value) {
  let retornoFormato = '';
  switch (indexArray) {
  case 0:
    retornoFormato = `(${value}`;
    break;
  case 1:
    retornoFormato = `${value}) `;
    break;
  case 6:
    retornoFormato = `${value}-`;
    break;
  default:
    retornoFormato = `${value}`;
    break;
  }
  return retornoFormato;
}

function countNumber(arrayTelefone, value) {
  let counter = 0;
  for (let index = 0; index < arrayTelefone.length; index += 1) {
    counter += arrayTelefone[index] === value ? 1 : 0;
  }
  return counter;
}

function checkErrorPhone(arrayTelefone, value) {
  let errorMessage = '';

  if (arrayTelefone.length !== 11) {
    errorMessage = 'Array com tamanho incorreto.';
  } else if (countNumber(arrayTelefone, value) > 2 || value < 0 || value > 9) {
    errorMessage = 'não é possível gerar um número de telefone com esses valores';
  }
  return errorMessage;
}

function generatePhoneNumber(arrayTelefone) {
  let phoneFormated = '';
  let mensagemErro = '';
  mensagemErro = checkErrorPhone(arrayTelefone, '');
  for (let index = 0; index < arrayTelefone.length; index += 1) {
    mensagemErro = checkErrorPhone(arrayTelefone, arrayTelefone[index]);
    if (mensagemErro.length > 0) {
      break;
    } else {
      phoneFormated += formatNumberPhone(index, arrayTelefone[index]);
    }
  }

  return mensagemErro.length === 0 ? phoneFormated : mensagemErro;
}

// Desafio 12
function checkLines(line1, line2, line3) {
  let firstcheck = line1 < (line2 + line3);
  let secondCheck = line1 > Math.abs(line2 - line3);

  let checkLetter = firstcheck === true && secondCheck === true;
  return checkLetter;
}

function triangleCheck(lineA, lineB, lineC) {
  let checkA = checkLines(lineA, lineB, lineC);
  let checkB = checkLines(lineB, lineA, lineC);
  let checkC = checkLines(lineC, lineA, lineB);

  let result = checkA === true || checkB === true || checkC === true;
  return result;
}

// Desafio 13
function hydrate(stringRecebida) {
  let cont = 0;
  let drinks = /[1-9]/g;
  let result = stringRecebida.match(drinks);
  for (let indexSecond = 0; indexSecond < result.length; indexSecond += 1) {
    cont += Number(result[indexSecond]);
  }

  return cont === 1 ? `${cont} copo de água` : cont > 0 && cont > 1 && `${cont} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
