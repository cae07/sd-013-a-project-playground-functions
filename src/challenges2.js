function sort(results) {
  results.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    } if (a.tech < b.tech) {
      return -1;
    } return 0;
  });
  return results;
}

// Desafio 10
function techList(tech, name) {
  let results = [];
  let techNames = tech;
  let finalList = [];
  if (techNames.length === 0) {
    return ('Vazio!');
  } for (let i = 0; i < techNames.length; i += 1) {
    let object = {
      tech: '',
      name,
    };
    object.tech = techNames[i];
    results.push(object);
  }
  finalList = sort(results);
  return finalList;
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
  // let reg = /\d+/g;
  // let inpStg = input;
  // let optStg = inpStg.match(reg);
  // let count = 0;
  // for (let i = 0; i < optStg.length; i += 1) {
  //   count += optStg[i];
  // }
  // if (count === 1) {
  //   return `${count} copo de água`;
  // } return `${count} copos de água`;
}
console.log(hydrate('8 anos 9 dias'));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
