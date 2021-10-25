// Desafio 10
function techList(tech, name) {
  let objeto = [];
  tech.sort();
  // objeto.name = name
  // console.log(tech.length)
  for (let i = 0; i < tech.length; i += 1) {
    let newObject = {
      name,
      tech: tech[i],
    };
    objeto.push(newObject);
  }
  if (tech.length === 0) {
    return 'Vazio!';
  }

  return objeto;

  // seu código aqui
}
// Desafio 11
function generatePhoneNumber(arrayFone) {
  let foneValido = true;
  let contadorNumero = 0;
  let contadorFone = false;

  if (arrayFone.length != 11) {
    foneValido = false;
    return 'Array com tamanho incorreto.';
  }

  if (arrayFone.length === 11) {

    
    for (let i = 0; i < arrayFone.length; i += 1) {

      if ((arrayFone[i] < 0) || (arrayFone[i] > 9)) {
        console.log(arrayFone[i]);
        foneValido = false;
        return 'não é possível gerar um número de telefone com esses valores';
      }
      
      for (let j = 0; j < arrayFone.length; j += 1) {
        if (arrayFone[i] === arrayFone[j]) {
          contadorNumero += 1;
          if (contadorNumero > 2) {
            foneValido = false;
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
      contadorNumero = 0;
      
      if (foneValido === true) {
        return `(${arrayFone[0]}${arrayFone[1]}) ${arrayFone[2]}${arrayFone[3]}${arrayFone[4]}${arrayFone[5]}${arrayFone[6]}-${arrayFone[7]}${arrayFone[8]}${arrayFone[9]}${arrayFone[10]}`;
      }
    }
  }
  }
  
  // seu código aqui
  
  // Desafio 12
  function triangleCheck(lineA, lineB, lineC) {
    let retorno = false;
    if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
      retorno = true;
    }
    return retorno;
    // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let quantidade = /\d+/g;
  let agua = string.match(quantidade);
  parseInt(string, agua);
  let soma = 0;

  for (let i = 0; i < agua.length; i += 1) {
    soma += parseInt(agua[i]);
  }
  if (soma < 2) {
    return '1 copo de água';
  }

  return `${soma} copos de água`;

  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
