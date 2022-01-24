// first in first out = FIFO = O primeiro que entrou é o primeiro a sair 
// last in first out = LIFO = Oultimo que entra é o primeiro que sair

function função1() {
    função2();
    console.log('executou função 1');
}
function função2() {
    função3();
    console.log('executou função 2');
}
function função3() {    
    console.log('executou função 3');
}

função1();