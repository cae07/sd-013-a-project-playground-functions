// Desafio 10
function techList(tecno, name) {
  if (tecno.length === 0) {
    return 'empty!';
  }
  let tecnologia = [];
  tecno.sort();
  for (let i = 0; i < tecno.length; i += 1) {
    tecnologia.push({
      tech: tecno[i],
      name,
    });
  }
  return tecnologia;
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
