// Desafio 10
function techList(tecno, name) {
  let arrayDez = [];
  let nomeTech = tecno.sort();

  for (let i = 0; i < tecno.length; i += 1) {
    arrayDez.push({
      tech: nomeTech[i],
      name: name,
    });
  }

  if (arrayDez.length < 1) {
    return 'Vazio!';
  }
  return arrayDez;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(a, b, c) {
  let para1 = (a < (b + c)) && (a > Math.abs(b - c));
  let para2 = (b < (a + c)) && (b > Math.abs(a - c));
  let para3 = (c < (a + b)) && (c > Math.abs(a - b));
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
