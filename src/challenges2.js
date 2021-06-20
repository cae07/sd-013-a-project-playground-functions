// Desafio 10
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // seu código aqui
  function techList(tecnologias, name) {
    if (tecnologias.length === 0) {
      return 'Vazio!';
    }
  
    let tecnologia = [];
    tecnologias.sort();
  
    for (let valor = 0; valor < tecnologias.length; valor += 1) {
      tecnologia.push({
        tech: tecnologias[valor],
        name,
      });
    }
    return tecnologia;
}

// Desafio 11
function generatePhoneNumber(numero) {
  
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
// https://www.youtube.com/watch?v=oSjv2oehaGc
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
// https://stackoverflow.com/questions/5946278/javascript-extracting-the-digits-from-different-positions-from-a-string
function hydrate(texto) {
  let array = texto.match(/\d+/g);
  let sum = 0;
  for(let index = 0; index < array.length; index += 1) {
    sum = sum + parseInt(array[index]);
  }
  if(sum > 1){
    return sum + ' copos de água';
  } else {
  return sum + ' copo de água';
  }
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
