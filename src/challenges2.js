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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
