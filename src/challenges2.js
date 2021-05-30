// Desafio 10
function techList(tech, name) {

  let nameObj = name;
  let alphabeticNames = [];
  let arrayAux = [];
  
  if(tech.length == 0){
    return "Vazio!"
  }

  tech.sort();
  alphabeticNames = tech;

  for (let names of alphabeticNames){

    let techObject = {
      name: nameObj,
      tech: names     
  }
  arrayAux.push(techObject)
  }
  return arrayAux
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
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
