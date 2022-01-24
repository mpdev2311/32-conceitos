//var x = 10; // 0001 = nome é x, e o valor é 10
//var y = x;
//x = 20;

//console.log(x, y);

var x = { valor: 10 };
var y = x;
x.valor = 20;
y.valor = 40;

/*
local men. 0002 = {valor 10};
variavel x = men. 0002;
variavel y = x; men. 0002;
*/

console.log(x);
console.log(y); 