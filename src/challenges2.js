// Desafio 10
function techList(techs, nome) {
  array = [];
  if (Array.isArray(techs) && techs.length > 0) {
    techs.sort();
    for (i in techs) {
      let obj = {
        tech: techs[i],
        name: nome,
      }
      array.push(obj);
    }
    return array;
  } else {
    return "Vazio!";
  }
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  let number = '(' + arrayNumber[0] + arrayNumber[1] + ')' + " " + arrayNumber[2] + arrayNumber[3] + arrayNumber[4] + arrayNumber[5] + arrayNumber[6] + '-' + arrayNumber[7] + arrayNumber[8] + arrayNumber[9] + arrayNumber[10];
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let countNumbers = {};
  for (i in arrayNumber) {
    const n = arrayNumber[i];
    if (countNumbers[n]) {
      countNumbers[n] += 1;
    } else {
      countNumbers[n] = 1;
    }
    if (countNumbers[n] > 2 || (n < 0 || n > 9)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return number;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let para1 = (lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC));
  let para2 = (lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC));
  let para3 = (lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB));
  return para1 && para2 && para3;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
