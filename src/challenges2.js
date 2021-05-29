// Desafio 10
// Resolvido com a ajuda do aluno Matheus Duarte da Turma 13- Tribo A
function techList(arrayTech, nome) {
  let techsToLearn = [];

  for (let techName of arrayTech.sort()) {
    techsToLearn.push( {
      tech: techName,
      name: nome,
    });
  }
  if (arrayTech.length > 0) {
    return techsToLearn;
  } else {
    return 'Vazio!'
  }
}

console.log(techList(['React', 'JS', 'CSS']))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
