// Desafio 10
function techList(techList, name) {

  if(typeof techList != "undefined" && techList != null && techList.length != null && techList.length > 0){

    let namedTechList = [];

    for(item of techList){
      let techItem = {
        tech:item,
        name:name,
      };
      namedTechList.push(techItem);
    }
    //ordenar a lista se tiver mais de 1 elemento
    if (namedTechList.length > 1){
      

      for(let i=0; i < namedTechList.length; i++){
          
        let menor = namedTechList[i];
          
        for (let j=i+1; j<namedTechList.length; j++){

          if( (menor.tech.localeCompare(namedTechList[j].tech)) == 1 ){
            menor = namedTechList[j];
            namedTechList[j] = namedTechList[i];
            namedTechList[i] = menor;

          }
         

        }

      }
      console.log("orderedlist",namedTechList);
      return namedTechList;
    }  
    return namedTechList;

  }

  return "Vazio!";
}

// Desafio 11
function generatePhoneNumber(numArray) {
  if(numArray.length != 11){
    return " Array com tamanho incorreto.";
  }
  let quadruplicateArrayControl = [0,0,0,0,0,0,0,0,0,0];



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
