// Desafio 10
function techList(tech, name) {
  /* Documentação sobre .push consultada: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  Referência sobre como checar se um array está vazio: https://flexiple.com/check-if-array-empty-javascript/#:~:text=If%20the%20length%20of%20the,the%20function%20will%20return%20False
  Metódo de sort retirado de: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
  */
  let allTechs = [];

  for (let index in tech){
    let objeto = {
        tech: tech[index],
        name: name,
      }
    allTechs.push(objeto);
    }

  if (tech.length == 0) {
    return 'Vazio!';
  } else {
    return allTechs.sort(function(a, b) {
      let techA = a.tech.toLowerCase();
      let techB = b.tech.toLowerCase();
  
      if (techA < techB) {
        return -1;
      }
      if (techA > techB) {
        return 1;
      }
      return 0;
    });
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  //Usado como referência para o exercício: https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript, http://www.regular-expressions.info/javascript.html
  let onlyNumbers = string.replace(/[^1-9]/g,''), sum = 0, waterGlasses = ``;

  for(let index of onlyNumbers){
    sum += parseInt(index);
  }

  if (sum === 1) {
    waterGlasses = `${sum} copo de água`
  } else {
    waterGlasses = `${sum} copos de água`;
  }
  return waterGlasses;
}

hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
