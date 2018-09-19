/**
 * Use a custom server with next to allow for custom routing using next-routes
 * And additional security using lusca.
 */

const next = require('next');
const express = require('express');
const session = require('express-session');
const lusca = require('lusca');

const routes = require('./src/routes');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

const configureApp = (server) => {
  const whiteList = [
    /^\/_next\/webpack-hmr$/,
    /^\/_next\/webpack\/(\d*\.)?[a-z0-9]{20}\.{1}hot-update\.{1}(json|js|js\.map)$/,
    /^\/_next\/static\/commons\/(main|manifest)\.{1}js(\.map)?$/,
    /^\/_next\/-\/page\/(_(app|document|error)|index)\.{1}js(\.map)?$/,
  ];


  for (let i = 0; i < routes.routes.length; i++) {
    const route = routes.routes[i];
    whiteList.push(new RegExp(`^\\/_next\\/-\\/page\\${route.page}\\.{1}js(\\.map)?$`));
    whiteList.push(new RegExp(`^\\/_next\\/on-demand-entries-ping\\?page=\\${route.page}$`));
    whiteList.push(/_next\/webpack\/chunks\/[a-zA-Z\d-_]+\.js$/);
    whiteList.push(route.regex);
  }

  server.use(session({
    secret: 'Kuxo9R4E1W+fzC9a/aJohGnCCJcRlnXA1VXhUNxiYzLWtDt1xamoQh/2E68gFUycrNa674Q3gHhbaKilVz07VSA/DZcjJ6LoEUTpuWHNAbKgILA26o2YyuN1PafG/ZzsNdPCfmf9IRrUEBupUHGpZcOje5p6yy0GjLkVBg71XEQ=',
    resave: true,
    saveUninitialized: true,
  }));

  // security settings
  server.use(lusca({
    csrf: true,
    csp: {
      styleNonce: true,
      scriptNonce: true,
      policy: {
        'default-src': "'self'",
      },
    },
    xframe: 'SAMEORIGIN',
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    xssProtection: true,
    nosniff: true,
    referrerPolicy: 'same-origin',
  }));

  server.use((req, res, n) => {
    const { url } = req;
    let match;
    for (let i = 0; i < whiteList.length; i++) {
      if (url.match(whiteList[i])) {
        match = true;
        break;
      }
    }

    if (match) {
      n();
    } else {
      res.status(404).send('Not Found');
    }
  });

  server.use(handler);

  return server;
};


app.prepare().then(() => {
  const server = express();
  configureApp(server).listen(3000);
});
