const getRoutes = () => require('./server/router'); // eslint-disable-line

module.exports = {
    pageExtensions: ['jsx', 'js'],
    exportPathMap: getRoutes,
    poweredByHeader: false,
};
