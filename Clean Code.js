// // VARIAVEIS
// var c = 0; // ruim
// var tempo = 15; // ruin
// var chamadasRealizadasParaApi = 0; // bom
// var tempoParaAguardarRespostas = 15; // bom
// var tmpParaAguardRespInt = 15; // ruin
// const CHAMADAS_REALIZADA_PARA_API = 0; // bom

// // FUNÇÔES
// function atualizaUsuarioLocal(id) { // ruim
// http.get('url?id=' +id).then(dadosDoUsuario => {
//   this.usuario = dadosDoUsuario;
//  });
// }

// async function buscaUsuarioPorId(id) { // bom
//   return await http.get('url?id=' +id);
// }
// this.usuario - atualizaUsuarioLocal(1);

// this.usuario = tualizaUsuarioLocal({
//   nome: 'marcos', idade: 37, telefone: '11999999999', endereço 'casa' 
// ;})
// /*
// atualiza o usuario local apartir dos dados recebidos por argumento
// params usuario dados do usuario
// */
// tualizausuarioLocal(usuario) {
//   usuaripo.nome, usuario.telefone;  
// }
// // OBJETOS
// function criarUsuario(nome) {
//   this.nome = (nome);
//   grtNome = () => this.nome;
//   setNome = () => this.nome = nome;
  
//   return {getNome, setNome};
// }
// const marcos = criarUsuario('marcos')

// // CLASSES
// class Utilitarios {
//   constructor() {
//     this.texto = '';
//   }
  
// getTexto = () => this.texto;
// setTexto = (texto) => {
//   this.texto = texto;
//   return this;
// }

// maiusculo = () => {
//   this.texto = this.texto.toUpperCanse();
//   return this;
// }

// reverter = () => {
//   this.texto = this.testo.split('').reverse().join();
//   return this;
//  }
// }

// const _utilitarios = new utilitarios();
// let texsto = _utilitarios.setTexto('marcos').reverter().maiusculo().getTexto(); 