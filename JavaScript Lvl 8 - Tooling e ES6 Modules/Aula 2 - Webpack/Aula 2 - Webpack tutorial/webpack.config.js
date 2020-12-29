const path = require('path'); // CommonJS

module.exports = {
  mode: 'production', //Tipo de modo de produção
  entry: './src/index.js', //Aqui criamos o arquivo de entrada seguindo essa estrutura
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'), //Utilizamos o path para resolver o caminho de saida do diretorio independente do sistema operacional
    filename: 'bundle.js' //Este será o nome do arquivo que tera todas as modificações do webpack
  },
  module: {
    rules: [{ //Em rules definimos as regras do modulo
      exclude: /node_modules/, //Está regra impedira que o webpack analise a pasta do node_modules
      test: /\.js$/, //Aqui definimos o tipo do arquivo que o webpack analisará apara adicionar ao bundle.js
      use: { //Aqui definimos o que o modulo vai usar
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        } //babel-loader e @babel/env que adicionamos no npm
      }
    }]
  },
  devtool: 'source-map' //Aqui temos uma dependencia para gerenciar possiveis erros na aplicação identificando o diretorio do arquivo onde está o erro
};
