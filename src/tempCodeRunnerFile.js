function footballPoints(wins, ties) {
 
  resultado = (wins * 3) + (ties * 1);

  return resultado;
}
console.log(footballPoints(14, 8));