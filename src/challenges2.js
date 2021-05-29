// Desafio 10
// Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function techList(array, name) {
  objects = [];
  if (array.length > 0) {
    for (let i in array) {
      object = {
        tech: array[i],
        name: name
      };
      objects.push(object);
    };

    objects.sort(function(a, b) {
      let techA = a.tech.toUpperCase(); // ignore upper and lowercase
      let techB = b.tech.toUpperCase(); // ignore upper and lowercase
      if (techA < techB) {
        return -1;
      };
      if (techA > techB) {
        return 1;
      };    
      // names must be equal
      return 0;
    });
    return objects;
  } 
  return "Vazio!";
};

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
