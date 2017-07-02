const path = require('path')
const getRules = require('./getRules')
const getPlugins = require('./getPlugins')

/**
* Environment definition.
* @typedef {('development'|'homolog'|'production')} Environment
*/

/**
* Get configuration for each environment.
* @param {Environment} env
* @returns {webpack.Configuration}
*/
function getConfiguration (env) {
  const configuration = {
    entry: {
      main: path.resolve(__dirname, '../src'),
      vendor: [
        'babel-polyfill'
      ]
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, '../dist')
    },
    plugins: getPlugins(env),
    module: {
      rules: getRules(env)
    },
    performance: {
      hints: (env === 'development') ? 'warning' : false
    },
    devtool: (env === 'development') ? 'source-map' : false
  }

  return configuration
}

module.exports = getConfiguration
