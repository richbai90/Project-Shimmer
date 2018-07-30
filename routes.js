const routes = require('next-routes');


module.exports = routes()
  .add('about')
  .add('/', 'home')
  .add('/login', 'login')
  .add('/builder', 'builder');
