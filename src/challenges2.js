// Desafio 10
function techList(tech, name) {
  let person = {};
  let arrTech = tech.split(',');

  for (let i = 0 ; i < arrTech.length ; i++) {
    person['tech'] = arrTech[i];
    person['name'] = name;
    console.log(person)
  }
  
  return 
}


// Desafio 11
function generatePhoneNumber(num) {
  console.log(num);
}
generatePhoneNumber(1,2,3,4,5,6,);

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
