let mamaeLembrou = true;
undefined
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
undefined
async function vamosParaAloja(){
   try {
       const mamaeLembrou = await passarParaComprarBrinquedo; 
       const mensagem = await sairParaBrincar(mamaeLembrou);
       console.log(mensagem);
   } catch (naoLembrou){
       const mensagem = await sairParaBrincar(naoLembrou);
       console.log(mensagem)
   }
}
undefined
vamosParaAloja()
VM5455:5 vou sair para brincar
Promise {<fulfilled>: undefined}[[Prototype]]: Promisecatch: ƒ catch()constructor: ƒ Promise()finally: ƒ finally()then: ƒ then()Symbol(Symbol.toStringTag): "Promise"[[Prototype]]: Object[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
mamaeLembrou = true;
true
vamosParaAloja();
VM5455:5 vou sair para brincar
Promise {<fulfilled>: undefined}[[Prototype]]: Promisecatch: ƒ catch()constructor: ƒ Promise()finally: ƒ finally()then: ƒ then()Symbol(Symbol.toStringTag): "Promise"[[Prototype]]: Object[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
async function vamosParaAloja(){
   try {
       const mamaeLembrou = await passarParaComprarBrinquedo; 
       const mensagem = await sairParaBrincar(mamaeLembrou);
       console.log(mensagem);
   } catch (naoLembrou){
       const mensagem = await sairParaBrincar(naoLembrou);
       console.log(mensagem)
   }
}
undefined
async function vamosParaAloja(){
   try {
       const mamaeLembrou = await passarParaComprarBrinquedo;
       const mensagem = await sairParaBrincar(mamaeLembrou);
       console.log(mensagem);
       return 'deu certo';
   } catch (naoLembrou){
       const mensagem = await sairParaBrincar(naoLembrou);
       console.log(mensagem)
   }
}

undefined

vamosParaAloja().then(resultado => console.log(resultado))
VM6109:5 vou sair para brincar
VM6496:1 deu certo
Promise {<fulfilled>: undefined}
vamosParaAloja().then(resultado => console.log(resultado)).catch(() =>{})