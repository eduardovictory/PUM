const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://scol2.multipago.com.ar',
            changeOrigin: true,
        })
    );
};
