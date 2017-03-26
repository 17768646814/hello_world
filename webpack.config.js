let path = require('path'),
    webpack = require('webpack'),
    ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
    extractCss = new ExtractTextWebpackPlugin('css/[name].css')


require('colors')

let ROOT_PATH = path.resolve(__dirname),
    OUT_PUT_PATH = path.resolve(ROOT_PATH, 'dist')

console.info("ROOT_PATH => []" + ROOT_PATH.blue)
/**/
console.info("OUT_PUT_PATH => []" + OUT_PUT_PATH.blue)
/**/

module.exports = {
    context: ROOT_PATH/*The base directory, an absolute path, for resolving entry points and loaders from configuration, By default the current directory is used,*/,
    entry: {index: './src/index.js'/*the entry point of our app*/},
    output: {
        path: OUT_PUT_PATH,
        publicPath: '/dist/'/*necessary for HMR to know where to load the hot update chunks*/,
        filename: '[name].js'/*the output bundle*/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?importLoaders=1', 'postcss-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?importLoaders=1', 'postcss-loader']
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    devtool: '#eval-source-map'/*https://webpack.js.org/configuration/devtool/*/,
    plugins: [extractCss]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
} else {
    module.exports.devServer = (module.exports.devServer || {});
    module.exports.devServer.port = 8888;
    module.exports.devServer.historyApiFallback = true;
    module.exports.devServer.noInfo = true;
}