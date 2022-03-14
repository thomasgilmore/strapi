'use strict';

const { join, resolve } = require('path');

const getDirs = ({ appDir, distDir }) => ({
  dist: {
    root: distDir,
    src: join(distDir, 'src'),
    api: join(distDir, 'src', 'api'),
    components: join(distDir, 'src', 'components'),
    extensions: join(distDir, 'src', 'extensions'),
    policies: join(distDir, 'src', 'policies'),
    middlewares: join(distDir, 'src', 'middlewares'),
    config: join(distDir, 'config'),
    public: join(distDir, 'public'),
  },
  app: {
    root: appDir,
    src: join(appDir, 'src'),
    api: join(appDir, 'src', 'api'),
    components: join(appDir, 'src', 'components'),
    extensions: join(appDir, 'src', 'extensions'),
    policies: join(appDir, 'src', 'policies'),
    middlewares: join(appDir, 'src', 'middlewares'),
    config: join(appDir, 'config'),
    public: join(appDir, 'public'),
  },
  static: {
    public: resolve(appDir, strapi.config.get('server.dirs.public')),
  },
});

module.exports = getDirs;
