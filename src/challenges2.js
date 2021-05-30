// Desafio 10
function techList(list, name) {
  let techList = [];
  for (let item of list.sort()) {
    techList.push({
      tech: item,
      name: name
    })
  }
  if (techList.length === 0) {
    techList = 'Vazio!';
  }
  return techList;
}

// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB) - Math.abs(lineC) && lineB > Math.abs(lineA) - Math.abs(lineC) && lineC > Math.abs(lineA) - Math.abs(lineB)) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 13
function hydrate(barOrder) {
  let recommendation = '';
  let ints = barOrder.match(/\d+/g).map(Number);
  let glassCount = 0;

  for (let index = 0; index < ints.length; index += 1) {
    glassCount += ints[index];
  }
  if (glassCount == 1) {
    recommendation = glassCount + ' ' + 'copo de água';
  } else {
    recommendation = glassCount + ' ' + 'copos de água';
  }
  return recommendation;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
