// function alerta() {
//  alert('olá mundo');
// }

//const alerta = function () {
  //alert('olá mundo');
// }


//alerta()

// !function() {
//  alert('olá mundo');
// }();

// (function() {
//  alert('olá');
// }());

// !function teste() {
//  alert('olá mundo');
// }();

// var variavel = 20;

// !function teste() {
//   variavel = 30;
// }();
 
// console.log(variavel);

var dados = (function(){
    var contador = 0;
    return {
      incrementar: function() {
        contador = contador + 1;
        return contador;
      }
    }
  }());
  
  console.log(dados.incrementar());
  console.log(dados.contador);