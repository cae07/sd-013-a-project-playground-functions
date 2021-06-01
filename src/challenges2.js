// Desafio 10
function techList(technologies, name) {
  let result = [];
  technologies.sort();

  for (let technology of technologies) {
    let object = {
      tech: technology,
      name,
    };
    result.push(object);
  }

  if (technologies.length === 0) {
    return 'Vazio!';
  }
  return result;
}
// Desafio 11
function generatePhoneNumber(numbers) {
  const erro = 'não é possível gerar um número de telefone com esses valores';
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (numbers[0] < 0 || numbers[0] > 9 || numbers[1] < 0 || numbers[1] > 9) {
    return erro;
  }
  let result = '';
  let repetitive = [];
  repetitive[numbers[0]] = 1;
  repetitive[numbers[1]] = 1;
  result += `(${numbers[0]}${numbers[1]}) `;

  for (let i = 2; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return erro;
    }
    if (repetitive[numbers[i]] === undefined) {
      repetitive[numbers[i]] = 1;
    } else {
      repetitive[numbers[i]] += 1;
    }
    if (repetitive[numbers[i]] === 3) {
      return erro;
    }
    if (i === 7) {
      result += `-${numbers[i]}`;
    } else {
      result += `${numbers[i]}`;
    }
  }

  return result;
}

// funcao para checkar validade de tres linhas
// para formar um triangulo

function linesCheck(mainLine, secondLine, thirdLine) {
  if (mainLine < secondLine + thirdLine && mainLine > Math.abs(secondLine - thirdLine)) {
    return true;
  }
  return false;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (linesCheck(lineA, lineB, lineC) || linesCheck(lineB, lineA, lineC)
   || linesCheck(lineC, lineA, lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(sentence) {
  let result = 0;
  for(letter of sentence){
    if (isNaN(parseInt(letter))) {
    } else {
      result += parseInt(letter);
    }
  }
  if (result === 1) {
    return `${result} copo de água`
  } else {
    return `${result} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
