// Configuring Next.js to import polaris css styles from webpack so that I can use them across my app.


require("dotenv").config();
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

// Polaris needs my Shopify Api key from process.env to be able to work
const apiKey =  JSON.stringify(process.env.SHOPIFY_API_KEY);

module.exports = withCSS({
  webpack: (config) => {
    const env = { API_KEY: apiKey };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
});