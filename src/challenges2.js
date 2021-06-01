// Desafio 10
function techList(List, name) {
  if (List.length) {
    let namedTechList = [];
    for (let item of List) {
      let techItem = { tech: item, name };
      namedTechList.push(techItem);
    }
    for (let i = 0; i < namedTechList.length; i += 1) {
      let menor = namedTechList[i];
      for (let j = i + 1; j < namedTechList.length; j += 1) {
        if ((menor.tech.localeCompare(namedTechList[j].tech)) === 1) {
          menor = namedTechList[j];
          namedTechList[j] = namedTechList[i];
          namedTechList[i] = menor;
        }
      }
    } return namedTechList;
  } return ('Vazio!');
}
// Desafio 11
function generatePhoneNumber(numArray) {
  if (numArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let countArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let telefone = '';
  for (let i = 0; i < numArray.length; i += 1) {
    let num = numArray[i];
    if (num < 0 || num > 9 || countArray[num] === 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    countArray[num] += 1;
    telefone += num.toString();
  }
  let ddd = `(${(telefone.substring(0, 2))}) `;
  telefone = `${(telefone.substring(2, 7))}-${(telefone.substring(7, 11))}`;
  return (ddd + telefone);
}

// Desafio 12
function triangleCheck(a, b, c) {
  if ((a > b + c) || (b > a + c) || (c > b + a)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(pedido) {
  let numbers = pedido.match(/[0-9]+/g);
  let copos = 0;
  for (let num of numbers) {
    copos += parseInt(num, 10);
  }
  if (copos > 1) {
    return (`${copos.toString()} copos de água`);
  }
  return (`${copos.toString()} copo de água`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
