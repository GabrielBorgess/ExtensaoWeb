function palavrasDistintas(string) {
    const palavras = string.split(' ');
      const palavrasDistintasSet = new Set(palavras);
      const palavrasDistintasArray = Array.from(palavrasDistintasSet);
  
    return palavrasDistintasArray;
  }

  console.log(palavrasDistintas('Eu gosto de programação web'));