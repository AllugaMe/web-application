const path = require('path')
const { optimize, DefinePlugin } = require('webpack')
const { UglifyJsPlugin, CommonsChunkPlugin } = optimize
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
* Environment definition.
* @typedef {('development'|'homolog'|'production')} Environment
*/

/**
* Get Plugins for each environment.
* @param {Environment} env
* @returns {Array.<webpack.Plugin>}
*/
function getPlugins (env) {
  const plugins = [
    new ExtractTextPlugin('css/style.css'),
    new HtmlPlugin({
      template: path.resolve(__dirname, '../src/index.pug'),
      filename: 'index.html'
    })
  ]

  if (env !== 'development') {
    plugins.push(
      new DefinePlugin({
        'process.env': {
          'NODE_ENV': '"production"'
        }
      }),
      new CommonsChunkPlugin({
        name: 'vendor'
      }),
      new UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false
        }
      })
    )
  }

  return plugins
}

module.exports = getPlugins
