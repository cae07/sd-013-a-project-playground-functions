// Desafio 10
function techList(myArrayTech, myName) {
  
  if (myArrayTech.length == 0) {  
    return "Vazio!"  
  } else {
    let newArray = [];
    let objTemp = {};
    myArrayTechSort = myArrayTech.sort()
    for (let index = 0; index < myArrayTechSort.length; index += 1) {
      objTemp['tech'] = myArrayTechSort[index];
      objTemp['name'] = myName;
      newArray.push(objTemp);
      objTemp = {};
    }
    return newArray;
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
