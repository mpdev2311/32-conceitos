class Animal {
  constructor(pes) {
    this.pes = pes;
  }  
  
quantidadePes() {
  console.log('eu tenho' + this.pes + 'pes/patas');
  }

}

class Mamifero extends Animal  {
  constructor(nome, som, pes) {
    super(pes);
    this.nome = nome;
    this.som = som;
  }
  
  emitirSom() {
    console.log('Esse animal faz' + this.som);
  }  
}

const cachorro = new Mamifero('cachorro', 'auau', 4);

cachorro.emitirSom();
cachorro.quantidadePes();