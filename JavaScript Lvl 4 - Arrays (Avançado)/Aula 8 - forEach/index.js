let a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//Com for of
for(let valor of a1){
  console.log(valor);
};

//Com forEach
a1.forEach(function(valor, indice, array){
  console.log(valor, indice, array);
});

