// Desafio 10
function techList() {
  msg = "Vazio!"

  if (myArray.length == 0) {
    return msg;    
  } else {

    let ordem = myArray.sort();
    let newArray = [];
    let obj;
  
    for (let i = 0; i < ordem.length; i += 1) {
      obj = {
      tech: ordem[i],
      name: name
      };
      newArray.push(obj)
     };
    return newArray;
  }
}
