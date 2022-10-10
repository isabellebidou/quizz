const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/data',

    createProxyMiddleware({
      target: 'http://localhost:4500',
      changeOrigin: false,
    })
  );
};