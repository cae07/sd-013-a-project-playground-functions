// Desafio 10
function isEmptyArray(array) {
  let verificator = 0;
  let emptyArray = false;

  for (let value of array) {
    if (value === '') {
      verificator += 1;
    }
  }
  if (verificator === array.length) {
    emptyArray = true;
  }

  return emptyArray;
}

function techList(arrayOfItems, name) {
  arrayOfItems.sort();
  let arrayOfObjects = [];
  let emptyArray = isEmptyArray(arrayOfItems);
  let result;
  if (emptyArray) {
    result = 'Vazio!';
  } else {
    for (let index = 0; index < arrayOfItems.length; index += 1) {
      let listTech = {
        tech: arrayOfItems[index],
        name,
      };
      arrayOfObjects.push(listTech);
    }
    result = arrayOfObjects;
  }

  return result;
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
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
