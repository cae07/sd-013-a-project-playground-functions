// Desafio 10
// Fonte: https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript
function techList(input, name){
  if(input.length === 0) {
    return 'Vazio!';
  }
  let conjunto = [];

  for(let index = 0; index < input.length; index += 1) {
    conjunto[index] = {
      tech: input[index],
      name: name, 
    }
  }
  conjunto.sort(function(a, b){
    let nameA=a.tech, nameB=b.tech;
    if (nameA < nameB)
        return -1
    if (nameA > nameB)
        return 1
    return 0
  })
    return conjunto;
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
