const routes = {
    '/': { page: '/home' },
    '/contact': { page: '/contact' },
};

module.exports = routes;
module.exports.getRoutes = () => routes;
