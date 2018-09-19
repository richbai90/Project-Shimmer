const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript({
  webpack: function(config, options) {
    // Perform customizations to webpack config
    // Important: return the modified config
    config.resolve.alias['@root'] = __dirname;
    config.resolve.alias['src'] = path.join(__dirname, 'src');
    config.resolve.alias['components'] = path.join(__dirname, 'components'); // TODO 09/19/2018 Rich Baird : put reusable components on NPM
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())
    return config;
  },
});
