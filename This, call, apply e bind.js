// const dados = { nome: 'Marcos'};
// const saudação = function (idade) {
//   console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
// };
// saudação.call(dados, 37);

// const dados = { nome: 'Marcos'};
// const argumentos = [37];
// const saudação = function (idade) {
//   console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
// };
// saudação.apply(dados, argumentos);

const dados = { nome: 'Marcos'};
const saudação = function (idade) {
  console.log(`Bem vindo ${this.nome}, sua idade é ${idade}`);
};
const bound = saudação.bind(dados);
bound(37);