// function iteraNumeros(total){
//     for (let i = 1; i <= total; i++){
//          console.log(i);
//     } 
//  }
//  undefined
//  iteraNumeros(5)
//  VM3048:3 1
//  VM3048:3 2
//  VM3048:3 3
//  VM3048:3 4
//  VM3048:3 5
//  undefined
//  function *iteraGenerator(total){
//     for (let i = 1; i <= total; i++){
//          yield console.log(i);
//     } 
//  }
//  undefined
//  const totalGenerator = iteraGenerator(5);
//  undefined
//  totalGenerator.next()
//  VM3289:3 1
//  {value: undefined, done: false}
//  totalGenerator.next()
//  VM3289:3 2
//  {value: undefined, done: false}
//  totalGenerator.next()
//  VM3289:3 3
//  {value: undefined, done: false}
//  totalGenerator.next()
//  VM3289:3 4
//  {value: undefined, done: false}
//  totalGenerator.next()
//  VM3289:3 5
//  {value: undefined, done: false}




// function *iteraGenerator(total){
//     const nome = 'marcos';
//     nome = nome.toUpperCase();
//     yield nome;
//     for (let i = 1; i <= total; i++){
//          yield i; 
//     }
// }



// function *iteraGenerator(total){
//     for (let i = 1; i <= total; ++i){
//          yield i;
//     }    
// }  
// undefined
// const totalGenerator = iteraGenerator(5);
// undefined
// console.log(totalGenerator.next().value)
// VM4591:1 1
// undefined
// console.log(totalGenerator.next().value)
// VM4596:1 2
// undefined
// console.log(totalGenerator.next().value)
// VM4601:1 3
// undefined
// console.log(totalGenerator.next().value)
// VM4606:1 4
// undefined
// console.log(totalGenerator.next().value)
// VM4611:1 5
// undefined
// totalGenerator.next().value
// undefined
// totalGenerator.next().value
// undefined