// Desafio 10
function techList(tecArray, name) {
  tecArray.sort();
  let arrayFinal = [];
  if (tecArray.length !== 0) {
    for (let index = 0; index < tecArray.length; index += 1) {
      arrayFinal[index] = {
        tech: tecArray[index],
        name,
      };
    }
  } else {
    arrayFinal = 'Vazio!';
  }
  return arrayFinal;
}

// Desafio 11
function generatePhoneNumber(number) {
//   let res;
//   if (testQuantity(number) || checkZero(number)) {
//     return res = '(' + number[0] + number[1] + ') ' + number[2] + number[3] + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + number[9] + number[10];
//   }
//   return "não é possível gerar um número de telefone com esses valores"
// }

  // function testSize(number) {
  //   let teste = 0;
  //   for (let index = 0; index < number.length; index += 1) {
  //     if (number[index] > 9 || number[index] < 0) {
  //     teste += 1;
  //     }
  //   }
  //   if (teste > 0) {
  //     return false;
  //   }
  //   return true
  // }
  // function testQuantity(number) {
  //   let count = 0;
  //   let compare = 0;
  //   if (number[0] > number[1]) {
  //     compare = number[0];
  //   } else {
  //     compare = number[1];
  //   }
  //   for (let index = 2; index < number.length; index += 1) {
  //     if (number[index] > compare) {
  //       compare = number[index];
  //     }
  //   }
  //   for (let index = 0; index < number.length; index += 1) {
  //     if (number[index] === compare) {
  //       count += 1;
  //     }
  //   }
  //   if (count > 2) {
  //     return false;
  //   } return true;
  // }

// function checkZero(number) {
//   let teste = 0;
//   for (let index = 0; index < number.length; index += 1) {
//     if (number[index] < 0 || number[index] > 0) {
//       teste += 1;
//     }
//   }
//   if (teste > 0) {
//     return false;
//   } return true;
}

// Desafio 12
let lineA = 10;
let lineB = 10;
let lineC = 10;
// function triangleCheck(lineA, lineB, lineC) {
//   if (checkSide() && checkAbsolut()) {
//     return true;
//   } return false;
// }
// function checkAbsolut(lineA, lineB, lineC) {
//   let ab = Math.abs(lineA-lineB);
//   let bc = Math.abs(lineB-lineC);
//   let ca = Math.abs(lineC-lineA);
//   if (lineA > bc && lineB > ca && lineC > ab) {
//     return true;
//   } return false;
// }

function checkSide(lineA, lineB, lineC) {
  if ((lineA + lineB) > lineC && (lineC + lineA) > lineB && (lineB + lineC) > lineA) {
    return true;
  }
  return false;
}

console.log(checkSide());
// Desafio 13
function hydrate(texto) {
  let array = texto.match(/\d+/g);
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += parseInt(array[index]);
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
