const path = require("path")
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: 'eval-source-map',
    output:{
        filename:"main.js",
        path:path.resolve(__dirname, "dist")
    },
    devServer:{
        contentBase: "./dist",
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:["style-loader", "css-loader"]
            },
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: {
                loader: 'url-loader',
                options: {
                  limit: 1000,
                  name: '[hash:7].[ext]',
                  outputPath: 'images'
                }
              }
            }
        ]
    }
}