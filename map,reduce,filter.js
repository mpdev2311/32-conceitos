dados = [{ nome: 'caramelo', idade: 3, tipo: 'cachorro'},
     { nome: 'Rex', idade: 6, tipo: 'cachorro'},
     { nome: 'Bolota', idade: 1, tipo: 'gato'},
     { nome: 'thor', idade: 3, tipo: 'cachorro'}];

const cachorro = dados.filter((dado, index) => dado. tipo === 'cachorro');
const idadeReal = cachorro.map((cachorro) => ({nome: cachorro.nome, idade: cachorro.idade * 7}));
const totalIdades = idadeReal.reduce((soma = 0, dado) => {
  return soma + dado.idade;
}, 0);

const idade = dados.filter((dado, index) => dado. tipo === 'cachorro')
.map((cachorro) => ({nome: cachorro.nome, idade: cachorro.idade * 7}))
.reduce((soma = 0, dado) => {
  return soma + dado.idade;
}, 0);

console.log(idade)