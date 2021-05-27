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
function generatePhoneNumber() {
  
}

// Desafio 12
function triangleCheck(linhaA, linhaB, linhaC) {
  let cond1 = (linhaA < (linhaB + linhaC)) && (linhaA > Math.abs(linhaB - linhaC));
  let cond2 = (linhaB < (linhaA + linhaC)) && (linhaB > Math.abs(linhaA - linhaC));
  let cond3 = (linhaC < (linhaA + linhaB)) && (linhaC > Math.abs(linhaA - linhaB));
  return cond1 && cond2 && cond3;
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
