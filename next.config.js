const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript({
  webpack: function(config) {
    // Perform customizations to webpack config
    // Important: return the modified config
    config.resolve.alias['@root'] = __dirname;
    config.resolve.alias['@modules'] = path.join(__dirname, 'redux', 'modules');
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())
    return config;
  },
});
