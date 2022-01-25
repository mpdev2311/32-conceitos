// == e ==

// ==

console.log(3 == '3')

// 1° Se ambos são do mesmo tipo
// null == undefined, se for, for ele retorna true
// Number == string, se for, ele vai converter a string em numero
// boolean == Number, se for, ele converte o boolean num numero
// boolean == string, se for, ele converte a string pra boolean
// objeto == primitivo, se for, ele converte o objeto numa string 

// ===
console.log(3 === '3')
console.log(3 === 3)

// É necessario que os valores e os tipos sejam iguais para ser true.

// typeof 
// é otimo para validação de tipos 

console.log(typeof 'gabriel' === 'string');