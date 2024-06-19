const path = require('path'); // Serve para lidar com caminhos de arquivos e diretórios
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin para gerar o arquivo HTML
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Plugin para limpar o diretório de saída

module.exports = { // Configurações do Webpack
  mode: 'development', // Modo de desenvolvimento
  entry: path.resolve(__dirname, 'src', 'index.js'), // Arquivo de entrada
  output: { // Arquivo de saída
    path: path.resolve(__dirname, 'build'), // Diretório onde o arquivo de saída será gerado
    filename: 'bundle[fullhash].js', // Nome do arquivo de saída
  },
  plugins: [
    new HtmlWebpackPlugin({ // Instância do plugin
      template: path.resolve(__dirname, 'public', 'index.html'), // Arquivo HTML de entrada
    }),
    new CleanWebpackPlugin(), // Instância do plugin
  ],
  module: { // Regras para lidar com diferentes tipos de arquivos
    rules: [
      {
        test: /\.js$/, // Expressão regular para encontrar arquivos .js
        exclude: /node_modules/, // Excluir a pasta node_modules
        use: 'babel-loader', // Usar o Babel para transpilar o código
      },
      {
        test: /\.css$/, // Expressão regular para encontrar arquivos .css
        use: ['style-loader', 'css-loader'], // Usar os loaders css-loader e style-loader
      },
    ]
  },
  devServer: {
    port: 3000
  }
};