// Desafio 10
function techList(techListCode, name){
  let techListName = [];
  for(let listTechnology of techListCode.sort()){
    techListName.push(
      {
      tech: listTechnology,
      name: name
      });
  }
   if(techListCode.length > 0){
    return techListName;
  } else return  'Vazio!';
};

//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Matheus'));
// .sort() ordena os elementos do próprio array e retorna o array.

// Desafio 11
function generatePhoneNumber(){
}



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let a = checkA(lineA, lineB, lineC);
  let b = checkB(lineA, lineB, lineC);
  let c = checkC(lineA, lineB, lineC);
  return a && b && c;



  function checkA(lineA, lineB, lineC){
   let fullTriangle = Math.abs(lineA, lineB, lineC) || Math.abs(lineB, lineC, lineA) || Math.abs(lineC, lineA, lineB)
  if(fullTriangle){
    return true;
  }
    return false;
  }
};
  function checkB(lineA, lineB, lineC){
  if(lineB > lineC + lineA || lineB < Math.abs(lineC - lineA)){
    return false;
  }
  return true;
  };
  function checkC(lineA, lineB, lineC){
    if(lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)){
      return false;
    }
    return true;
  };

  //console.log(10, 14, 8);

// Desafio 13
function hydrate(stringIce) {
  let contador = 0;
  //let bar = 0; //'1 cachaça, 5 cervejas e 1 copos de vinhos'
  let waterOn = stringIce.match(/\d+/g); // d de digito e o + para pegar mais de um
  for (index = 0; index < waterOn.length; index += 1){
    let bar = parseInt(waterOn[index]);
    contador += bar;

  }
  if(contador === 1){
    return contador + " copo de água"
  } else return contador + " copos de água"
};

//console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

// .match() retorna uma correspondência entre uma string com uma expressão regular, montar só com os números da string com números em formato de string.
// .parseInt() analisa um argumento string e retorna um inteiro na base especificada, para transformar os números em formato de string em números

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
