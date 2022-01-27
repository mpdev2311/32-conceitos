// let Usuario = function(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }
// const marcos = new Usuario('marcos' , 37);
// const novoMarcos = Object.create(marcos);
// console.log(novoMarcos instanceof Usuario);
// console.log( novoMarcos.nome);

function Carro(cor) {
    this.cor = cor;
    this.descriçao = descriçao;
  }
  Carro.prototype.pegaInformaçoes = function() {
    return this.descriçao + 'e a cor' + this.cor;
  }
  
  let meuCarro = Object.create(Carro.prototype);
  meuCarro.cor = 'azul';
  // console.log(meuCarro.pegaInformaçoes());
  
  const novoCarro = Object.create(Carro, {
    cor: {
      writable: true, configurable: true, value: 'vermelho'
    },
    descriçaoPadrao: { writable: false, configurable: true, value: 'Meu carro'},
    descriçao: {
    configurable: true,
      get: function() {
        return this.descriçaoPadrao.toUpperCase(); 
     }, 
     set: function(valor) {
       this.descriçaoPadrao = valor.tolowerCase();
     }
    }
  }); 
  
  novoCarro.descriçaoPadrao = 'nova descriçao'
  console.log(novoCarro.descriçao);
                                   