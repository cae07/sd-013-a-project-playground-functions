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
function isValidNumber(int, array) {
    if (int < 0 || int > 9) return false;

    if ((array.filter(el => el === int).length) >= 3) return false;

    return true;
}

function applyMask(intArray) {
    // Elementos adicionados "in-place"
    // https://en.wikipedia.org/wiki/In-place_algorithm
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    intArray.splice(0, 0, ['(']);
    intArray.splice(3, 0, [')']);
    intArray.splice(4, 0, [' ']);
    intArray.splice(10, 0, ['-']);
}

function generatePhoneNumber(intArray) {
    if (intArray.length !== 11) return 'Array com tamanho incorreto.';

    let msg = 'não é possível gerar um número de telefone com esses valores';
    for (let i = 0; i < intArray.length; i++) {
        if (!isValidNumber(intArray[i], intArray)) return msg;
    }

    applyMask(intArray); // in-place

    return intArray.join('');
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
