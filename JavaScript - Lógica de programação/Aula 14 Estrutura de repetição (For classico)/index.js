for(let i = 0; i <= 5; i++){
  console.log(i);
};


for(let i = 0; i <= 500; i += 10){
  console.log(i);
};

for(let i = 500; i >= 400; i += 10){
  console.log(i);
};

for(let i = 0; i <= 5; i++){
  const par = i % 2 === 0 ? 'par' : 'ímpar';
  console.log(i, par);
};

const frutas = ['Maçã', 'Pera', 'Uva']

for(let i = 0; i < frutas.length; i++){
  console.log(`índice ${i}`, frutas[i]);
};
