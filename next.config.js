const path = require('path');

module.exports = {
  webpack: function(config) {
    // Perform customizations to webpack config
    // Important: return the modified config
    config.resolve.alias['@root'] = __dirname;
    config.resolve.alias['@modules'] = path.join(__dirname, 'redux', 'modules');
    return config;
  },
};
