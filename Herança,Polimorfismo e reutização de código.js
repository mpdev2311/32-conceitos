class forma {
    desenhar() {
      console.log('Eu sou uma forma');
    }
  }
  
  class triangulo extends forma{}
  
  class Circulo extends forma {
    desenhar() {
      console.log('Eu sou um Circulo');
    }
  }
  
  const formas = [new forma(), new triangulo(), new Circulo];
  
  formas.forEach(forma => forma.desenhar());