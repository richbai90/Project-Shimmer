module.exports = {
  webpack: (config) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    config.resolve.alias["@root"] = __dirname;
    return config
  },
};
