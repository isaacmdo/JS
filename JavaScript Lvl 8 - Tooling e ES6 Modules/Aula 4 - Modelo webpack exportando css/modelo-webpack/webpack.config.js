const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }, {//Adicionamos mais este objeto na config do webpack para os modulos do css
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]//Após adicionar o objeto utilizamos o comando - npm install style-loader css-loader
  },
  devtool: 'source-map'
};
