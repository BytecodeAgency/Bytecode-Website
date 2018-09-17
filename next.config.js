const getRoutes = require('./server/router').getRoutes;

module.exports = {
    pageExtensions: ['jsx', 'js'],
    exportPathMap: getRoutes,
};
