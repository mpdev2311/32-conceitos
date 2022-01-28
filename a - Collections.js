const alfabeto = new Set(['a', 'b', 'c', 'd']);
undefined
alfabeto
Set(4) {'a', 'b', 'c', 'd'}
alfabeto.add('a')
Set(4) {'a', 'b', 'c', 'd'}
alfabeto.has('a')
true
alfabeto[0]
undefined
alfabeto.add('e')
Set(5) {'a', 'b', 'c', 'd', 'e'}
alfabeto.delete('a')
true
alfabeto
Set(4) {'b', 'c', 'd', 'e'}
let dados = [1,2,3,3,4,4,5]
undefined
const numeros = new Set(dados)
undefined
numeros
Set(5) {1, 2, 3, 4, 5}
dados = Array.from(numeros)
(5) [1, 2, 3, 4, 5]

const dados = new Map([['nome', 'marcos'], ['idade', 37]]);
undefined
dados
Map(2) {'nome' => 'marcos', 'idade' => 37}
dados.set('estado', 'Brasilia-df');
Map(3) {'nome' => 'marcos', 'idade' => 37, 'estado' => 'Brasilia-df'}
dados.get('nome')
'marcos'
dados.forEach((dado, chave) => console.log(dado, chave))
VM1770:1 marcos nome
VM1770:1 37 'idade'
VM1770:1 Brasilia-df estado