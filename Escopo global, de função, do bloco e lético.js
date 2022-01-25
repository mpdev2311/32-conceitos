// var, let e const

// LEXICO

// var nome = ('Gabriel')
// function teste() {  
//  function teste2() {
//  var variavel = 'meu nome';
//   }
// }
// teste();

// GLOBAL
// var a = 0 ;
// function alterar() {
//   a = 10;  
// }
// console.log(a);
// alterar();
// console.log(a);

// FUNÇÂO
// igual o escopo lexico, o que é criado dentro da fonção
// não esta disponivel fora dela

// BLOCO
//function bloco() {
//  var teste;
//  if (true) {
//    teste = 'teste';
//    var teste2 = 'teste2';
//  } 
//  console.log('teste', teste); 
//  console.log('teste2', teste2); 
// }
// bloco()

//HOISTING
function bloco() {
    var teste; 
     var teste2
    if (true) {
      teste = 'teste';
      teste2 = 'teste2';
    } 
    console.log('teste', teste); 
    console.log('teste2', teste2); 
   }
   bloco()