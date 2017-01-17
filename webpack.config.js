var _ = require('lodash');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist')
};

var LAUNCH_COMMAND = process.env.npm_lifecycle_event;

var isProduction = LAUNCH_COMMAND === 'production';

var productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

var developmentConfig = {
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders:[
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "react-hot"
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style!css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]"
      }
    ]

  },
  plugins: [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
};

var productionConfig = {
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  plugins: [HtmlWebpackPluginConfig, productionPlugin]
};

var base = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: "index_bundle.js"
  },
  module: {
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "tslint"
      }
    ],
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style!css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]"
      }
    ]
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    root: path.resolve('./app')
  },
  tslint: {
    emitErrors: true,
    failOnHint: true
  }
};

var environment = isProduction ? productionConfig : developmentConfig;

module.exports = _.merge({}, base, environment);
