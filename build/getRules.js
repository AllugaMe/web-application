const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Environment definition.
 * @typedef {('development'|'homolog'|'production')} Environment
 */

/**
 * Get Rules for each environment.
 * @param {Environment} env
 * @returns {Array.<webpack.Rule>}
 */
function getRules (env) {
  const styleLoaders = [
    {
      loader: 'css-loader',
      options: {
        minimize: env === 'development' ? false : {
          autoprefixer: false
        }
      }
    },
    {
      loader: 'stylus-loader',
      options: {
        preferPathResolver: 'webpack',
        'include css': true,
        'include': [
          path.resolve(__dirname, '../node_modules'),
          path.resolve(__dirname, '../src/assets/styles')
        ],
        'resolve url': true,
        'define': { env }
      }
    }
  ]

  const vueLoader = {
    loader: 'vue-loader',
    options: {
      loaders: {
        stylus: ExtractTextPlugin.extract({
          publicPath: '../',
          use: styleLoaders,
          fallback: 'vue-style-loader'
        })
      }
    }
  }

  const imageLoaders = [
    {
      loader: 'file-loader',
      options: {
        name: 'img/[name].[ext]'
      }
    }
  ]

  if (env !== 'development') {
    imageLoaders.push(
      'image-webpack-loader'
    )
  }

  return [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.vue$/,
      use: vueLoader
    },
    {
      test: /\.woff2?$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'font/[name].[ext]'
        }
      }
    },
    {
      test: /\.(png|jpe?g|svg)$/,
      use: imageLoaders
    },
    {
      test: /\.ico$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    }
  ]
}

module.exports = getRules
