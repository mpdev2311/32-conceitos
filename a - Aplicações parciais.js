function lista(juncao, ...itens) {
    const separadoPorVirgula = itens.slice(0, -1). join(',');
    const ultimoItem = itens.pop();
    return `${separadoPorVirgula} ${juncao} ${ultimoItem}`;
  }
  
  // function parcial(funçao, juncao) {
  //   return(... itens) => {
  //     return funçao(juncao, ...itens);
  //   }
  // }
  const parcial = (funcao, juncao) => (... itens) => funcao(juncao, ...itens);
  
  const listaE = parcial(lista, 'e');
  const listaOU = parcial(lista, 'ou');
  const listaTalvez = parcial(lista, 'talvez');
  
  console.log(listaE('azul', 'amarelo', 'verde'));
  console.log(listaOU('azul', 'amarelo', 'verde'));
  console.log(listaTalvez('azul', 'amarelo', 'verde'));
  
  //console.log(lista('ou', 'azul', 'vermelho', 'verde'));