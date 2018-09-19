const npm = require('npm');
npm.load('package.json', () => npm.run('dev'));
