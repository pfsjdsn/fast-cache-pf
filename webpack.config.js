module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    module: {

        rules: [{
            test: /\.css?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    },
    mode: 'development'
}