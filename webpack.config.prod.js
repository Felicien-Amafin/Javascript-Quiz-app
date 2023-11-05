const path  = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/app.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'dist', 'js')
    },
    devtool: 'cheap-source-map'
};