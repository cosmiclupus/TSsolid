const path = require('path');

  module.exports = {
    mode: 'development',
    entry: './src/A019-exercicio/A019-exercicio.ts',
   devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            configFile: 'tsconfig.frontend.json',
          }
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname,'frontend' ,'dist','assets','js'),
    },

    devtool: 'source-map',
  };
