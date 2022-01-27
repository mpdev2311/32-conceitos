const alvo = {a: 1, b: 2 };
const dados = { b: 5, c: 4 };
// const resultado = Object.assign(alvo, dados);
// resultado.a = 'a';
// console.log(resultado);
// console.log(alvo);

const obj1 = {a: 1, b: 2 };
const obj2 = {c: 3, d: 4 };
const resultado = Object.assign({}, obj1, obj2);
console.log(resultado);