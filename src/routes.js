const Routes = require('next-routes');

module.exports = new Routes()
  .add('about')
  .add('/', 'home')
  .add('/login', 'login')
  .add('/builder', 'builder');
