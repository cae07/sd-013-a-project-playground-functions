// Desafio 10
// Resolvido com a ajuda do aluno Matheus Duarte da Turma 13- Tribo A
// Sort https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Diferença do for of e for in https://pt.stackoverflow.com/questions/90352/qual-%C3%A9-a-diferen%C3%A7a-entre-o-for-of-e-o-for-in
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
// Math.abs https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)
    || lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)
    || lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8));
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
