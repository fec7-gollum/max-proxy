module.exports = {
  entry: `${__dirname}/server/renderer.jsx`,
  output: {
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        resolve: { extensions: ['.js', '.jsx'] },
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/env', '@babel/typescript'],
          },
        },
      },
    ],
  },
};
