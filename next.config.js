const { getRoutes } = require('./server/router');

module.exports = {
    pageExtensions: ['jsx', 'js'],
    exportPathMap: getRoutes,
    poweredByHeader: false,
};
