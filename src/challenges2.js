// Desafio 10
function techList(texto, name) {
  // seu código aqui
  let vazio = {};
  let retorno = [];
  let ordenamendo = [];
  ordenamendo = texto.sort();
  if (ordenamendo.length === 0) {
    vazio = 'Vazio!';
    return vazio;
  }
  for (let key in ordenamendo) {
    vazio.name = name;
    vazio.tech = ordenamendo[key];
    retorno.push(vazio);
    vazio = {};
  }
  return retorno;
}
// Desafio 11
function generatePhoneNumber(num) {
  let cont = null;
  if (num.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < num.length; i += 1) {
    for (let j = 0; j < num.length; j += 1) {
      if (num[i] === num[j]) {
        cont += 1;
      }
    }
    if (num[i] < 0 || num[i] > 9 || cont >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }cont = 0;
  }  let formatN = '';
  for (let i = 0; i < num.length; i += 1) {
    formatN += num[i];
  }
  return formatN.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let absA = Math.abs(lineA);
  let absB = Math.abs(lineB);
  let absC = Math.abs(lineC);
  if (absA + absB < absC || absC + absB < absA || absC + absA < absB) {
    return false;
  }
  return true;
}
// Desafio 13
function hydrate(texto) {
  // seu código aqui
  let num = null;
  let resul = null;
  num = texto.match(/\d+/g);
  for (let i = 0; i < num.length; i += 1) {
    resul += parseInt(num[i], 10);
  }
  if (resul <= 1) {
    return `${resul} copo de água`;
  }
  return `${resul} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
