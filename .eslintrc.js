module.exports = { 
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "parserOptions": { "ecmaVersion": 6 },
  "plugins": [
    "babel",
    "react",
  ],
  "rules": {
    "babel/semi": 1,
    "react/jsx-uses-vars": [2]
  }
};