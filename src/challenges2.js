// Desafio 10
function techList(list=[],name) {
  let newLis=[];
  let vazio="Vazio!";
  if (list.length==0){
    return vazio;
  }
  else{
    for (let index = 0; index < list.length; index+=1) {
      let objetic = {
        tec : list[index],
        nome : name,
      }
    for (let a in newLis){

    }
      newLis[index]= objetic;    
    }
    
    return newLis;
  }
        
}


// Desafio 11
function generatePhoneNumber(tel=[]) {
  let msg="";
  let aux=[];  
  
  if (tel.length != 11){
    msg="Array com tamanho incorreto.";
    return msg;
  }
  else{
    for (let index1 = 0; index1 < 10; index1+=1) {
      aux[index1]= index1;
      let cont = 0;
      for (let index = 0; index < tel.length; index+=1) {
        if (tel[index] < 0 || tel[index] >9){
          msg = "não é possível gerar um número de telefone com esses valores";
          return msg;
          break;
        }
        if (aux[index1] == tel[index]){
          cont+=1;   
        }
        if (cont == 3){
          msg = "não é possível gerar um número de telefone com esses valores";
          return msg;
          break;
        }          
      }     
    }  
    for (let index = 0; index < tel.length; index+=1) {
      if (index == 0){
      msg=msg + "(" + tel[index] ;
      }
      else if (index == 1){
        msg=msg + tel[index] + ")" + " ";
      }
      else if(index == 7){
        msg=msg + "-" + tel[index];
      }
      else{
        msg=msg + tel[index];
      }           
    }     
    return msg;   
  }   
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
