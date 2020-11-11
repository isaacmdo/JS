                // 0      1        2
const alunos = ['Luiz', 'Maria', 'Joao'];
//Um array pode ter varios tipos de dados, porem e uma boa pratica ter apenas 1 tipo de elemento por array
alunos[0] = 'Eduardo'; //Modificando um indice
alunos[3] = 'Luiza'; //Adicionando um indice
console.log(alunos.length);//Para descobrir o tamanho de um array
alunos[alunos.length] = 'Carlos' //Outra forma de adicionar um elemento no final do array
alunos.push('Fabio'); //Uma forma mais simples para adicionar um elemento no final do array
alunos.unshift('Pedro') //Para adicionar um elemento no começo do array, modificando todos os indices dos elementos anteriores
alunos.pop(); //Remover o ultimo elemento modificando os indices
alunos.shift(); //Remover o primeiro elemento modificando os indices
delete alunos[1]; //Remover um elemento sem mexer no indice adicionando um elemento vazio no lugar

alunos.slice(0, 2); //"Fatiar" um array
//Array em js e considerado um object em typeof()
console.log(alunos instanceof Array);//Para verificar se realmente e um array

