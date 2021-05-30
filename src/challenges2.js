// Desafio 10
function techList(techs1, name) {
    if (techs1.length === 0){
      return `Vazio!`
    }
  let technology = [];
    techs1.sort();
for(let value in techs1){
    technology.push({
      tech : techs1[value],
      name : name
  })
}
return technology;
}

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
