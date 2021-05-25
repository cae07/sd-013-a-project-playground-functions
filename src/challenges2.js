// Desafio 10

// let tecnologias = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let name = "Julia";


function techList(array, name) {
   if (array.length === 0 ) {
     return 'Vazio!';
   }
   else {
    let sortArray = array.sort();
    let finalArray = [];

    for(let key in sortArray) {
      finalArray.push({tech: sortArray[key], name: name})
    }
    return finalArray;

   }

}

// techList(tecnologias, name);


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
