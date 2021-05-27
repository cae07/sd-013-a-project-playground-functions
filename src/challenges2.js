// Desafio 10 - função de Lista de Tecnologias ORDENADA

// função comparar para ordenar array
function comparar(a, b) {
  if(a.tech < b.tech) {
    return -1;
  } else {
    return true;
}
}

function techList(array, name) {
  let objectList = [];

    for (let index = 0; index < array.length; index++) {
      objectList.push({
      tech: array[index],
      name: name,
      }) 
    }
    // return objectList.sort(comparar);} //ordena os itens do array
  
    if(objectList.length !== 0){
    return objectList.sort(comparar);
    } else if (objectList.length === 0){
    return 'Vazio!'}
}

// Desafio 11 - função de Número de Telefone
function generatePhoneNumber(array) {
//VERIFICA OS PARAMETROS DE VALIDACAO  
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  } 
  for (let index = 0; index < array.length; index += 1){
    if ((array[index] < 0) || (array[index] > 9)) {
    return "não é possível gerar um número de telefone com esses valores";
    }
  }
  for (let index = 0; index < array.length; index += 1){
  let nRepeat = 0;
  for (let index2 = 0; index2 < array.length; index2 += 1){
          if (array[index] === array[index2]){
            nRepeat += 1;
          }
        }
  if (nRepeat >= 3){
        return "não é possível gerar um número de telefone com esses valores";
    }
  }
//INSERE A MASCARA
let ddd = array.slice(0,2);
let dddok = ddd.join('');
let telBloco1 = array.slice(2,7);
let telBloco1ok = telBloco1.join('');
let telBloco2 = array.slice(7,12);
let telBloco2ok = telBloco2.join('');
return '(' + dddok + ')' + ' ' + telBloco1ok + '-' + telBloco2ok;
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
