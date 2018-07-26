module.exports = { 
  'extends': 'airbnb-base',
  'parser': 'babel-eslint',
  'parserOptions': { 'ecmaVersion': 6 },
  'plugins': [
    'babel',
    'react',  
  ],
  'rules': {
    'babel/semi': 1,
    'react/jsx-uses-vars': [2],
    'import/no-extraneous-dependencies': false,
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }]
  },
  'settings': {
    'import/resolver': {
      'webpack' : {
        'config': {
          'resolve': {
            'alias': {
              '@root': __dirname
            }
          }
        }
      }
    },
  },
};