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
function checkArr(arrNumber) {
  if (arrNumber.length !== 11) {
    return true;
  }
}

function checkArr2(arrNumber) {
  for (let i of arrNumber) {
    if (arrNumber[i] < 0 || arrNumber[i] > 9) {
      return true;
    }
  }
}

function checkArr3(arrNumber, number) {
  let cont = 0;

  for (let i in arrNumber) {
    if (arrNumber[i] === number) {
      cont += 1;
    }
  }
  return cont;
}

function checkArr4(arrNumber) {
  for (let i in arrNumber) {
    let repeat = checkArr3(arrNumber, arrNumber[i]);
    if (repeat >= 3) {
      return true;
    }
  }
}

function montaTel(arrNumber) {
  let OarrNumber = arrNumber.join('');
  let DDD = OarrNumber.slice(0, 2);
  let prefix = OarrNumber.slice(2, 7);
  let sufix = OarrNumber.slice(7, 11);
  let phoneNumber = `(${DDD}) ${prefix}-${sufix}`;
  return phoneNumber;
}

function generatePhoneNumber(arrNumber) {
  if (checkArr(arrNumber)) {
    return 'Array com tamanho incorreto.';
  }
  if (checkArr2(arrNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (checkArr4(arrNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return montaTel(arrNumber);
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
