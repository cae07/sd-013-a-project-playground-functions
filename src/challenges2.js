// Desafio 10
function techList(techArray, name) {
    if (!techArray.length) return 'Vazio!';

    let objList = [];

    for (let element of techArray) {
        objList.push({
            tech: element,
            name: name
        });
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#the_arrow_function_expression_%3E
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    objList.sort((a, b) => (a.tech > b.tech) ? 1 : -1);

    return objList;
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'diego'));

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
