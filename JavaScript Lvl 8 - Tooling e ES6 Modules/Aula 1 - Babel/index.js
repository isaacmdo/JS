//Para instalar o webpack e utiliar o babel, assim podendo converter os codigos javascripts
//Para navegadores antigos reconhecerem sem erros, utilizamos os seguintes passos no terminal

//npm init -y  <- Para criar o arquivo packege.json

//npm install --save-dev  @babel/cli @babel/preset-env @babel/core  <- cria a pasta node_modules com todas as dependencias do projeto

const nome = 'Luiz';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);

//npx babel index.js -o bundle.js --presets=@babel/env  <- Para criar o aquivo bundle.js com o codigo convertido

//Agr terá que anexar o script no html (bundle.js)

/* "scripts": {
  "babel": "babel .index.js -o ./bundle.js --presets=@babel/env -w"
}, */

//Com essa configuracao no arquivo packege.json podemos executar o comando npm run babel  (Este comando vai recompilar o codigo toda ver que o arquivo index.js sofrer um alteracaoss)