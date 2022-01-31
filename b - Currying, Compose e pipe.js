// CURRYING
// const dragao = (nome, tamanho, elemento) => {
//   return `${nome} é um dragao ${tamanho} e cospe ${elemento}!`;
// } 

// console.log(dragao('mushu', 'pequeno', 'fogo'));
const dragao = (nome) => (tamanho) => (elemento) => {
    return `${nome} é um dragao ${tamanho} e cospe ${elemento}!`;
  }
  // console.log(dragao('musho')('pequeno')('fogo'));
  
  const mushu = dragao('mushu');
  // console.log(mushu('grande')('gelo'));
  // console.log(mushu('pequeno')('fogo'));
  
  const mushuPequeno = mushu('pequeno');
  // console.log(mushuPequeno('fogo'));
  
  // COMPOSE
  const incrementar = x => x +1;
  const dobrar = x => x *2;
  // const valor = incrementar(3);
  // const resultado = dobrar(valor);
  // console.log(resultado);
  const valor = 3;
  //const resultado = dobrar(incrementar(valor));
  //  console.log(resultado);
  
  // PIPE
  
  const pipe = (inc, dob) => (args) => dob(inc(args));
  const incrementaEDobra = pipe(incrementar, dobrar);
  const resultado = incrementaEDobra(3);
  console.log(resultado);