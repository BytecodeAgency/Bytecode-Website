const routes = {};
const staticPages = ['home', 'over', 'services', 'contact']; // eslint-disable-line
const generateStaticPage = page => { return {[page]: { page }} }; // eslint-disable-line
const staticPagesRoutes = staticPages.map(page => generateStaticPage(page)); // eslint-disable-line

const customroutes = {};

routes.push(staticPagesRoutes);
routes.push(customroutes);

module.exports = routes;
