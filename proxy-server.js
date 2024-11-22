const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS for all origins
app.use(cors());

app.use('/api', createProxyMiddleware({
  target: 'https://www.swiggy.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove /api from the URL path
  },
  onProxyReq: (proxyReq) => {
    proxyReq.setHeader('Accept', 'application/json');
  },
  onError: (err, req, res) => {
    console.error('Proxy Error:', err);
    res.status(500).send('Proxy Error');
  },
  logLevel: 'debug',
}));

app.listen(5000, () => {
  console.log('Proxy server is running on port 5000');
});