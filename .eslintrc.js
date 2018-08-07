const path = require('path');

module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  parserOptions: { ecmaVersion: 6 },
  plugins: ['babel', 'react'],
  rules: {
    'babel/semi': 1,
    'react/jsx-uses-vars': [2],
    'react/prop-types': [2],
    'import/no-extraneous-dependencies': false,
    'import/prefer-default-export': false,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 0, // I like underscore private methods
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@root': __dirname,
              '@modules': path.join(__dirname, 'redux', 'modules'),
            },
          },
        },
      },
    },
  },
};
