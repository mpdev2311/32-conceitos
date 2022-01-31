class Subject {
    constructor() {
      this.observadores = [];
    }
    
  assinarObservavel(observador) {
    this.observadores.push(observador);
   }
    
    notificarObservador(observador){
     const index = this.observadores.indexOf(observador);
      if (index > -1) {
        this.observadores[index].notificar(index);
      } else {
        console.log('Esse observador nao existe');  
      }
    }
    
    notificarTodosObservadores(){
      this.observadores.forEach((observador, index) => observador.notficar(index));
    }
  }
  
  class observer {
    notificar(index) {
      console.log(`observador ${index} foi notificado!`);
    }
  }
  
  const subject = new Subject();
  const observador0 = new observer();
  const observador1 = new observer();
  const observador2 = new observer();
  const observador3 = new observer();
  
  subject.assinarObservavel(observador0);
  subject.assinarObservavel(observador1);
  subject.assinarObservavel(observador2);
  subject.assinarObservavel(observador3);
  
  subject.notificarObservador(observador1);
  subject.notificarObservador(observador0);
  subject.notificarObservador(observador1);
  subject.notificarObservador(observador2);
  subject.notificarObservador(observador3);



  const impressora = (function(){
    let  instanciaDaImpressora;
    
    function criar(){
      function imprimir(){
        console.log('imprimindo documento');
      }
      function ligar(){
        console.log('ligando impressora');
      }
      return {imprimir, ligar};
    }
    return {
      pegarInstancia: function() {
        if (!instanciaDaImpressora) {
          instanciaDaImpressora = criar();
        }
        return instanciaDaImpressora;
      }
    }
  })();
  
  const impressoraDaEmpresa1 = impressora.pegarInstancia();
  const impressoraDaEmpresa2 =  impressora.pegarInstancia();
  impressoraDaEmpresa1.ligar();
  console.log(impressoraDaEmpresa1);
  console.log(impressoraDaEmpresa1 === impressoraDaEmpresa2);