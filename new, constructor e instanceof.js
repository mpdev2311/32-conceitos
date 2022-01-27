function Usuario(nome) {
    // this = {};
    this.nome = (nome);
    this.log = function(){
      console.log(this);
    }
    // return this;
  }
  
  const marcos = new Usuario('Marcos');
  // console.log(marcos);
  console.log(marcos instanceof String);