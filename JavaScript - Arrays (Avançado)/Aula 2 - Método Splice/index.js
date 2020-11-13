//Método splice faz a mesma função que os metodos push,pop,shift,unshift e mais algumas coisas.
let nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(índice atual, quantosElementosApagar, Elemente1, Elemente2, Elemente3);


let removidos = nomes.splice(3, 2); // Aqui removemos a Júlia e Gabriel do índice 3 e 4
let removidosDeTrazPraFrente = nomes.splice(-1, 1)//Aqui removemos o Eduardo usando uma lógica de traz pra frente
console.log(nomes, removidos);
console.log(nomes, removidosDeTrazPraFrente);

let elemento = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let removerTodosApartir = elemento.splice(-5, Number.MAX_VALUE); //Aqui removemos todos posteriores apartir do índice -5
console.log(elemento, removerTodosApartir);

let adicionar = elemento.splice(3, 0, 'Luiz');//Aqui adicionamos a string Luiz no indice 3
console.log(elemento, adicionar);
adicionar = elemento.splice(3, 1, 'Roberta');//Aqui adicionar a Roberta no índice 3 e apagamos o Luiz que esta no índice 3 
console.log(elemento, adicionar);


//"pop"
let pop = elemento.splice(-1, 1);
console.log(elemento, pop);

//"shift"
let shift = elemento.splice(0, 1);
console.log(elemento, shift);

//"push"
let push = elemento.splice(nomes.length, 0, 'Elemento Adicionado');

//"unshift"
let unshift = elemento.splice(0, 0, 'Adicionado no começo')
console.log(elemento, unshift);


