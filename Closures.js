var nome  ='Marcos';
function oláPessoa(){
  console.log('Olá Marcos', + nome);
  
}
nome = 'Paulo';
oláPessoa();

function buscaItem() {
  var numeroItem = 150;
  fetch('/minha/Url/do/banco?item=' + numeroItem, {
    method: 'Get'
  }).then(resultado => {
    console.log('busca pelo item' + numeroItem + 'deu certo!');
  });
};