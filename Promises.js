const mamaeLembrou = true;

const passarParaComprarBrinquedo = new Promise((resolve, reject) => {
  if (mamaeLembrou) {
    resolve(true);
  }else {
    reject(false);
  }
});

const sairParaBrincar = (resultado) => {
  return new Promise((resolve) => {
    if (resultado) {
      resolve('vou sair para brincar');
    } else {
      resolve('nao sair para brincar');
    }
  })
}

// passarParaComprarBrinquedo.then(lembrou => {
//   console.log('lembrou');
// }).catch(naolembrou => {
//   console.log('nao lembrou');
// })
console.log('indo para a loja');
passarParaComprarBrinquedo
  .then(sairParaBrincar)
  .catch(sairParaBrincar)
  .then(resultado => {
        console.log(resultado)
        promesa2.then(() => {
          promesa3.then(() => {
            
          })
        })
        });
console.log('voltei da loja');