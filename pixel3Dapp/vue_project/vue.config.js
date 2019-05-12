module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/static/pixel3d/'
        : '/',

    outputDir: process.env.NODE_ENV === 'production'
        ? '../static/pixel3d/'
        : 'dist',

    indexPath: process.env.NODE_ENV === 'production'
        ? '../../templates/pixel3d/index.html'
        : 'index.html'
}
