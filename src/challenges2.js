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
function triangleCheck(lA,lB,lC) {
  let result;
  if ( lA > lB+lC){
    result = false;
    return result;
  }
  else if (lA <  Math.abs(lB-lC)){
    result = false;
    return result;
  } 
  else if(lC > lA+lB){
    result = false;
    return result;
  }
  else if (lC <  Math.abs(lB-lA)){
    result = false;
    return result;
  } 
  else if(lB > lA+lC){
    result = false;
    return result;
  }
  else if (lB <  Math.abs(lA-lC)){
    result = false;
    return result;
  } 
  else {
    result = true;
    return result;
  }
  
}



// Desafio 13
function hydrate(string) {
  let reg = /\d+/g;
  let result = string.match(reg);
  let soma=0;
  for (let index = 0; index < result.length; index+=1) {
    soma+= parseInt(result[index]);
  } 
   let msg;
  if (soma == 1){
     msg = (soma + " "+ "copo de água");
  }
  else{
     msg = (soma + " "+ "copos de água");
  }
  return msg;
}
console.log(hydrate("1"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
