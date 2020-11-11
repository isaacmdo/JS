let varA = 'A';
let varB = 'B';
let varC = 'C';

varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);
