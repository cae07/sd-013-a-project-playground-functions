// let techs = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let name = 'julio';
// for (let i = 0; i < techs.length; i += 1) {
//   let obj = techs[i];
//   obj = {};
//   obj['tech'] = techs[i];
//   obj['name'] = name;
//   console.log(obj);
// }


// Desafio 10
function techList(techs, name) {
  let result;
  for (let i = 0; i < techs.length; i += 1) {
    obj = {};
    obj['tech'] = techs[i];
    obj['name'] = name;
    result += obj;
  }
  return result;
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'julio'));

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
