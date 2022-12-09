const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "public"),
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     inject: 'head',
  //     template: './src/index.html',
  //   })],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  // [devtool] this is an additional source map that will let the browser know what files are running our code.
  // Helps with error tracing. Without it we will not know where our errors are coming from because it will state that everything inside the bundle file.
  devtool: "eval-cheap-module-source-map",
  // [devServer] configuration for the live server including port
  devServer: {
    // [static] config for how what to serve
    static: {
      directory: path.join(__dirname, './client/public'),
    },
    compress: true,
    // [port] what port on our local machine to run the dev server
    port: 3000,
  }
}

module.exports = {
  mode: 'production',
  entry: {
    main: path.join(__dirname, "src", "index.js"),
  },
  output: {
    path:path.resolve(__dirname, "public"),
    filename: '[name].js'
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: './src/index.html',
  //   })],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.mp4$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "video"
                }
            }
        ]
    }
    ]
  }
};
