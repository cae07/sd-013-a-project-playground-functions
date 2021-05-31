// Desafio 10
function techList(skills, name) {
  let listSkills = [];
  if (skills.lenght === 0) {
    return "Vazio!";
  }

  for (let tecSkills of skills.soft()) {
    listSkills.push({
      tech : tecSkills,
      name : name,
    })
  }
  return listSkills;
};
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
