// entry --> output
const path = require('path')


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,  //it will save all the file that ends with css
            use: [           //its use for using multiple loader (use command)
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },

    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    }
}
