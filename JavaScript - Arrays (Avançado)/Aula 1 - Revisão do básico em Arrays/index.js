//Valor por referencia

const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes;
const novoCopia = [...nomes]


const removido = novo.pop();
console.log(nomes);
console.log(nomes);
console.log(nomes.length)//Verifica a quantidade de elementos
//Aqui temos novo apontando para o mesmo endereço de memoria de nomes
//novoCopia apenas copia os elementos do array fazendo um spread com o rest operador