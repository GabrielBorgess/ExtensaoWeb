function separar() {
  const userNumber = prompt("Digite 5 números separados por vírgula:").split(',').map(parseFloat);
  const numbeer = numeros.filter((userNumber) => !isNaN(userNumber));

  if (numbeer.length === 5) {
    console.log("Números inseridos: ", numbeer.join(', '));
  } else {
    const numerosNaoNumericos = numeros.length - numbeer.length;
    if (numerosNaoNumericos > 0) {
      console.log("erro");
    }

    receberCincoNumeros();
  }
}
receberCincoNumeros();