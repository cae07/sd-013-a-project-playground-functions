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
function triangleCheck(lineA, lineB, lineC) {
    let current,
        next1,
        next2,
        n1,
        n2;

    for (let c = 0; c <= 2; i++) {
        n1 = c + 1;
        n2 = c + 2;
        if (c === 2) {
            n1 = 0;
            n2 = 1;
        } else if (c === 1) {
            n1 = c + 1;
            n2 = 0;
        }

        current = arguments[c];
        next1 = arguments[n1];
        next2 = arguments[n2];

        return (current < (next1 + next2) && current > Math.abs(next1 - next2));
    }
}
//console.log(triangleCheck(10, 14, 4));

// Desafio 13
function hydrate(str) {
    /*
    Source: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#sum_of_values_in_an_object_array
    */
    let numbers = str.match(/\d+/g).map(Number);
    let cupsTotal = numbers.reduce((accum, curr) => accum + curr);
    let un = 'copos';
    if (cupsTotal === 1) un = 'copo';

    return `${cupsTotal} ${un} de água`;
}
//console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
