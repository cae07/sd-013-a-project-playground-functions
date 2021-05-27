// Desafio 10
function techList(listaTecnologia, nome) {
  let lista = [];
  
  listaTecnologia.sort();
  if (listaTecnologia.length !== 0){
    for (let index = 0; index < listaTecnologia.length; index += 1) {
      lista.push(
        {
          tech: listaTecnologia[index],
          name: nome 
        }
      );
    }
    return lista;
  }else {
    return 'Vazio!';
  }

}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineC > (lineA + lineB) || lineA > (lineC + lineB) || lineB > (lineA + lineC)) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(frase) {
  let numerosString = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let contaAgua = 0;

  for (let index = 0; index < frase.length; index += 1) {
    for (let index2 = 0; index2 < frase.length; index2 += 1) {
      if (frase[index] === numerosString[index2]) {
        contaAgua += numeros[index2];
      }
    }
  }

  if (contaAgua > 1) {
    return contaAgua + " copos de água";
  } else {
    return contaAgua + " copo de água";
  }

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
