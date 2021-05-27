// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let techobj = [];
  tech.sort();
  for (let i = 0; i < tech.length; i += 1) {
    techobj.push({
      tech: tech[i],
      name,
    });
  }
  return techobj;
}

// Desafio 11
function generatePhoneNumber(arrNumber) {
  let cont = 0;

  if (arrNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i of arrNumber) {
    for (let p of arrNumber) {
      if (p === i) {
        cont += 1;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    cont = 0;
    if (arrNumber[i] < 0 || arrNumber[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let OarrNumber = arrNumber.join('');
  let DDD = OarrNumber.slice(0, 2);
  let prefix = OarrNumber.slice(2, 7);
  let sufix = OarrNumber.slice(7, 11);
  let phoneNumber = `(${DDD}) ${prefix}-${sufix}`;
  return phoneNumber;
}

// Desafio 12
function triangleCheck(linhaA, linhaB, linhaC) {
  let cond1 = linhaA < linhaB + linhaC && linhaA > Math.abs(linhaB - linhaC);
  let cond2 = linhaB < linhaA + linhaC && linhaB > Math.abs(linhaA - linhaC);
  let cond3 = linhaC < linhaA + linhaB && linhaC > Math.abs(linhaA - linhaB);
  return cond1 && cond2 && cond3;
}

// Desafio 13
function hydrate(string) {
  let regex = /\d+/g;
  let num = string.match(regex);
  let aguaCopo = 0;
  for (let i = 0; i < num.length; i += 1) {
    aguaCopo += parseInt(num[i], 10);
  }
  if (aguaCopo === 1) {
    return `${aguaCopo} copo de água`;
  }
  return `${aguaCopo} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
