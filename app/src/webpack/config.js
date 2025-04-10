const webpack = require('webpack');

module.exports = {
  resolve: {
    // resolve aliases for packages, for looking up the correct path
    alias: {
      'cldr$': 'cldrjs',
      'cldr': 'cldrjs/dist/cldr'
    }
  },
  module: {
    rules: [
      {
        test: require.resolve('globalize/dist/node-main.js'),
        loader: 'expose-loader',
        options: {
          exposes: ['Globalize']
        }
      }
    ]
  },
  plugins: [
    // provide plugin allows us to use the modules without having to import them
    new webpack.ProvidePlugin({
      Globalize: 'globalize/dist/node-main.js'
    })
  ]
};