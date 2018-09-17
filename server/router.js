const { parse } = require ('url');
const routes = require('./routes');


const router = (req, res, app, handle) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query = {} } = parsedUrl;
    const route = routes[pathname];

    if (route) {
        return app.render(req, res, route.page, query);
    }

    return handle(req, res);
};

module.exports = router;
