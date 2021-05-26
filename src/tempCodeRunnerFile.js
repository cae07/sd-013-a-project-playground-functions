function footballPoints(wins, ties) {
  // seu código aqui
  resultado = (wins * 14) + (ties * 8);

  return resultado;
}
console.log(footballPoints(3, 1));